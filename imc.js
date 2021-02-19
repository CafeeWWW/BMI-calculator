function somar() {
    let nome = window.document.getElementById('nome')
    let no1 = String(nome)
    let idade = window.document.getElementById('idade')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let res = document.getElementById('res')
    let n1 = Number.parseInt(idade.value)
    let n2 = Number.parseInt(peso.value)
    let n3 = Number.parseFloat(altura.value)
    let imc = parseInt(n2 / (n3 * n3))

    res.innerHTML = (`O resultado do seu imc é ${imc}!`)

    if (imc > 24.9 || imc < 18.5) {
        avaliação.innerHTML += `<p>Seu imc está alterado, procure um medico!</p>`

    }
    else {
        avaliação.innerHTML += `<p> Seu imc está otimo, continue assim!!</p>`
    }



}