const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 100 - input.length * 10;
    background.style.filter = `blur(${blurValue}px)`;
})