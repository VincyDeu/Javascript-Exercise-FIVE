let myH1 = document.getElementsByTagName("h1")[0];
myH1.innerText = "SMARTPHONE";

let myBody = document.getElementsByTagName("body")[0];
myBody.style.background = "yellow";

let myAddress = document.getElementById("address");
myAddress.innerText = "Viale Morgini 14";

let myItem = document.querySelectorAll("a");
for (let i = 0; i < myItem.length; i++) {
    myItem[i].classList.add("link");
}

let myItemIMG = document.querySelectorAll("a");
for (let i = 0; i < myItemIMG.length; i++) {
    myItem[i].classList.toggle("hidden");
}

let myHiddenIMG = document.getElementsByClassName("hidden");