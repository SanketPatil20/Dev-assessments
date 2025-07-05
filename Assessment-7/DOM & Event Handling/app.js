const buttonClick = document.getElementById("b1")
const changeHeading = document.getElementById("heading")
const changePara = document.getElementById("para"); // Target the span

buttonClick.addEventListener("click", () => {
    changeHeading.style.color = "red"
    changePara.style.color = "red"
})


const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const welcomeMessage = document.getElementById("welcomeMessage");


submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name) {
        welcomeMessage.innerHTML = `<h2>Welcome, ${name}!</h2>`;
        welcomeMessage.style.color = "blue";
    } else {
        welcomeMessage.innerHTML = "<p>Please enter your name!</p>";
        welcomeMessage.style.color = "red";
    }
});

// background color changer 
document.getElementById("changeBgBtn").addEventListener("click", () => {
    // random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;

});