// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect    = document.getElementById('horn-select');
  const hornImage     = document.querySelector('#expose img');
  const audioPlayer   = document.querySelector('#expose audio');
  const volumeSlider  = document.getElementById('volume');
  const volumeIcon    = document.querySelector('#volume-controls img');
  const playButton    = document.querySelector('#expose button');
  const jsConfetti    = new JSConfetti();  // from js-confetti.browser.js
  // 2. When the user picks a horn, update image + audio src
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;  // "air-horn", "car-horn", or "party-horn"
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = `${horn.replace('-', ' ')} image`;
    audioPlayer.src = `assets/audio/${horn}.mp3`;
  });

  // 3. When the volume slider moves, update icon + audio volume
  volumeSlider.addEventListener('input', () => {
    const vol = Number(volumeSlider.value);
    // set the actual audio volume (0.0 – 1.0)
    audioPlayer.volume = vol / 100;

    // choose the correct icon
    let level;
    if (vol === 0)             level = 0;
    else if (vol < 33)         level = 1;
    else if (vol < 67)         level = 2;
    else                       level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // 4. When Play is clicked, play sound (and confetti for party horn)
  playButton.addEventListener('click', () => {
    // only play if a horn is actually selected
    if (hornSelect.value !== 'select') {
      audioPlayer.play();
      // if party horn, fire the confetti
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });

}