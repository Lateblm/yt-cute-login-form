let userInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let showPassBtn = document.querySelector(".password-button");
let face = document.querySelector(".face");
let tongue = document.querySelector(".tongue");
let hands = document.querySelectorAll(".hand");

passwordInput.addEventListener("focus", () => {
  hands.forEach((hand) => {
    hand.classList.add("hide");
    hand.classList.remove('peek')

  });
  tongue.classList.remove("breath");
});

passwordInput.addEventListener("blur", () => {
  hands.forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove('peek')

  });
  tongue.classList.add("breath");
});

userInput.addEventListener("focus", () => {
  let length = Math.min(userInput.value.length - 16, 19);
  hands.forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove('peek')

  });
  face.style.setProperty("--rotate-head", `${-length}deg`);
});

userInput.addEventListener("input", (e) => {
  let length = Math.min(e.target.value.length - 16, 19);
  face.style.setProperty("--rotate-head", `${-length}deg`);
});

userInput.addEventListener("blur", () => {
  face.style.setProperty("--rotate-head", `${0}deg`);
});


showPassBtn.addEventListener('click', () => {
  if(passwordInput.type === 'text') {
    passwordInput.type = 'password'
    hands.forEach((hand) => {
      hand.classList.add("hide");
      hand.classList.remove('peek')
    });
  } else if(passwordInput.type === 'password') {
    passwordInput.type = 'text'
    hands.forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.add('peek')
    });
  }
})