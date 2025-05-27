var modalProduct = document.getElementById("modalProduct");
var modalImg = document.getElementById("modalContent");
var span = document.getElementsByClassName("close")[0];
var img = document.getElementById("imgProduct");
var imgSearchTab = document.getElementsByClassName("imgSearch");
var titleProduct = document.getElementById("titleProduct");
var volume = document.getElementById("volume");
var colorPrinc = document.getElementById("accentColor");
var volumeValue = document.getElementById("volumeValue");

for (let i = 0; i < imgSearchTab.length; i++) {
  var imgSearch = imgSearchTab[i];

  imgSearch.onclick = function () {
    localStorage.setItem("stockAlt", this.alt);
    localStorage.setItem("stockSrc", this.src);
    window.location.href = "product.html";
  };
}

var altText = localStorage.getItem("stockAlt");
var imgSrc = localStorage.getItem("stockSrc");
if (titleProduct) {
  titleProduct.innerHTML = altText;
  img.alt = altText;
  img.src = imgSrc;

  img.onclick = function () {
    modalProduct.style.display = "block";
    modalImg.src = this.src;
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modalProduct.style.display = "none";
      }
    });
  };

  span.onclick = function () {
    modalProduct.style.display = "none";
  };

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Votre message a été envoyé. Merci de m'avoir contactés!");
      this.reset();
    });
}
if (volume) {
  volume.addEventListener("input", function (e) {
    volumeValue.innerText = this.value + "%";
  });
}

function resetSettings() {
  document.getElementById("darkMode").checked = false;
  document.getElementById("fontSize").value = "medium";
  document.getElementById("accentColor").value = "#ffd8e4";
  document.getElementById("pushNotif").checked = true;
  document.getElementById("sounds").checked = true;
  document.getElementById("defaultView").value = "all";
  document.getElementById("autoSave").checked = true;
  document.getElementById("language").value = "fr";
  volume.value = 50;
  volumeValue.innerText = volume.value + "%";
}
