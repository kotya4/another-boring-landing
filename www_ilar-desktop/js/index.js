window.onload = function () {
  // write -> close
  document.body.getElementsByClassName('write__container__hat__button-close')[0].addEventListener('click', () => {
    document.body.getElementsByClassName('write')[0].classList.remove('write--opened');
  });

  // call -> write
  document.body.getElementsByClassName('call__hat__menu__button-write')[0].addEventListener('click', () => {
    document.body.getElementsByClassName('write')[0].classList.add('write--opened');
  });

  // call -> close
  document.body.getElementsByClassName('call__hat__menu__button-close')[0].addEventListener('click', () => {
    document.body.getElementsByClassName('call')[0].classList.remove('call--opened');
  });

  // main__screen-0 -> call
  document.body.getElementsByClassName('main__screen-0__container__content__buttons__button')[0].addEventListener('click', () => {
    document.body.getElementsByClassName('call')[0].classList.add('call--opened');
  });

  // main__screen-5 -> списки
  [...document.body.getElementsByClassName('main__screen-5__container__note__head__button')].forEach((e, i) => {
    e.addEventListener('click', () => {
      if (e.classList.contains('main__screen-5__container__note__head__button--opened')) {
        e.classList.remove('main__screen-5__container__note__head__button--opened');
        document.body.getElementsByClassName('main__screen-5__container__note__desc')[i].classList.remove('main__screen-5__container__note__desc--opened');

        document.body.getElementsByClassName('main__screen-5__container__note__head__button__icon__horisontal')[i].classList.remove('main__screen-5__container__note__head__button__icon__horisontal--opened');
        document.body.getElementsByClassName('main__screen-5__container__note__head__button__icon__vertical')[i].classList.remove('main__screen-5__container__note__head__button__icon__vertical--opened');
      } else {
        e.classList.add('main__screen-5__container__note__head__button--opened');
        document.body.getElementsByClassName('main__screen-5__container__note__desc')[i].classList.add('main__screen-5__container__note__desc--opened');

        document.body.getElementsByClassName('main__screen-5__container__note__head__button__icon__horisontal')[i].classList.add('main__screen-5__container__note__head__button__icon__horisontal--opened');
        document.body.getElementsByClassName('main__screen-5__container__note__head__button__icon__vertical')[i].classList.add('main__screen-5__container__note__head__button__icon__vertical--opened');
      }
    });
  });

  // main__screen-3 -> sliders

  const buttons_bg = [...document.body.getElementsByClassName('main__screen-3__container__content__buttons__button')];
  const buttons_icons = [
    document.body.getElementsByClassName('main__screen-3__container__content__buttons__button__left')[0],
    document.body.getElementsByClassName('main__screen-3__container__content__buttons__button__right')[0],
  ];
  const slides = [...document.body.getElementsByClassName('main__screen-3__container__content__data')];
  let slides_index = slides.length - 1;

  function buttons_updateStates() {
    buttons_bg[0].classList.remove('active');
    buttons_bg[1].classList.remove('active');
    buttons_icons[0].classList.remove('active');
    buttons_icons[1].classList.remove('active');
    if (slides_index < slides.length - 1) {
      buttons_bg[0].classList.add('active');
      buttons_icons[0].classList.add('active');
    }
    if (slides_index > 0) {
      buttons_bg[1].classList.add('active');
      buttons_icons[1].classList.add('active');
    }
  }

  buttons_updateStates();

  for (let i = 0; i < slides.length; ++i) {
    if (i < slides_index) {
      slides[i].classList.add('main__screen-3--left');
    }
    if (i > slides_index) {
      slides[i].classList.add('main__screen-3--right');
    }
  }

  document.body.getElementsByClassName('main__screen-3__container__content__buttons__button')[0].addEventListener('click', () => {
    if (slides_index < slides.length - 1) {
      for (let i = 0; i < slides.length; ++i) {
        if (i === slides_index) {
          slides[i].className = 'main__screen-3__container__content__data';
          slides[i].classList.add('main__screen-3__animation--move-from-0-to-left');
        }
        if (i === slides_index + 1) {
          slides[i].className = 'main__screen-3__container__content__data';
          slides[i].classList.add('main__screen-3__animation--move-from-right-to-0');
        }
      }
      slides_index++;
    }
    buttons_updateStates();
  });

  document.body.getElementsByClassName('main__screen-3__container__content__buttons__button')[1].addEventListener('click', () => {
    if (slides_index > 0) {
      for (let i = 0; i < slides.length; ++i) {
        if (i === slides_index - 1) {
          slides[i].className = 'main__screen-3__container__content__data';
          slides[i].classList.add('main__screen-3__animation--move-from-left-to-0');
        }
        if (i === slides_index) {
          slides[i].className = 'main__screen-3__container__content__data';
          slides[i].classList.add('main__screen-3__animation--move-from-0-to-right');
        }
      }
      slides_index--;
    }
    buttons_updateStates();
  });
};
