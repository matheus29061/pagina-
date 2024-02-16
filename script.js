function sim() {
    alert("eu já sabia hehe")
}

function desvia(t) {
    var btn = t;
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    consele.log("ta mentido");
}

randomNumber(0, 100);


function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
