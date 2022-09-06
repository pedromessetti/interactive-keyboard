function playSound(idSound) {
    const element = document.querySelector(idSound);
    
    if(element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        alert('ERRO: Elemento não encontrado ou seletor inválido!')
    }
}

const keyList = document.querySelectorAll('.key');

for(let counter = 0; counter < keyList.length; counter++) {
    const key = keyList[counter];
    const keyClass = key.classList[1]
    const idSound = `#sound_${keyClass}`

    key.onclick = function () {
        playSound(idSound);
    }

    key.onkeydown = function (event) {
        if (event.code == 'Space' || event.code == 'Enter') {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}
