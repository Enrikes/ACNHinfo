const fishWrapper = document.querySelector(".fish-icons");

async function getFishIcon(wrapper) {
  const res = await fetch("https://acnhapi.com/v1a/fish/");
  const data = await res.json();
  for (const fishIcon of data) {
    const fishPic = fishIcon["icon_uri"];
    const icon = document.createElement("div");
    icon.classList.add("fish-item");
    icon.innerHTML = `<img src='${fishPic}'>`;
    wrapper.appendChild(icon);
  }
}
function displayFishInfo() {
  const fishBlur = document.createElement("div").classList.add("fish-blur");
  document.body.appendChild(fishBlur);
  console.log("i have been clicked");
}
function fishClick() {
  fishWrapper.addEventListener("click", displayFishInfo);
}
fishClick();
getFishIcon(fishWrapper);
