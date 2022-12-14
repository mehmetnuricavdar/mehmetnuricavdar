const offeringsJsonString = `
{
    "items" : [
        {
            "name" : "Vegetables Stir Fry",
            "price" : 9.99,
            "isVegetarian" : true,
            "spicinessScale" : 2,
            "ingredients" : [ "bamboo shoots", "pea pods", "mushrooms", "carrots", "broccoli" ]
        },

        {
            "name" : "Coffee Crusted Atlantic Salmon",
            "price" : 18.99,
            "isVegetarian" : false,
            "spicinessScale" : 0,
            "ingredients" : [ "coffee beans", "salmon", "maple syrup"]
        },

        {
            "name" : "Avocado Omlette",
            "price" : 7.99,
            "isVegetarian" : true,
            "spicinessScale" : 0,
            "ingredients" : [ "eggs", "butter", "avocados" ]
        },

        {
            "name" : "Spicy Tofu Burrito",
            "price" : 12.99,
            "isVegetarian" : true,
            "spicinessScale" : 3,
            "ingredients" : [ "flour tortillas", "tofu", "rice", "soy cheese", "chili peppers"]
        }
    ]
}
`;


let offeringsJson = {};

function buildOfferingsSection() {
  let sectionElement = document.getElementById("offerings-section");

  if (!sectionElement) {
    console.log("Cannot find where to put the offerings!");
    return;
  }

  try {
    offeringsJson = JSON.parse(offeringsJsonString);
    console.log(offeringsJson);
  } catch (error) {
    alert(
      "There is a problem with the menu. Please contact a staff member: " +
        error
    );
  }

  if (!offeringsJson.items) {
    alert(
      "There is a problem with the menu. Please contact a staff member. No items found in data"
    );
  }

  offeringsJson.items.forEach((item) => {
    let newDomItem = document.createElement("p");
    newDomItem.className = "item-name";
    newDomItem.innerHTML = item.name;
    sectionElement.appendChild(newDomItem);

    newDomItem = document.createElement("p");
    newDomItem.className = "item-price";
    newDomItem.innerHTML = "$" + item.price.toFixed(2);
    sectionElement.appendChild(newDomItem);

    let listString = "";

    item.ingredients.forEach((ingredient, index) => {
      if (index > 0) {
        listString += ", ";
      }
      listString += ingredient;
    });
    newDomItem = document.createElement("p");
    newDomItem.className = "item-ingredients";
    newDomItem.innerHTML = listString;
    sectionElement.appendChild(newDomItem);

    let ratingString = "vegetarian: ";
    ratingString += item.isVegetarian ? "yes" : "no";

    if (item.spicinessScale > 0) {
      ratingString += ", spiciness: " + item.spicinessScale + "/3";
    }

    newDomItem = document.createElement("p");
    newDomItem.className = "item-footnotes";
    newDomItem.innerHTML = ratingString;
    sectionElement.appendChild(newDomItem);
  });
}

function getPdf() {
  console.log("getPDF() called");

  fetch(
    "http://127.0.0.1:5501/?data=" + JSON.stringify(offeringsJson)
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let url = data.pdfUrl;
      if (url) {
        window.location.href = url;
      } else {
        alert("An error occured");
      }
    })
    .catch((error) =>
      console.log("An error occurred while requesting the PDF: " + error)
    );
}

buildOfferingsSection();
