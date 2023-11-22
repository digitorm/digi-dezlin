document.querySelector(".popup-btn").addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector(".popup").style.display = 'block';
}, false);
document.querySelector(".popup-btn").addEventListener('click', function () {
  document.querySelector(".popup-overlay").style.display = 'block';
}, false);
document.querySelector(".popup-close").addEventListener('click', function () {
  document.querySelector(".popup").style.display = 'none';
  document.querySelector(".popup-overlay").style.display = 'none';
}, false);
document.querySelector("body").addEventListener('click', function () {
  document.querySelector(".popup").style.display = 'none';
  document.querySelector(".popup-overlay").style.display = 'none';
}, false);
document.querySelector(".popup").addEventListener('click', function (e) {
  e.stopPropagation();
}, false);