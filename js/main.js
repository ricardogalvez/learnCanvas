
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgba(23,167,45,0.4)';
// ctx.fillRect(325, 402, 300, 234);
// ctx.fillStyle = 'rgba(193, 7, 145, 0.4)';
// ctx.fillRect(144, 102, 156, 123);
// ctx.fillStyle = 'rgba(203, 0, 0, 0.4)';
// ctx.fillRect(67, 333, 145, 215);

// ctx.beginPath(); // this gets carried through, so redefine on each object
// ctx.moveTo(56, 167); // x,y
// ctx.lineTo(455,300); // where the line is going
// ctx.lineTo(903,1050); // you can continue the line
// ctx.strokeStyle = 'rgba(23, 167, 123, 0.7)';
// ctx.stroke();

// arc
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
// void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// ctx.beginPath();
// ctx.arc(575, 175, 100, 0, 2 * Math.PI);
// ctx.strokeStyle = 'rgba(230, 17, 11, 0.7)';
// ctx.stroke(); // dont forget the stroke method!

// ctx.beginPath();
// ctx.arc(50, 40, 123, 0, 2 * Math.PI, false);
// ctx.strokeStyle = 'rgba(250, 7, 161, 0.2)';
// ctx.stroke(); // dont forget the stroke method!

for (i = 0; i < 255; i++) {

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.random() * Math.floor(400 / 3.5 * i);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    for (var j = 0; j < 10; j++) {
      ctx.strokeStyle = 'rgb(' + Math.floor(255 - j * i ) + ',' + Math.floor(255 - j * 11) + ', ' + Math.floor(255 - j) + ')';
      ctx.lineWidth = (j * (Math.random() / i * 10))
                       }
    ctx.stroke(); // dont forget the stroke method!
};
