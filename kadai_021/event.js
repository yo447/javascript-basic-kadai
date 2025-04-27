const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const change = text.textContent = "ボタンをクリックしました";
        console.log(change);
    },2000)
});