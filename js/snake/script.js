let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");   // renderiza o desenho no plano 2d
let box = 32;
let snake = [];

snake[0] = {
	x: 8 * box,
	y: 8 * box
}
function criarBG() {
	context.fillStyle = "lightgreen";				// estilo: define a cor de fundo
	context.fillRect(0, 0, 16 * box, 16 * box); // desenha a borda - (x, y, altura, largura)
}

function criarCobra(){
	for(i=0; i < snake.length; i++){
		context.fillStyle = "green";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}

}

criarBG();
criarCobra();


