var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("class", "search-input");
input.setAttribute("id", "search");
// button
let button = document.createElement("button");
let buttonText = document.createTextNode("Check Me");
button.setAttribute("class", "search-button");
button.appendChild(buttonText);
// ambil section form
const divCheck = document.querySelector(".search-form");
divCheck.appendChild(input);
divCheck.appendChild(button);

// buat event di button
button.addEventListener("click", myCheckWord);
// regex

function myCheckWord() {
    // ambil value input

    let inputValue = input.value;
    let regex1 = /^\d{10,12}$/;
    if (inputValue.match(regex1)) {
        alert(`Nomor: ${inputValue} ---- SUDAH sesuai dengan ketentuan`);
    } else {
        alert(`Nomor: ${inputValue} ---- BELUM sesuai dengan ketentuan`);
    }
    return;
}

//
