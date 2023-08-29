console.clear();

const startButton = document.querySelector('[data-js="start-button"]');
const toast = document.querySelector('[data-js="toast"]');
const countdown = document.querySelector('[data-js="countdown"]');

let timeoutId;

startButton.addEventListener("click", () => {
  startButton.disabled = true;
  timeoutId = setTimeout(hideToast, 2000);
  toast.classList.remove("toast--hidden");
  countdown.classList.add("countdown--visible");
});

toast.addEventListener("click", () => {
  clearTimeout(timeoutId);
  hideToast();
});



function hideToast() {
  startButton.disabled = false;
  toast.classList.add("toast--hidden");
  countdown.classList.remove("countdown--visible");
}

document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.querySelector('[data-js="start-button"]');
  const toast = document.querySelector('[data-js="toast"]');

  startButton.addEventListener('click', function () {
    toast.classList.add('toast--spinning');
    setTimeout(() => {
      toast.classList.remove('toast--spinning');
    }, 3000); 
  });
});
