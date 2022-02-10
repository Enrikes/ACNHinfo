const fishWrapper = document.querySelector(".fish-icons");

async function getFishIcon(wrapper) {
  const res = await fetch("https://acnhapi.com/v1a/fish/");
  const data = await res.json();
  for (const fishIcon of data) {
    const fishPic = fishIcon["icon_uri"];
    const icon = document.createElement("div");
    icon.classList.add("fish-item");
    icon.innerHTML = `<img class='loading' src='${fishPic}'>`;
    wrapper.appendChild(icon);
  }
}
function displayFishInfo() {
  const fishBlur = document.createElement("div");
  fishBlur.classList.add("fish-blur");
  document.body.style.overflow = "hidden";
  document.body.appendChild(fishBlur);
  const xMark = document.createElement("div");
  xMark.classList.add("x-mark");
  xMark.innerHTML = `<img src='img/overaly/x.png'>`;
  xMark.addEventListener("click", removeDisplayFishInfo);
  // Removes Fish information
  function removeDisplayFishInfo() {
    xMark.remove();
    fishBlur.remove();
    document.body.style.removeProperty("overflow");
  }
  fishBlur.appendChild(xMark);
  console.log("i have been clicked");
}
function fishClick() {
  fishWrapper.addEventListener("click", displayFishInfo);
}

fishClick();
getFishIcon(fishWrapper);
