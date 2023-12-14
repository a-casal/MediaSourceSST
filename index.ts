import { getAudioFromManifest, getVideoFromManifest } from "./src/mpd-parser";

const startPlayback = async (isEc3Audio: boolean) => {
  const video: HTMLVideoElement = document.createElement("video");
  video.style.width = "640px";
  video.setAttribute("controls", "");
  document.getElementsByTagName("body")[0].appendChild(video);

  const {
    codecs: audioCodecs,
    segments: audioSegments,
    initializationSegment: audioInitializationSegment,
  } = await getAudioFromManifest(
      "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd",
    isEc3Audio
  );

  const {
    codecs: videoCodecs,
    segments: videoSegments,
    initializationSegment: videoInitializationSegment,
    duration,
  } = await getVideoFromManifest(
      "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd"  
  );

  const videoMimeCodec = `video/mp4; codecs="${videoCodecs}"`;

  const audioMimeCodec = `audio/mp4; codecs="${audioCodecs}"`;

  if (!MediaSource.isTypeSupported(videoMimeCodec)) {
    console.error("Unsupported media format: ", videoMimeCodec);
    return;
  }

  if (!MediaSource.isTypeSupported(audioMimeCodec)) {
    console.error("Unsupported media format: ", audioMimeCodec);
    return;
  }

  const mediaSource: MediaSource = new MediaSource(); // mediaSource.readyState === 'closed'
  const url = window.URL.createObjectURL(mediaSource);
  video.src = url;

  async function getMp4Data(mp4Uri: string): Promise<ArrayBuffer> {
    const mp4Response: Response = await fetch(mp4Uri);
    return mp4Response.arrayBuffer();
  }

  async function appendSourceBuffer(
    mimeCodec: string,
    segments: any,
    initializationSegment: any,
    onEnd: () => void
  ) {
    let index = 0;

    const sourceBuffer: SourceBuffer = mediaSource.addSourceBuffer(mimeCodec);

    sourceBuffer.addEventListener("updateend", async function () {
      if (!sourceBuffer.updating && index !== segments.length) {
        const nextSegmentUri = segments[index];
        const nextSegment = await getMp4Data(nextSegmentUri); // Next segments
        sourceBuffer.appendBuffer(nextSegment);
        index++;
      }

      if (
        mediaSource.readyState === "open" &&
        !sourceBuffer.updating &&
        index === segments.length
      ) {
        onEnd();
      }
    });

    const firstSegment = await getMp4Data(initializationSegment); // First segment is here
    sourceBuffer.appendBuffer(firstSegment);
  }

  async function onSourceOpen() {
    URL.revokeObjectURL(video.src); // Revoke Object URL for garbage collection
    mediaSource.removeEventListener(
      "sourceopen",
      onSourceOpen.bind(mediaSource)
    );

    mediaSource.duration = duration;

    let hasAudioBufferReachedTheEnd = false;
    let hasVideoBufferReachedTheEnd = false;

    const onVideoEnded = () => {
      hasVideoBufferReachedTheEnd = true;
      if (hasAudioBufferReachedTheEnd) {
        mediaSource.endOfStream();
      }
    };

    const onAudioEnded = () => {
      hasAudioBufferReachedTheEnd = true;
      if (hasVideoBufferReachedTheEnd) {
        mediaSource.endOfStream();
      }
    };

    appendSourceBuffer(
      videoMimeCodec,
      videoSegments,
      videoInitializationSegment,
      onVideoEnded
    );

    appendSourceBuffer(
      audioMimeCodec,
      audioSegments,
      audioInitializationSegment,
      onAudioEnded
    );

    video.play();
  }

  mediaSource.addEventListener("sourceopen", onSourceOpen.bind(mediaSource));
};

const isEc3Audio = true;
startPlayback(isEc3Audio);
