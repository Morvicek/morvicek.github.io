window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cropy').innerText = `© 2019 - ${new Date().getFullYear()} ~ Morvicek`;

})
document.addEventListener('click', musicplay);

function musicplay() {

    setTimeout(()=>{
        var audio = new Audio('./songs/downwitfsikness.mp3');
        audio.play();
    },500)

  }
  