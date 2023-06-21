document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    canvas.style.height = '500px';
    canvas.style.width = '500px';

    const ctx = canvas.getContext('2d');
    // RECTANGLE
    // ctx.fillStyle = 'red';
    // ctx.fillRect(20,30,40,50);

    // CIRCLE
    // ctx.beginPath();
    // ctx.arc(30, 30, 20, 0, 2 * Math.PI);
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 3;;
    // ctx.stroke();
    // ctx.fillStyle = 'blue';
    // ctx.fill();

    // SMILEY FACE
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
});
