const fishWrapper = document.querySelector(".icons");
const fish = "fish";
const bug = "bugs";
const toggeleButton = document.querySelector(".menu-line");
const naviList = document.querySelector(".nav-list");
toggeleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});

async function getFishIcon(wrapper, type) {
  const res = await fetch(`https://acnhapi.com/v1a/${type}/`);
  const data = await res.json();
  for (const fishIcon of data) {
    const fishPic = fishIcon["icon_uri"];
    const fishId = fishIcon["id"];
    const fishName = fishIcon["name"]["name-USen"];
    const icon = document.createElement("div");
    icon.classList.add("fish-item");
    icon.innerHTML = `<img class='creature-icon' src='${fishPic}'>`;
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
    function grabFishInfo(types, fishUrl) {
      types = type;
      fishUrl = fishId;
      console.log(type);
      displayFishInfo(type, fishUrl);
      stopFishEventListener(icon);
    }
  }
}
function stopFishEventListener(event) {
  event.removeEventListener("click", grabFishInfo);
}
async function grabFishUrl(type, url) {
  const res = await fetch(`https://acnhapi.com/v1/${type}/${url}`);
  const data = await res.json();
  console.log(data);
  return data;
}
async function displayFishInfo(type, url) {
  const fishUrl = await grabFishUrl(type, url);
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
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (const month of monthArray) {
      const monthDom = document.createElement("div");
      monthDom.classList.add(month);
      monthGrid.appendChild(monthDom);
      const monthLayer = document.createElement("div");
      monthLayer.setAttribute("id", "month-idle");
      monthLayer.innerHTML = month;
      monthDom.appendChild(monthLayer);
      monthDom.style.textAlign = "center";
      monthDom.style.border = "1px";
      monthDom.style.borderStyle = "solid";
      monthDom.style.borderColor = "black";
      monthDom.style.backgroundColor = "bisque";
    }
    fishBlur.appendChild(fishInfo);
    // Month detector
    const fishMonth = fishUrl["availability"]["month-array-northern"];
    console.log(fishMonth);
    function monthDetector() {
      if (fishMonth.includes(1)) {
        const jan = document.querySelector(".Jan");
        const child = jan.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Jan.";
      }
      if (fishMonth.includes(2)) {
        const feb = document.querySelector(".Feb");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Feb.";
      }
      if (fishMonth.includes(3)) {
        const feb = document.querySelector(".Mar");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Mar.";
      }
      if (fishMonth.includes(4)) {
        const feb = document.querySelector(".Apr");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Apr.";
      }
      if (fishMonth.includes(5)) {
        const feb = document.querySelector(".May");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "May.";
      }
      if (fishMonth.includes(6)) {
        const feb = document.querySelector(".Jun");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Jun.";
      }
      if (fishMonth.includes(7)) {
        const feb = document.querySelector(".Jul");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Jul.";
      }
      if (fishMonth.includes(8)) {
        const feb = document.querySelector(".Aug");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Aug.";
      }
      if (fishMonth.includes(9)) {
        const feb = document.querySelector(".Sep");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Sep.";
      }
      if (fishMonth.includes(10)) {
        const feb = document.querySelector(".Oct");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Oct.";
      }
      if (fishMonth.includes(11)) {
        const feb = document.querySelector(".Nov");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Nov.";
      }
      if (fishMonth.includes(12)) {
        const feb = document.querySelector(".Dec");
        const child = feb.querySelector("#month-idle");
        child.classList.add("month-selector");
        child.removeAttribute("id");
        child.innerHTML = "Dec.";
      }
    }
    monthDetector();
    function addLocation() {
      const locationWrapper = document.createElement("div");
      locationWrapper.classList.add("location-wrapper");
      const location = document.createElement("h1");
      const locationInfo = fishUrl["availability"]["location"];
      location.innerHTML = "Location";
      location.setAttribute("id", "location-header");
      const locationElement = document.createElement("p");
      locationElement.innerHTML = locationInfo;
      locationWrapper.appendChild(location);
      locationWrapper.appendChild(locationElement);
      fishInfo.appendChild(locationWrapper);
    }
    function addPrice() {
      const priceWrapper = document.createElement("div");
      priceWrapper.classList.add("price-wrapper");
      const priceHeader = document.createElement("h1");
      priceHeader.innerHTML = "Price";
      const price = document.createElement("p");
      const regularPrice = fishUrl["price"];
      const cjPrice = fishUrl["price-cj"];
      price.innerHTML = `${regularPrice} bells ( ${cjPrice} bells when sold at CJ )`;
      priceWrapper.appendChild(priceHeader);
      priceWrapper.appendChild(price);
      fishInfo.appendChild(priceWrapper);
    }
    addLocation();
    addPrice();
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
getFishIcon(fishWrapper, fish);
// insect section
const insectEvent = document.getElementById("insect");
insectEvent.addEventListener("click", insectButton);
async function insectButton() {
  const fish = "fish";
  const bug = "bugs";
  wrapper.innerHTML = "";
  if (bug === bug) {
  }
  await getFishIcon(wrapper, bug);
}
// fish click event
const fishEvent = document.getElementById("fish");
fishEvent.addEventListener("click", fishButton);

async function fishButton() {
  const wrapper = document.querySelector(".icons");
  const fish = "fish";
  wrapper.innerHTML = "";
  await getFishIcon(wrapper, fish);
}
