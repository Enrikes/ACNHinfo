const fishWrapper = document.querySelector(".fish-icons");

async function getFishIcon(wrapper) {
  const res = await fetch("https://acnhapi.com/v1a/fish/");
  const data = await res.json();
  for (const fishIcon of data) {
    const fishPic = fishIcon["icon_uri"];
    const fishId = fishIcon["id"];
    const fishName = fishIcon["name"]["name-USen"];

    const icon = document.createElement("div");
    icon.classList.add("fish-item");
    icon.innerHTML = `<img class='loading' src='${fishPic}'>`;
    wrapper.appendChild(icon);

    icon.addEventListener("mouseover", grabFishName);
    icon.addEventListener("mouseout", grabFishNameOut);

    function grabFishName() {
      const fishNamePlate = document.createElement("div");
      fishNamePlate.classList.add("fish-name-plate");
      fishNamePlate.innerHTML = fishName;
      icon.appendChild(fishNamePlate);
    }
    function grabFishNameOut() {
      const fishNamePlate = document.querySelector(".fish-name-plate");
      icon.removeChild(fishNamePlate);
      console.log("bye!");
      fishNamePlate.innerHTML = "";
    }
    //Sends
    icon.addEventListener("click", grabFishInfo);
    function grabFishInfo(fishUrl, fishID) {
      fishUrl = fishId;
      displayFishInfo(fishUrl);
      stopFishEventListener(icon);
    }
  }
}
function stopFishEventListener(event) {
  event.removeEventListener("click", grabFishInfo);
}
async function grabFishUrl(url) {
  const res = await fetch(`https://acnhapi.com/v1/fish/${url}`);
  const data = await res.json();
  console.log(data);
  return data;
}
async function displayFishInfo(url) {
  const fishUrl = await grabFishUrl(url);
  console.log(fishUrl);
  const fishDiv = document.querySelector(".fish-item");
  const fishBlur = document.createElement("div");
  fishBlur.classList.add("fish-blur");
  document.body.style.overflow = "hidden";
  document.body.appendChild(fishBlur);
  const xMark = document.createElement("div");
  xMark.classList.add("x-mark");
  xMark.innerHTML = `<img src='img/overaly/x.png'>`;
  const fishInfo = document.createElement("div");
  const fishName = fishUrl["name"]["name-USen"];
  const fish = fishUrl["image_uri"];
  const myFish = new Image();
  myFish.src = fish;
  myFish.onload = function () {
    fishInfo.classList.add("fish-info-container");
    fishInfo.innerHTML = `<h1 class='fish-title'>${fishName}</h1>
  <img id='fish-img' src='${fish}'>  
  `;
    fishBlur.appendChild(fishInfo);
  };

  xMark.addEventListener("click", removeDisplayFishInfo);
  // Removes Fish information
  function removeDisplayFishInfo() {
    xMark.remove();
    fishBlur.remove();
    document.body.style.removeProperty("overflow");
  }

  fishBlur.appendChild(xMark);
}
function collectionMode() {}

function grabFishInfo() {}
function fishClick() {
  fishWrapper.addEventListener("click", grabFishInfo);
}

fishClick();
getFishIcon(fishWrapper);
