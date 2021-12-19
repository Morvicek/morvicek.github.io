window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);
window.addEventListener("keydown", function(e) {
    if(e.code === "F12"){
        window.location.href = trash(); 
    }
    if (e.ctrlKey) {
        e.preventDefault();
    }
  }, false);
document.addEventListener('DOMContentLoaded', () => {
    let loaded = localStorage.getItem("loaded");
    if(!loaded){
        localStorage.setItem("loaded", true);
        localStorage.setItem("wins", 0);
    }

    document.getElementById('cropy').innerText = `© 2019 - ${new Date().getFullYear()} ~ Morvicek`;
    document.getElementById("hang").innerText = `
    +---+
    |   |
        |
        |
        |
        |
  =========
  `
    document.getElementById("status").innerHTML= "GAMESTATUS: Ingame; Loses: 0"
    let wins = localStorage.getItem("wins");
    document.getElementById("letters").innerText = "Used letters: "
    document.getElementById("wins").innerText="Total Wins: " +  wins
    //localStorage.setItem(key, value);
    getWord()
    
})

const ac = [`
  +---+
  |   |
      |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
=========
`, `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========
`];

const words = `ant baboon badger bat bear beaver camel cat clam cobra cougar coyote crow deer dog donkey duck eagle ferret fox frog goat goose hawk lion lizard llama mole monkey moose mouse mule newt otter owl panda parrot pigeon python rabbit ram rat raven rhino salmon seal shark sheep skunk sloth snake spider stork swan tiger toad trout turkey turtle weasel whale wolf wombat zebra `.split(" ")

var currentword = "";
var splitword = "";
var word = "";
var misscnt = 0;
var usedltr = "";

function getWord(){
    currentword = "";
    splitword = "";
    word = "";
    misscnt = "";
    usedltr = "";
    var element = document.getElementById("word")
    currentword = words[Math.floor(Math.random()*words.length)];
    splitword = currentword.split('')
    var count = 0;
    splitword.forEach(inte => {
        count++
        word += "_"
    });
    element.innerText = word
    document.getElementById("letters").innerText = "Used letters: "
}



function guessletter(letter){
    if(letter.length > 1){
        console.log("runne")
        var nw= letter.split("")
        nw.forEach(e => guessletter(e))
        return;
    }
    var worde = word
    var count = 0;
    splitword.forEach(e =>{
        count++;
        if(letter === e){
            var splitwrd = word.split("")
            var cnt = 0;
            var wrd = ""
            splitwrd.forEach(e => {
                cnt++;
                //console.log(e)
                //console.log(cnt)
                
                if(cnt === count) {
                    console.log(cnt + " : "+ count + " Word counted")
                    wrd += letter
                    if(e === letter) return;
                } else {
                    wrd += e;
                }
                
            })
            word = wrd;
            var element = document.getElementById("word")
            element.innerText = word
        }
    })
   
    if(worde === word) {
        misscnt++;
        miss()
    }
    if(currentword === word){
        document.getElementById("status").innerHTML= "GAMESTATUS: WIN; Loses: "+misscnt ? "GAMESTATUS: WIN; Loses: 0" : misscnt;

        const wins = localStorage.getItem("wins");
        localStorage.setItem("wins", Number(wins) + 1);


        let winse = localStorage.getItem("wins");
        document.getElementById("wins").innerText="Total Wins: " +  winse

    }
    document.getElementById("letters").innerText += " "+letter + ","

}

function anticheat(){
    if(misscnt < 0 || misscnt > 6) window.location.href = trash(); 
}

setInterval(anticheat, 600)
var plaing = false;
const trashe = ['./songs/downwitfsikness.mp3','./songs/club.mp3','./songs/spiral.mp3'];
var audio = new Audio(trashe[Math.floor(Math.random()*trashe.length)]);

function playsong(){
    
    audio.src = trashe[Math.floor(Math.random()*trashe.length)]
    audio.load()
    audio.play();
/*
    if(plaing === true){
        audio.src = trashe[Math.floor(Math.random()*trashe.length)]
        audio.load()
        audio.play();
    } else {
        audio.load()
        audio.play();
        plaing = true;
    }
*/

}

function trash(){
    const trash = ["https://youtu.be/Vh18F_05lLw?t=76", "https://www.youtube.com/watch?v=iik25wqIuFo", "https://youtu.be/F16ZS6rM29s?t=63", "https://www.youtube.com/watch?v=-fr4roFR0Sk","https://www.youtube.com/watch?v=XfR9iY5y94s"]

    return trash[Math.floor(Math.random()*trash.length)]
}

function miss(){
    
    if(misscnt < 0 || misscnt > 6) return;
    if(misscnt === 6) console.log("ripboi")
    document.getElementById("status").innerHTML= "GAMESTATUS: Ingame; Loses: "+misscnt
    var el = document.getElementById("hang").innerText = ac[misscnt]
} 

function wordguess(that, e){
    guessletter(that.value)
    //console.log(that.value)
    //console.log(e)
}