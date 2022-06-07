setTimeout(()=>{ // time to hide letters
    for (let i = 0; i != 20; i++){
        document.querySelectorAll('p')[i].style.visibility = "hidden"
    }
    for (let i = 1; i !=21; i++){
        document.getElementById(i).addEventListener('click', turn)
    }
}, 2000)

let comparation = []

function turn (){
    this.style.background = "red"
    this.querySelector('p').style.visibility = "visible"
    comparation.push(this)
    if(comparation.length == 2 && comparation[0].querySelector('p').innerText == comparation[1].querySelector('p').innerText){
        alert("Ok")
        comparation = []
    }else if(comparation.length == 2) {
        setTimeout(()=>{
            comparation[0].querySelector('p').style.visibility = "hidden"
            comparation[1].querySelector('p').style.visibility = "hidden"
            comparation[0].style.background = "greenyellow"
            comparation[1].style.background = "greenyellow"
            comparation = []
        },850   )
    }
}