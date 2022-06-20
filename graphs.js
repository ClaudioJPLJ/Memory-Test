let comparation = []

setTimeout(()=>{ // time to hide letters
    for (let i = 0; i != 20; i++){ 
        document.querySelectorAll('.cards')[i].style.background = "cyan"
        document.querySelectorAll('.cards')[i].addEventListener('click', turn)
    }
}, 2000)

function turn (){ //click event 
    if(this.style.background != 'cyan'){
        return false
    }else{
        comparation.push(this)
    } //don't click on the same card

    if (comparation.length <= 2) { //click limiter 

        this.style.backgroundImage = `url(imgs/img${imagesArray[this.id]}.jpg)` //added before comparison, to add image

            if(comparation.length == 2 && comparation[0].style.backgroundImage == comparation[1].style.backgroundImage){   //image comparator, make sure has a evens
                points++
                comparation = []
            }
            else if (comparation.length == 2 && comparation[0].style.backgroundImage != comparation[1].style.backgroundImage){
                setTimeout(()=>{
                    erros++
                    pushSpan.innerHTML = `Erros: ${erros}`
                    comparation[0].style.background = "cyan"
                    comparation[1].style.background = "cyan"
                    comparation = []
                },850)
            }
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
                    document.querySelectorAll('.cards')[i].style.background = "cyan"
                }
                }, 2000)
        }, 100)
    }
}
