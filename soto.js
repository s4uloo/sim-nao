function sim() {
    alert("Você me ama! :)");
    setTimeout(function() {
        window.location.href = "soto2.html";
    }, 100);
}

    function desvia(btn) {
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log('Botão desviado!');
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }