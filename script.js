
let cont_amarelo = document.getElementById('cont_amarelo')
let btn_aposta = document.getElementById('btn_aposta')

btn_aposta.addEventListener('click', function(){
    cont_amarelo.style.display = 'flex'
    document.getElementById('campo').disabled = false
    document.getElementById('select').disabled = false
})

function gerarNumero1() {
    numeroAleatorio1 = Math.floor(Math.random() * 2) + 1
    let numero1 = document.getElementById("numero1")
    document.getElementById('btn2').disabled = false
    numero1.innerHTML = numeroAleatorio1
}

function gerarNumero2() {
    numeroAleatorio2 = Math.floor(Math.random() * 2) + 1
    let numero2 = document.getElementById("numero2")
    document.getElementById('btn3').disabled = false
    numero2.innerHTML = numeroAleatorio2 
}

function gerarNumero3() {
    numeroAleatorio3 = Math.floor(Math.random() * 2) + 1
    let numero3 = document.getElementById("numero3")
    numero3.innerHTML = numeroAleatorio3

    const res = document.getElementById("res")
    const select = document.getElementById("select")
    const campo = document.getElementById("campo")
    const valorSelect = select.value
    const valorCampo = Number(campo.value)
    const resultado = valorSelect * valorCampo
    const modal = document.getElementById("modal")
    const load = document.getElementById("load")

    if (numeroAleatorio1 === numeroAleatorio2 && numeroAleatorio1 === numeroAleatorio3) {
        res.innerHTML = `<p class="txt_resposta">carregando...</p>`

        setTimeout(() => {
            res.innerHTML = `<p class="txt_resposta">Parabens! <br> Você ganhou R$ ${resultado},00</p>`
        }, 500)
        campo.value = ""
        modal.style.display = 'flex'
        modal.style.background = 'black'
        modal.style.borderRadius = '10px'

    } else {
        res.innerHTML = `<p class="txt_resposta">carregando...</p>`
        
        setTimeout(() => {
            res.innerHTML = `<p class="txt_resposta">Que pena! <br> Não foi dessa vez!</p>`
        }, 500)
        campo.value = ""
        modal.style.display = 'flex'
        modal.style.background = 'black'
        modal.style.borderRadius = '10px'
    }          
}

function reiniciar() {
    let cont_amarelo = document.getElementById('cont_amarelo')
    const modal = document.getElementById("modal")
    const res1 = document.getElementById('numero1')
    const res2 = document.getElementById('numero2')
    const res3 = document.getElementById('numero3')
    const campo = document.getElementById("campo")
    cont_amarelo.style.display = 'none'
    res1.innerHTML = ''
    res2.innerHTML = ''
    res3.innerHTML = ''
    campo.innerHTML = ''
    modal.style.display = 'none'

}

const input = document.getElementById('campo')
const btn1 = document.getElementById('btn1')
input.addEventListener('input', function() {
    
    if (input.value.trim() !== ''){
        btn1.disabled = false
    }
})


document.getElementById('recarregaPagina').addEventListener('click', function() {
    location.reload()
})