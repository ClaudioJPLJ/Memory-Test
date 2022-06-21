setTimeout(()=>{ // time to hide letters
    for (let i = 0; i != 20; i++){ 
        document.querySelectorAll('.cards')[i].style.background = cardColor
        document.querySelectorAll('.cards')[i].addEventListener('click', turn)
    }
}, 2000)

function turn (){ //click event 
    if(this.style.background != cardColor){
        return false
    }else{
        comparation.push(this)
    } //don't click on the same card

        if (comparation.length <= 2) { //click limiter 
            animCard(this)
            clickSound.play()
            this.style.backgroundImage = `url(imgs/img${imagesArray[this.id]}.jpg)`
             //added before comparison, to add image. Timer to run the animation first

            if(comparation.length == 2 && comparation[0].style.backgroundImage == comparation[1].style.backgroundImage){   //image comparator, make sure has a evens
                even.play()
                points++
                comparation = []
            }
            else if (comparation.length == 2 && comparation[0].style.backgroundImage != comparation[1].style.backgroundImage){
                setTimeout(()=>{
                    errorSound.play()
                },800)
                setTimeout(()=>{
                    erros++
                    pushSpan.innerHTML = `Erros: ${erros}`
                    comparation[0].style.background = cardColor
                    comparation[1].style.background = cardColor
                    comparation = []
            },1500)
            }
            if (points == 10){
                setTimeout(()=>{
                    alert("Você venceu! Clique em 'ok' para reiniciar")
                    comparation = []
                    combinations = []
                    divCount = 0
                    imagesArray = ["null"]
                    points = 0
                    erros = 0
                    pushSpan.innerHTML = `Erros: ${erros}`
                    randomize()
                        setTimeout(()=>{ // time to hide letters
                        for (let i = 0; i != 20; i++){ 
                            document.querySelectorAll('.cards')[i].style.background = cardColor
                        }
                        }, 2000)
                }, 100)
            }
        }
}

function animCard(target){
        target.animate([
        {transform: 'rotateY(180deg)'},
        {transform: 'rotateY(0deg)'},],
        {duration: 1000},
        
    )
}
