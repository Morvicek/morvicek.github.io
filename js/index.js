window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cropy').innerText = `© 2019 - ${new Date().getFullYear()} ~ Morvicek`;
})