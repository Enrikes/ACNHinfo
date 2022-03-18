const fishWrapper = document.querySelector(".icons");
const fish = "fish";
const bug = "bugs";
const toggeleButton = document.querySelector(".menu-line");
const naviList = document.querySelector(".nav-list");
toggeleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});
// async function test() {
//   const apiTest = `/creatures`;
//   const response = await fetch(apiTest);
//   const data = await response.json();
//   console.log(data);
//   for (const fish of data) {
//     if (fish.sourceSheet === "Fish") {
//       console.log("im a fish");
//     } else {
//       console.log("I am not a fish");
//     }
//   }
// }
// test();
async function getFishIcon(wrapper, type) {
  const res = await fetch(`/fish`);
  const data = await res.json();
  console.log(data[0].num);
  for (const creatures of data) {
    const creatureIcon = creatures.iconImage;
    const creatureID = creatures.num;
    const creatureName = creatures.name;
    const icon = document.createElement("div");
    icon.classList.add("fish-item");
    icon.innerHTML = `<img class='creature-icon' src='${creatureIcon}'>`;
    wrapper.appendChild(icon);
    icon.addEventListener("mouseover", grabFishName);
    icon.addEventListener("mouseout", grabFishNameOut);
    function grabFishName() {
      const fishNamePlate = document.createElement("div");
      fishNamePlate.classList.add("fish-name-plate");
      fishNamePlate.innerHTML = creatureName;
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
    function grabFishInfo(types, url) {
      types = type;
      url = creatureID;
      console.log(creatures);
      url = creatures;
      displayFishInfo(type, url);
      stopFishEventListener(icon);
    }
  }
}
function stopFishEventListener(event) {
  event.removeEventListener("click", grabFishInfo);
}
async function grabFishUrl(type) {
  const res = await fetch(`/fish`);
  const data = await res.json();
  console.log(data);
  return data;
}
const test = { testt: 123, test: 234 };
console.log(test);
async function displayFishInfo(type, url) {
  const creature = url;
  console.log(creature);
  const fishDiv = document.querySelector(".fish-item");
  const fishBlur = document.createElement("div");
  fishBlur.classList.add("fish-blur");
  document.body.style.overflow = "hidden";
  document.body.appendChild(fishBlur);
  const xMark = document.createElement("div");
  xMark.classList.add("x-mark");
  xMark.innerHTML = `<img src='img/overaly/x.png'>`;
  const fishInfo = document.createElement("div");
  const creatureName = creature.name;
  const creatureIcon = creature.critterpediaImage;
  const myFish = new Image();
  const fish = creature.critterpediaImage;
  myFish.src = fish;
  myFish.onload = function () {
    fishInfo.classList.add("fish-info-container");
    fishInfo.innerHTML = `<h1 class='fish-title'>${creatureName}</h1>
  <img id='fish-img' src='${creatureIcon}'>  
  `;
    const monthGridWrapper = document.createElement("div");
    monthGridWrapper.setAttribute("id", "month-grid-wrapper");
    const monthGrid = document.createElement("div");
    monthGrid.setAttribute("id", "month-grid");
    fishInfo.appendChild(monthGridWrapper);
    monthGridWrapper.appendChild(monthGrid);
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
    const fishMonth = creature["hemispheres"]["north"]["monthsArray"];
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
    function addInfo() {
      const infoWrapper = document.createElement("div");
      infoWrapper.classList.add("info-wrapper");
      const locationWrapper = document.createElement("div");
      locationWrapper.classList.add("location-wrapper");
      const location = document.createElement("h1");
      const locationInfo = creature.whereHow;
      location.innerHTML = "Location";
      location.setAttribute("id", "location-header");
      const locationElement = document.createElement("p");
      locationElement.innerHTML = locationInfo;
      locationWrapper.appendChild(location);
      locationWrapper.appendChild(locationElement);

      const priceWrapper = document.createElement("div");
      priceWrapper.classList.add("price-wrapper");
      const priceHeader = document.createElement("h1");
      priceHeader.innerHTML = "Price";
      const price = document.createElement("p");
      const regularPrice = creature.sell;
      price.innerHTML = `${regularPrice} bells`;
      fishInfo.appendChild(infoWrapper);
      priceWrapper.appendChild(priceHeader);
      priceWrapper.appendChild(price);
      infoWrapper.appendChild(locationWrapper);
      infoWrapper.appendChild(priceWrapper);
    }
    function timeline() {
      const timelineWrapper = document.createElement("div");
      timelineWrapper.classList.add("timeline-wrapper");
    }
    function addPrice() {}
    addInfo();
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
