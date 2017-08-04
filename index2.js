function makePicturesVisable() {
  $('img').animate({opacity: 1})
}

function setup() {
  $('button').on('click', makePicturesVisable)
}

$(document).ready(setup);
