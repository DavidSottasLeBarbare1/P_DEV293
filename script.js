function btnOnclick(button) {
    const btnAll = document.getElementById("btnAll");
    const btnPetrouchka = document.getElementById("btnPetrouchka");
    const btnBibi = document.getElementById("btnBibi");
    const btnDoukie = document.getElementById("btnDoukie");
    const btnOther = document.getElementById("btnOther");
    const spanAll = document.getElementById("spanAll");
    const spanBibi = document.getElementById("spanBibi");
    const spanDoukie = document.getElementById("spanDoukie");
    const spanOther = document.getElementById("spanOther");

    button.style.backgroundColor = "#e8def8";

    switch (button) {
        case btnAll:
            btnOther.style.backgroundColor = "#ffffff"
            btnBibi.style.backgroundColor = "#ffffff"
            btnPetrouchka.style.backgroundColor = "#ffffff"
            btnDoukie.style.backgroundColor = "#ffffff"
            spanAll.textContent = "✔ Tout"
            spanPetrouchka.textContent = "Petrouchka"
            spanBibi.textContent = "Bibi"
            spanDoukie.textContent = "Doukie"
            spanOther.textContent = "Autre"
            break;
        case btnPetrouchka:
            btnOther.style.backgroundColor = "#ffffff"
            btnBibi.style.backgroundColor = "#ffffff"
            btnDoukie.style.backgroundColor = "#ffffff"
            btnAll.style.backgroundColor = "#ffffff"
            spanAll.textContent = "Tout"
            spanPetrouchka.textContent = "✔ Petrouchka"
            spanBibi.textContent = "Bibi"
            spanDoukie.textContent = "Doukie"
            spanOther.textContent = "Autre"
            break;
        case btnBibi:
            btnOther.style.backgroundColor = "#ffffff"
            btnDoukie.style.backgroundColor = "#ffffff"
            btnPetrouchka.style.backgroundColor = "#ffffff"
            btnAll.style.backgroundColor = "#ffffff"
            spanAll.textContent = "Tout"
            spanPetrouchka.textContent = "Petrouchka"
            spanBibi.textContent = "✔ Bibi"
            spanDoukie.textContent = "Doukie"
            spanOther.textContent = "Autre"
            break;
        case btnDoukie:
            btnOther.style.backgroundColor = "#ffffff"
            btnBibi.style.backgroundColor = "#ffffff"
            btnPetrouchka.style.backgroundColor = "#ffffff"
            btnAll.style.backgroundColor = "#ffffff"
            spanAll.textContent = "Tout"
            spanPetrouchka.textContent = "Petrouchka"
            spanBibi.textContent = "Bibi"
            spanDoukie.textContent = "✔ Doukie"
            spanOther.textContent = "Autre"
            break;
        case btnOther:
            btnDoukie.style.backgroundColor = "#ffffff"
            btnBibi.style.backgroundColor = "#ffffff"
            btnPetrouchka.style.backgroundColor = "#ffffff"
            btnAll.style.backgroundColor = "#ffffff"
            spanAll.textContent = "Tout"
            spanPetrouchka.textContent = "Petrouchka"
            spanBibi.textContent = "Bibi"
            spanDoukie.textContent = "Doukie"
            spanOther.textContent = "✔ Autre"
            break;
        
    }
}