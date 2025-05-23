var modalProduct = document.getElementById("modalProduct");
var modalImg = document.getElementById("modalContent");
var span = document.getElementsByClassName("close")[0];
var img = document.getElementById("imgProduct");
var imgSearchTab = document.getElementsByClassName("imgSearch");
var titleProduct = document.getElementById("titleProduct");
for (let i = 0; i < imgSearchTab.length; i++) {
  var imgSearch = imgSearchTab[i];

  imgSearch.onclick = function () {
    localStorage.setItem('stockAlt', this.alt);
    localStorage.setItem('stockSrc', this.src);
    window.location.href = 'product.html';
  }
}

var altText = localStorage.getItem('stockAlt');
var imgSrc = localStorage.getItem('stockSrc');
titleProduct.innerHTML = altText;
img.alt = altText;
img.src = imgSrc;

img.onclick = function () {
  modalProduct.style.display = "block";
  modalImg.src = this.src;
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modalProduct.style.display = "none";
    }
  })
}
  ;

span.onclick = function () {
  modalProduct.style.display = "none";
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Votre message a été envoyé. Merci de nous avoir contactés!');
  this.reset();
});