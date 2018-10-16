
(function(){

  function onload() {
    const ax_img = document.getElementsByClassName('ax-img')[0];
    const canvas = new AxisCanvas(ax_img.width);

    // generates random values
    const a_val = 6 + (Math.random() * 4 | 0);
    const result_val = 11 + (Math.random() * 4 | 0);
    const b_val = result_val - a_val;

    const a = new AxisValue('a', a_val);
    const b = new AxisValue('b', b_val);
    const result = new AxisResult(result_val);

    a.show(canvas.draw_arrow(0, a_val)).then(function(){
      b.show(canvas.draw_arrow(a_val, result_val)).then(function(){
        
        result.prepare();

      });
    });
  }

  window.addEventListener('load', onload, false);

})();
