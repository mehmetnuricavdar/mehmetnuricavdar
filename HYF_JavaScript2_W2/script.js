const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i=0; i<numbers.length;i++){
//     console.log(numbers[i]);
// }
// ##### forEACH Method
//numbers.forEach((i) => console.log(i));
// ##### MAP Method
let newNumbers = numbers.map((i) => i * 2);
// ##### FILTER Method
let lessThanfive = numbers.filter((i) => i < 5);

// ########### EXERCISE #########

/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

const listings = generateListings(40);
// created a button to implement listing
const filter = {};

function getOption(event) {
  let selectType = document.querySelector("#type-filter").value;
  let selectFacility = document.querySelector("#facilities-filter").value;
  document.querySelector(
    ".output"
  ).textContent = `Type is ${selectType} and facility is ${selectFacility}`;

  filter.type = selectType;
  filter.facilities = selectFacility;
  let filteredListings = listings.filter(
    (i) =>
      i.type.includes(filter.type) && i.facilities.includes(filter.facilities)
  );
  const listArea = document.createElement("div");
  document.body.append(listArea);
  filteredListings.forEach((i) => {
    const listItems = document.createElement("p");
    listArea.appendChild(listItems);
    listItemsData = document.createElement("td");
    listItems.innerHTML = `<img src="${i.img}" max-width ="50px"><br>Type : ${i.type}<br>Facilities : ${i.facilities}<br>Price: ${i.price}<br>Has Garden: ${i.hasGarden}<br>Size : ${i.size}`;
  });
  const clearButton = document.createElement("button");
  listArea.appendChild(clearButton);
  clearButton.innerText = "Clear";
  clearButton.addEventListener("click", function () {
    document.body.removeChild(listArea);
  });
}

//listings.forEach(i => console.log(i.size));

let newListforExercisePrices = listings
  .filter((i) => i.price > 6000)
  .map((i) => i.price);

let cheapListing = listings.filter((i) => i.price < 6000);

let expensiveList = listings.filter((i) => i.price > 6000);

let haveParking = listings.filter((i) =>
  i.facilities.includes(filter.facilities)
);
//### Filter listings

let findType = (listName, typeName) => {
  let typeNameList = listName.filter((i) => i.type.includes(typeName));
  return typeNameList;
};
// findType(newListforExercise, "House");

let findTypeWithPrice = (listName, typeName, priceLimit) => {
  let newListWithPrice = findType(listName, typeName).filter(
    (i) => i.price < priceLimit
  );
  return newListWithPrice;
};

findTypeWithPrice(listings, "House", 6000);

//const filterListings = (newListforExercise, filter)

// const farmListings = filterListings(newListforExercise, filter);
