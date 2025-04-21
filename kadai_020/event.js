const changetext = () => {
    document.getElementById("text").textContent = "ボタンをクリックしました";

};

document.getElementById("btn").addEventListener("click", changetext);