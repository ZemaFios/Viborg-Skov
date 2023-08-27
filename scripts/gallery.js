let modal = document.querySelector('#modal');

let modalClose = document.querySelector('#modal_close');
modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
});

document.addEventListener('click', function (e) {
  if (e.target.className.indexOf('modal_target') !== -1) {
    let img = e.target;
    let modalImg = document.querySelector('#modal_content');
    let captionText = document.querySelector('#modal_caption');
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
});
