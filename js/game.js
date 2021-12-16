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

const words = `ant baboon badger bat bear beaver camel cat clam cobra cougar 
coyote crow deer dog donkey duck eagle ferret fox frog goat 
goose hawk lion lizard llama mole monkey moose mouse mule newt 
otter owl panda parrot pigeon python rabbit ram rat raven 
rhino salmon seal shark sheep skunk sloth snake spider 
stork swan tiger toad trout turkey turtle weasel whale wolf 
wombat zebra `.split(" ")

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
        console.log("ez4ence")
    }

}

function anticheat(){
    if(misscnt < 0 || misscnt > 6) window.location.href = trash(); 
}

setInterval(anticheat, 600)

function playsong(){
    var audio = new Audio('./songs/downwitfsikness.mp3');
    audio.play();
    audio.volume = "1000"
}

function trash(){
    const trash = ["https://youtu.be/Vh18F_05lLw?t=76", "https://www.youtube.com/watch?v=iik25wqIuFo", "https://youtu.be/F16ZS6rM29s?t=63", "https://www.youtube.com/watch?v=-fr4roFR0Sk","https://www.youtube.com/watch?v=XfR9iY5y94s"]

    return trash[Math.floor(Math.random()*trash.length)]
}

function miss(){
    
    if(misscnt < 0 || misscnt > 6) return;
    if(misscnt === 6) console.log("ripboi")
    var el = document.getElementById("hang").innerText = ac[misscnt]
} 

function wordguess(that, e){
    guessletter(that.value)
    //console.log(that.value)
    //console.log(e)
}