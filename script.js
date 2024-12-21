// script.js
function convertToBinary() {
    const inputText = document.getElementById("inputText").value;
    let binaryOutput = '';
    
    for (let i = 0; i < inputText.length; i++) {
        const binaryChar = inputText[i].charCodeAt(0).toString(2).padStart(8, '0');
        binaryOutput += binaryChar + ' ';
    }

    document.getElementById("binaryOutput").innerText = binaryOutput.trim();
}
