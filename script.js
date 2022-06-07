let randomCard
let divCount = 0
for (let i = 1; i < 21; i++){
    document.body.appendChild(document.createElement('div')).setAttribute('id', i)
    document.getElementById(i).setAttribute('class', 'cards')
    document.getElementById(i).appendChild(document.createElement('p'))
}
const combinations = []

while (combinations.length < 20){
    randomCard = Math.floor(Math.random() * 20)
    if (combinations.indexOf(randomCard) == -1){
        if(randomCard < 10){
            document.getElementsByTagName('p')[divCount].innerText = randomCard
        }else{
            document.getElementsByTagName('p')[divCount].innerText = randomCard - 10 //this is for the innerText to be equal 2 times
        }
        combinations.push(randomCard)
        divCount++
    }
    console.log(combinations)
}






