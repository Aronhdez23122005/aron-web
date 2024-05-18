document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Dibujo del corazón
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.moveTo(200, 100);
  ctx.bezierCurveTo(200, 150, 100, 200, 200, 300);
  ctx.bezierCurveTo(300, 200, 200, 150, 200, 100);
  ctx.fill();

  // Dibujo del mensaje
  ctx.font = "italic bold 20px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Yuri", 200, 320);
  ctx.fillText("Buenos Dias Flaka hermosa", 200, 350);

  // Función para dibujar una flor
  function drawFlower(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    for (let i = 0; i < 9; i++) {
      ctx.moveTo(x, y);
      ctx.arc(x, y, 20, 0, Math.PI, false);
      ctx.rotate(Math.PI / 5);
    }
    ctx.fill();
  }

  // Dibujo de la flor
  drawFlower(300, 200);
});
