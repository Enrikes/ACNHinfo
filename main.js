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
    const monthGrid = document.createElement("div");
    monthGrid.setAttribute("id", "month-grid");
    fishInfo.appendChild(monthGrid);
    const monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (const month of monthArray) {
      const monthDom = document.createElement("div");
      monthDom.classList.add(month);
      monthDom.innerHTML = month;
      monthGrid.appendChild(monthDom);
      monthDom.style.textAlign = "center";
      monthDom.style.border = "1px";
      monthDom.style.borderStyle = "solid";
      monthDom.style.borderColor = "black";
      monthDom.style.backgroundColor = "bisque";
    }
    fishBlur.appendChild(fishInfo);
    // Month detector
    const fishMonth = fishUrl["availability"]["month-array-northern"];
    function monthDetector() {
      if (fishMonth.includes(1)) {
        const jan = document.querySelector(".January");
        jan.style.backgroundColor = "red";
      }
      if (fishMonth.includes(2)) {
        const feb = document.querySelector(".February");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(3)) {
        const feb = document.querySelector(".March");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(4)) {
        const feb = document.querySelector(".April");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(5)) {
        const feb = document.querySelector(".May");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(6)) {
        const feb = document.querySelector(".June");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(7)) {
        const feb = document.querySelector(".July");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(8)) {
        const feb = document.querySelector(".August");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(9)) {
        const feb = document.querySelector(".September");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(10)) {
        const feb = document.querySelector(".October");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(11)) {
        const feb = document.querySelector(".November");
        feb.style.backgroundColor = "red";
      }
      if (fishMonth.includes(12)) {
        const feb = document.querySelector(".December");
        feb.style.backgroundColor = "red";
      }
    }
    monthDetector();
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
function grabFishInfo() {}
function fishClick() {
  fishWrapper.addEventListener("click", grabFishInfo);
}
fishClick();
getFishIcon(fishWrapper);
