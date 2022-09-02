/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const output = document.getElementById("output");
function showCars() {
  return fetch(ENDPOINT).then((response) => response.json());
}

showCars().then((data) => {
  data.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car");
    carCard.innerHTML = `
            <h2>${car.brand}</h2>
            <ul>
                ${car.models.map((model) => `<li>${model}</li>`).join("")}
            </ul>
        `;

    carCard.style.border = "black solid";
    carCard.style.margin = "1rem";
    carCard.style.background = "lightgrey";
    carCard.style.textAlign = "center";

    output.appendChild(carCard);
  });
});
