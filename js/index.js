window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cropy').innerText = `© 2019 - ${new Date().getFullYear()} ~ Morvicek`;

})
if(!window.location.pathname === "/"){
//document.addEventListener('click', musicplay);
}
function musicplay() {

    setTimeout(()=>{
        var audio = new Audio('./songs/downwitfsikness.mp3');
        audio.play();
        audio.volume = "1000"
    },500)

  }
  
