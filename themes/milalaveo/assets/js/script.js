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

  var marquees = document.getElementsByClassName('marquee');

  for (var i = 0; i < marquees.length; i++) {
    var width = marquees[i].getBoundingClientRect().width;
    var inners = marquees[i].getElementsByTagName('span');

    if (!inners.length) {
      return;
    }

    var inner = inners[0];
    var innerWidth = inner.getBoundingClientRect().width;
    var requiredSize = Math.ceil(width / innerWidth) + 1;

    for (var j = 0; j < requiredSize; j++) {
      marquees[i].appendChild(inner.cloneNode(true));
    }
  }
})