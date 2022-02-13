let tooltipEl = document.getElementById("tooltipID");
let shareIcon = document.getElementById("share-icon");

shareIcon.addEventListener("click", (event) => {
  tooltipEl.classList.toggle("clicked");
});
