document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
  
    noButton.addEventListener("mouseover", () => {
      // Move the 'No' button to a random position
      const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
      const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
  
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    });
  
    yesButton.addEventListener("click", () => {
      window.location.href = "success.html";
    });
  });
  