const _ = (selector) => {
    return document.querySelector(selector);
  },
  player = _(".player"),
  play = _(".player__button"),
  ranges = _(".player__slider"),
  video = _(".viewer"),
  progress = _(".progress"),
  progressBar = _(".progress__filled"),
  toggle = _(".toggle"),
  skipButtons = _("[data-skip]");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  play.textContent =
}

play.onclick = togglePlay;
video.onclick = togglePlay;
