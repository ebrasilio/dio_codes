let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");   // renderiza o desenho no plano 2d
let box = 32;

function criarBG() {
	context.fillStyle = "lightgreen";				// estilo: define a cor de fundo
	context.fillRect(0, 0, 16 * box, 16 * box); // desenha a borda - (x, y, altura, largura)
}

criarBG();



