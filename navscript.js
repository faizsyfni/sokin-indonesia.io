const menuToggle = document.getElementById("nav");
const menuList = document.getElementById("menu-list");

menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
function kirim(){
    alert("pesan anda telah terkirim")
}