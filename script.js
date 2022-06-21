let randomCard
let divCount = 0
let erros = 0
let points = 0
let pushSpan = document.getElementsByTagName('span')[0]
let combinations = []
let imagesArray = ["null"] //null for the image not to take array 0
let comparation = []
let cardColor = 'lemonchiffon'
const even = new Audio("songs/even.wav")
const clickSound = new Audio("songs/click.wav")
const errorSound = new Audio("songs/error.mp3")



for (let i = 1; i < 21; i++){
    document.body.appendChild(document.createElement('div')).setAttribute('id', i)
    document.getElementById(i).setAttribute('class', 'cards')
    document.getElementById(i).appendChild(document.createElement('hr'))
}

randomize()

function randomize (){
    while (combinations.length < 20){
        randomCard = Math.floor(Math.random() * 20)
        if (combinations.indexOf(randomCard) == -1){
            if(randomCard < 10){
                document.getElementsByClassName("cards")[divCount].style.backgroundImage = `url(imgs/img${randomCard}.jpg)`
                imagesArray.push(randomCard)
            }else{
                //this is for the innerText to be equal 2 times
                document.getElementsByClassName("cards")[divCount].style.backgroundImage = `url(imgs/img${randomCard - 10}.jpg)`
                imagesArray.push(randomCard - 10)
            }
            combinations.push(randomCard)
            divCount++
        }
    }
}






