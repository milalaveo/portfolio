document.addEventListener('DOMContentLoaded', function () {
  var burgers = document.getElementsByClassName('burger-trigger');

  for (var i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener('change', function (e) {
      if (!e) {
        return;
      }

      document.body.style.overflow = e.target.checked ? 'hidden' : 'initial';
    })
  }
})