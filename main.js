// const judul = document.querySelector("#judul");
// judul.innerText = "Judul sudah diubah dengan innerText";
// judul.style.color = "blue";
// judul.style.fontSize = "44px";

// const paragraf = document.querySelector(".paragraf");
// paragraf.innerText = "Paragraf diganti dengan innerText";

// const paragraf2 = document.querySelector("span");
// paragraf2.innerText = ("paragraf 2 diganti dengan innerText");

// const header = document.querySelectorAll("h2");
// header[0].innerText = "h2 diganti semua";

function sayHello() {
    alert("Hello World");
    console.log("Hello Sekai");
}

const btn = document.querySelector("#btn");
btn.onclick = function() {
    alert("Selamat anda berhasil mendaftar");
    console.log("Congrats");
}