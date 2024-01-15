const displayElement = document.querySelector('.press');
const keycodeElement = document.querySelector('.keycode');
const historyElement = document.querySelector('.history');
const x = document.getElementById("myAudio");
let keyHistory = [];

document.addEventListener('keydown', function(event) {
    x.play();
    let key = event.key === " " ? "space" : event.key;
    const keyCode = event.keyCode;
   
    const isCtrlPressed = event.ctrlKey;

    if (isCtrlPressed) { 
        displayElement.innerHTML = `You pressed <span>CTRL + ${event.key}</span>`;
    } else {
        displayElement.innerHTML = `You pressed <span>${key}</span>`;
    }

    keycodeElement.innerHTML = `<span>${keyCode}</span>`;

    // Add the pressed key to the history
    addToHistory(key);
});

function addToHistory(key) {
    keyHistory.push(key);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyElement.innerHTML = keyHistory.join(' ');
}
