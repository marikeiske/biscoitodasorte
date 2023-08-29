const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Pequenos passos levam a grandes conquistas.",
    "A persistência é a chave para superar qualquer obstáculo.",
    "Seja a mudança que você deseja ver no mundo.",
    "Nunca é tarde demais para começar a trilhar seu caminho.",
    "Transforme cada desafio em uma oportunidade de crescimento.",
    "Seus sonhos são a bússola que guia sua jornada.",
    "A confiança em si mesmo torna qualquer meta alcançável.",
    "Com determinação e foco, você pode alcançar o inalcançável."
  ]




fortuneCookie.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }

        
    }
)



function handleTryClick(event) {
    toggleScreen()
    pickFortune()
    
}

function handleResetClick() {
toggleScreen()
}


function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}


function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}





