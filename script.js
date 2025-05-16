var modalProduct = document.getElementById("modalProduct");
var img = document.getElementById("imgProduct");
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

img.onclick = function(){
  modalProduct.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

span.onclick = function() {
  modalProduct.style.display = "none";
}