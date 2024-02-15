const recognition = new webkitSpeechRecognition();
recognition.lang = 'uz-UZ'; 

const output = document.getElementById('output');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    recognition.start();
    output.textContent = 'Tanlangan matn: ';
});

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.textContent += transcript;
};
