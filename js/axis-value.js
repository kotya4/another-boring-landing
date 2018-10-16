
function AxisValue(name, value) {
  const eq_ = from_dom('eq-' + name);
  const ax_ = from_dom('ax-' + name);
  const input_ = from_dom('input-' + name);

  eq_.innerHTML = value;
  input_.addEventListener('change', on_change, false);


  function from_dom(class_name) {
    return document.getElementsByClassName(class_name)[0];
  }

  function then() { 
    throw(`AxisValue.show -> 'then' does not declared.`);
  };

  function show(pos) {
    ax_.style.display = 'block';
    ax_.style.left = pos.x + 'px';
    ax_.style.top = pos.y + 'px';
    return { then: function(f){ then = f; } };
  }

  function on_change() {
    if (parseInt(input_.value) !== value) {
      input_.style.color = 'red';
      eq_.style.backgroundColor = '#f4a442';
    } else {
      eq_.style.backgroundColor = '#ffffff';
      ax_.innerHTML = value;
      then();
    }
  }


  this.show = show;
}
