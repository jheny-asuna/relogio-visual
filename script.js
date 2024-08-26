function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cumprimentos = window.document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        cumprimentos.innerHTML = `BOM DIAA!`
        img.src = 'manha.png'
        document.body.style.background = '#CAC9C5'
    } else if (hora >= 12 && hora <= 18) {
        cumprimentos.innerHTML = `BOA TARDEE!`
        img.src = 'tarde.png'
        document.body.style.background = '#E9B193'
    } else {
        cumprimentos.innerHTML = `BOA NOITEE!`
        img.src = 'noite.png'
        document.body.style.background = '#415C61'
    }
}