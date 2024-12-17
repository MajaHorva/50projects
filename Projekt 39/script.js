const passwordInput = document.querySelector(".password-input");
const background = document.querySelector(".background");

passwordInput.addEventListener("input", function () {
  const blurAmount = -2 * passwordInput.value.length + 20;
  background.style.filter = `blur(${blurAmount}px)`;
});
