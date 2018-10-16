
function AxisResult(value) {

  const input_ = document.getElementsByClassName('input-result')[0];
  const eq_ = document.getElementsByClassName('eq-result')[0];

  input_.addEventListener('change', on_change, false);


  function on_change() {
    if (parseInt(input_.value) !== value) {
      input_.style.color = 'red';
    } else {
      input_.style.display = 'none';
      eq_.style.display = 'inline-block';
    }
  }

  function prepare() {
    input_.style.display = 'inline-block';
    eq_.style.display = 'none';
    eq_.innerHTML = value;
  }


  this.prepare = prepare;
}
