function twoWithFiveSwapContent() {
    const second = document.querySelector(".second");
    const fifth = document.querySelector(".fifth");
    const temp = second.innerHTML;
    second.innerHTML = fifth.innerHTML;
    fifth.innerHTML = temp;
}
function calculatePentagonArea(){
    let side = 5;
    let apopheme = 3;
    let area = 5/2 * side * apopheme;
    const element = document.querySelector(".forth");
    element.append(`Area of pentagon: ${area} `);
}
function reverseNumber(number){
    const reversedNumber = number.split('').reverse().join('');
    setCookie("number", reversedNumber, 365);
    alert(`Reversed number: ${reversedNumber}\nNumber was saved in cookies`);
}
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}
function deleteCookie(name){
    setCookie(name, null, null);
}

const form = document.getElementById('form-number');

if (getCookie("number") === null) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const number = document.getElementById('number').value;
        reverseNumber(number);
    });
} else {
    alert("Number saved in cookies " + getCookie("number") + "\nAfter pressing OK cookie will be deleted." +
        "To use the form again refresh the page");
    deleteCookie("number");
    form.style.display = "none";
}

function changeBorderColor() {
    const color = prompt("Enter the border color (e.g., 'red', '#ff0000'):");
    if (color) {
        const blocks = document.querySelectorAll(".grid-container .item");
        blocks.forEach(block => {
            block.style.border = `2px solid ${color}`;});
        localStorage.setItem("borderColor", color);
    }
}

window.addEventListener("load", () => {const savedColor = localStorage.getItem("borderColor");
    if (savedColor) {
        const blocks = document.querySelectorAll(".grid-container .item");
        blocks.forEach(block => {
            block.style.border = `2px solid ${savedColor}`;
        });
    }
});