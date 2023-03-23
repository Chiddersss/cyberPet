// images the user will interact with
const dogImg = document.querySelector("#dog-img");
const catImg = document.querySelector("#cat-img");
const fishImg = document.querySelector("#fish-img");
const lizardImg = document.querySelector("#lizard-img");
// elements of interface
const welcomeScreen = document.querySelector("#welcome-screen");
const petInterface = document.querySelector("#pet-interface");
const petImg = document.querySelector("#pet-img");
const insertName = document.querySelector("#insert-name");
const happinessLevel = document.querySelector("#happiness-level");
const petEmotion = document.querySelector("#pet-emotion");
const startAgain = document.querySelector("#start-again");
// action buttons
const feedBtn = document.querySelector("#feed-button");
const washBtn = document.querySelector("#wash-button");
const strokeBtn = document.querySelector("#stroke-button");
const playBtn = document.querySelector("#play-button");
// variables that will be updated during the programme
let pet;
let petName;

petInterface.style.display = "none";

// function that asks user for name of pet
const getName = () => {
   petName = prompt("Aw, great choice! Now enter a name for your pet.");
   while (petName.length === 0) {
      alert("Please enter a name for your pet.");
      petName = prompt("Your pet name:");
   }
};

// decreasing the happiness level of progress bar
const decreaseHappiness = () => {
   const intervalId = setInterval(reduceBar, 1000);
   function reduceBar() {
      happinessLevel.value--;
   }
};

dogImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "images/animal-dog.jpg";
   pet = new Dog(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
});

catImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "images/pandaNormal.png";
   pet = new Cat(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
   strokeBtn.innerHTML = "Tell a joke";
   strokeBtn.addEventListener("mouseenter", () => {
      petImg.src = "images/pandaBored.png";
   });
   strokeBtn.addEventListener("click", () => {
      petImg.src = "images/pandaLaugh.png";
   });
   feedBtn.addEventListener("mouseenter", () => {
      petImg.src = "images/pandaHot.png";
   });
   feedBtn.addEventListener("click", () => {
      petImg.src = "images/pandaEat.png";
   });
   washBtn.innerHTML = "Train";
   washBtn.addEventListener("mouseenter", () => {
      petImg.src = "images/pandaFight.png";
   });
   washBtn.addEventListener("click", () => {
      petImg.src = "images/pandaSport.png";
   });
   playBtn.innerHTML = "Sleep";
   playBtn.addEventListener("mouseenter", () => {
      petImg.src = "images/pandaZzz.png";
   });
   playBtn.addEventListener("click", () => {
      petImg.src = "images/pandaSleep.png";
   });
   startAgain.addEventListener("mouseenter", ()=> {
      petImg.src = "images/pandaAngry.png";
   });
});

fishImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "images/animal-fish.jpg";
   pet = new Fish(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
});

lizardImg.addEventListener("click", () => {
   welcomeScreen.style.display = "none";
   petInterface.style.display = "block";
   getName();
   petImg.src = "images/animal-lizard.jpg";
   pet = new Lizard(petName);
   insertName.textContent = pet.name;
   decreaseHappiness();
});

feedBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.feed();
});

strokeBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.stroke();
});

washBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.wash();
});

playBtn.addEventListener("click", () => {
   petEmotion.style.display = "block";
   pet.play();
});

// start again option
startAgain.addEventListener("click", () => {
   // petInterface.style.display = "none";
   // welcomeScreen.style.display = "block";
   // petEmotion.textContent = ``;
   // happinessLevel.value = 50;
   location.reload();
});