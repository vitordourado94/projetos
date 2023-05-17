const darkMode = document.getElementsByClassName("darkMode");
const cardsMode = document.getElementsByClassName("card2");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

moon.addEventListener("click", function () {
    document.body.classList.toggle("darkMode");
    moon.style.display = "none";
    sun.style.display = "block";
    
    for (let i = [0]; i < cardsMode.length; i++) {
        cardsMode[i].style.background = "#111";
    }
});

sun.addEventListener("click", function () {
    document.body.classList.toggle("darkMode");
    sun.style.display = "none";
    moon.style.display = "block";
    
    for (let i = [0]; i < cardsMode.length; i++) {
        cardsMode[i].style.background = "grey";
    }
});