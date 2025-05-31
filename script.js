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

document.addEventListener('DOMContentLoaded', () => {

    const randomBannerImgContainer = document.getElementById("randomBannerImg");

    const randomImgsData = [
        { alt: "PepetDodo", src: "./Images/Petrouchka/Dodo.jpg", name: "PepetDodo" },
        { alt: "PepetDebout", src: "./Images/Petrouchka/Debout.jpg", name: "PepetDebout" },
        { alt: "PepetTigre", src: "./Images/Petrouchka/Tigre.jpg", name: "PepetTigre" },
        { alt: "PepetTriste", src: "./Images/Petrouchka/Triste.jpg", name: "PepetTriste" },
        { alt: "PepetBébé", src: "./Images/Petrouchka/Bebe.jpg", name: "PepetBébé" },
        { alt: "PepetLémurien", src: "./Images/Petrouchka/Lemurien.jpg", name: "PepetLémurien" },
        { alt: "PepetPoilu", src: "./Images/Petrouchka/Poilue.jpg", name: "PepetPoilu" },
        { alt: "PepetConcombre", src: "./Images/Petrouchka/Concombre.jpg", name: "PepetConcombre" },
        { alt: "PepetChoqué", src: "./Images/Petrouchka/Choque.jpg", name: "PepetChoqué" },
        { alt: "PepetSoleil", src: "./Images/Petrouchka/Soleil.jpg", name: "PepetSoleil" },
        { alt: "PepetAttentive", src: "./Images/Petrouchka/Attentive.jpg", name: "PepetAttentive" },
        { alt: "PepetFaché", src: "./Images/Petrouchka/Fache.jpg", name: "PepetFaché" },
        { alt: "PepetChaise", src: "./Images/Petrouchka/Chaise.jpg", name: "PepetChaise" },
        { alt: "PepetCouché", src: "./Images/Petrouchka/Couche.jpg", name: "PepetCouché" },
        { alt: "PepetCurieuse", src: "./Images/Petrouchka/Curieuse.jpg", name: "PepetCurieuse" },
        { alt: "PepetFatigué", src: "./Images/Petrouchka/Fatigue.jpg", name: "PepetFatigué" },
        { alt: "PepetCaché", src: "./Images/Petrouchka/Cache.jpg", name: "PepetCaché" },
        { alt: "PepetJouer", src: "./Images/Petrouchka/Jouer.jpg", name: "PepetJouer" },
        { alt: "PepetBlanche", src: "./Images/Petrouchka/Blanche.jpg", name: "PepetBlanche" },
        { alt: "PepetÉblouie", src: "./Images/Petrouchka/Eblouie.jpg", name: "PepetÉblouie" },
        { alt: "PepetÉtiré", src: "./Images/Petrouchka/Etire.jpg", name: "PepetÉtiré" },
        { alt: "PepetToast", src: "./Images/Petrouchka/Toast.jpg", name: "PepetToast" },
        { alt: "PepetLèche", src: "./Images/Petrouchka/Leche.jpg", name: "PepetLèche" },
        { alt: "PepetBaguette", src: "./Images/Petrouchka/Baguette.jpg", name: "PepetBaguette" },
        { alt: "BibiAura", src: "./Images/Bibi/aura.jpg", name: "BibiAura" },
        { alt: "BibiBagarre", src: "./Images/Bibi/bagarre.jpg", name: "BibiBagarre" },
        { alt: "BibiCaché", src: "./Images/Bibi/cache.jpg", name: "BibiCaché" },
        { alt: "BibiCadeau", src: "./Images/Bibi/cadeau.jpg", name: "BibiCadeau" },
        { alt: "BibiCollier", src: "./Images/Bibi/collier.jpg", name: "BibiCollier" },
        { alt: "BibiCouché", src: "./Images/Bibi/couche.jpg", name: "BibiCouché" },
        { alt: "BibiFaché", src: "./Images/Bibi/fache.jpg", name: "BibiFaché" },
        { alt: "BibiFier", src: "./Images/Bibi/fier.jpg", name: "BibiFier" },
        { alt: "BibiJaune", src: "./Images/Bibi/jaune.jpg", name: "BibiJaune" },
        { alt: "BibiLavabo", src: "./Images/Bibi/lavabo.jpeg", name: "BibiLavabo" },
        { alt: "BibiModel", src: "./Images/Bibi/model.jpg", name: "BibiModel" },
        { alt: "BibiMuscle", src: "./Images/Bibi/muscle.jpg", name: "BibiMuscle" },
        { alt: "BibiSaut", src: "./Images/Bibi/saut.jpg", name: "BibiSaut" },
        { alt: "BibiSerpent", src: "./Images/Bibi/serpent.jpg", name: "BibiSerpent" },
        { alt: "BibiTour", src: "./Images/Bibi/tour.jpg", name: "BibiTour" },
        { alt: "BibiVertige", src: "./Images/Bibi/vertige.jpg", name: "BibiVertige" },
        { alt: "BibiLinge", src: "./Images/Bibi/linge.jpg", name: "BibiLinge" },
        { alt: "BibiMuffin", src: "./Images/Bibi/muffin.jpg", name: "BibiMuffin" },
        { alt: "BibiBoire", src: "./Images/Bibi/boire.jpg", name: "BibiBoire" },
        { alt: "BibiBaille", src: "./Images/Bibi/baille.jpg", name: "BibiBaille" },
        { alt: "BibiPot", src: "./Images/Bibi/pot.jpg", name: "BibiPot" },
        { alt: "BibiHyène", src: "./Images/Bibi/hyene.jpg", name: "BibiHyène" },
        { alt: "BibiChameau", src: "./Images/Bibi/chameau.jpg", name: "BibiChameau" },
        { alt: "BibiNonchalant", src: "./Images/Bibi/nonchalant.jpg", name: "BibiNonchalant" }
    ];

    const initialShuffledImgs = [...randomImgsData].sort(() => 0.5 - Math.random());

    function generateRandomImages() {
        if (!randomBannerImgContainer || initialShuffledImgs.length === 0) {
            return;
        }
        randomBannerImgContainer.innerHTML = '';
        let approximateItemWidth = 0;
        if (initialShuffledImgs.length > 0) {
            const dummyItem = document.createElement("div");
            dummyItem.classList.add("divBannerSearch");
            dummyItem.style.visibility = 'hidden';
            dummyItem.style.position = 'absolute';
            dummyItem.style.left = '-9999px';
            dummyItem.style.top = '-9999px';

            const dummyImg = document.createElement("img");
            dummyImg.src = initialShuffledImgs[0].src;
            dummyImg.classList.add("imgBannerSearch");

            const dummyBr = document.createElement("br");
            const dummySpan = document.createElement("span");
            dummySpan.textContent = initialShuffledImgs[0].name;

            dummyItem.appendChild(dummyImg);
            dummyItem.appendChild(dummyBr);
            dummyItem.appendChild(dummySpan);

            document.body.appendChild(dummyItem);
            approximateItemWidth = dummyItem.offsetWidth;
            document.body.removeChild(dummyItem);
        } else {
            approximateItemWidth = 180;
        }

        const containerWidth = randomBannerImgContainer.offsetWidth;
        const maxItemsToFit = Math.floor(containerWidth / approximateItemWidth);
        const numberOfItemsToDisplay = Math.min(maxItemsToFit, initialShuffledImgs.length);

        for (let i = 0; i < numberOfItemsToDisplay - 1; i++) {
            const selectedItem = initialShuffledImgs[i];

            const wrapperDiv = document.createElement("div");
            wrapperDiv.classList.add("divBannerSearch");
            wrapperDiv.classList.add("imgSearch");
            wrapperDiv.style.minWidth = `${approximateItemWidth}px`;
            wrapperDiv.style.flexShrink = 0;

            const imgElement = document.createElement("img");
            imgElement.alt = selectedItem.alt;
            imgElement.src = selectedItem.src;
            imgElement.classList.add("imgBannerSearch");

            const br = document.createElement("br");
            const spanElement = document.createElement("span");
            spanElement.textContent = selectedItem.name;

            wrapperDiv.appendChild(imgElement);
            wrapperDiv.appendChild(br);
            wrapperDiv.appendChild(spanElement);

            wrapperDiv.onclick = function() {
                localStorage.setItem("stockAlt", selectedItem.alt);
                localStorage.setItem("stockSrc", selectedItem.src);
                window.location.href = "product.html";
            };

            randomBannerImgContainer.appendChild(wrapperDiv);
        }
    }

    generateRandomImages();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(generateRandomImages, 1000);
    });
});