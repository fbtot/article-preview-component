let tooltipEl = document.getElementById('tooltipID');
let shareIcon = document.getElementById('share-icon');

function openMenu() {
  shareIcon.addEventListener('click', (event) => {
    tooltipEl.classList.toggle('clicked');
  });
}

export { openMenu };
