
function AxisCanvas(width) {

  const cvs = document.getElementsByClassName('ax-canvas')[0];
  const ctx = cvs.getContext('2d');
  cvs.width = width;


  function draw_arrow(from, to) {
    const step_size = 39, offset = 35; // HACK: related to image size

    const x1 = from * step_size;
    const x2 = to * step_size;
    const y = cvs.height;
    const r = (x2 - x1) / 2;
    const rx = offset + x1 + r;
    const rot = 0.3;
    // draws arc
    ctx.strokeStyle = '#e242f4';
    ctx.lineWidth = 3;
    ctx.translate(rx, y + r * Math.sin(rot / 2));
    ctx.rotate(Math.PI - rot / 2);
    ctx.beginPath(); 
    ctx.arc(0, 0, r, Math.PI, rot, true);
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // draws arrow
    ctx.beginPath();
    ctx.moveTo(rx + r, y);
    ctx.lineTo(rx + r + 3, y - 10);
    ctx.moveTo(rx + r, y);
    ctx.lineTo(rx + r - 10, y - 3);
    ctx.stroke();
    // returns absolute position of arc's top
    return { 
      x: cvs.style.left + rx - 20 | 0, // HACK: related to textarea size
      y: cvs.style.top + y - r - 10 | 0
    };
  }


  this.draw_arrow = draw_arrow;
}
