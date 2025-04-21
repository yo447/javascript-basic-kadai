
const text = document.getElementById("text");
const btn = document.getElementById("btn")

const changetext = () => {
    text.textContent = "ボタンをクリックしました";

};

btn.addEventListener("click", changetext);