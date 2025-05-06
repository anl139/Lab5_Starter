// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
let voices = [];

const img = document.querySelector('#explore img');
const textInput = document.getElementById('text-to-speak');
const voiceSelect = document.getElementById('voice-select');
const btn = document.querySelector('#explore button');

function populateVoices() {
  voices = synth.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function init() {
  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  btn.addEventListener('click', () => {
    if (!textInput.value.trim()) return;
    const utter = new SpeechSynthesisUtterance(textInput.value);
    const selectedIndex = voiceSelect.value;
    if (voices[selectedIndex]) {
      utter.voice = voices[selectedIndex];
    }

    utter.onstart = () => {
      img.src = 'assets/images/smiling-open.png';
    };
    utter.onend = () => {
      img.src = 'assets/images/smiling.png';
    };

    synth.speak(utter);
  });
}