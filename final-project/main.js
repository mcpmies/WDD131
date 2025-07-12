// used ChatGPT with JavaScript


// Home JS

const funFacts = [
  "The U.S. one-cent coin is officially called a \"cent,\" but the term \"penny\" stuck, likely due to British influence.",
  "During WWII, pennies were briefly made of steel to conserve copper.",
  "Despite the cost of production, pennies are still more cost-efficient than nickels.",
  "Only about 40 copper pennies were minted in 1943, making them valuable collector's items worth tens of thousands of dollars.",
  "There's a superstition about finding a penny on the ground - heads up for good luck, tails up for bad luck.",
  "Pennies used to be primarily copper, but now they are mostly zinc with a thin copper coating.",
  "It costs about 3.69 cents to produce a penny.",
  "In honor of the Mint’s 225th anniversary in 2017, pennies made in Philadelphia had a “P” mint mark for the first time.",
  "In the past fiscal year, the U.S. Mint produced and distributed over 3.17 billion pennies.",
  "The U.S. Treasury will cease producing pennies in 2026.",
  "There were no pennies produnced that were stamped with the year 1815"
];

document.addEventListener("DOMContentLoaded", () => {
  const factElement = document.querySelector("#fun-fact p");
  if (factElement) {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factElement.textContent = funFacts[randomIndex];
  }
});


// Counter JS

const pennyData = [];
const originalPennyData = []; // Stores the original add order

const yearInput = document.getElementById("year");
const quantityInput = document.getElementById("quantity");
const addButton = document.querySelector("#add-box button");
const addedPenniesContainer = document.getElementById("added-pennies");
const totalDisplay = document.querySelector("#counter-display p");
const filterSelect = document.getElementById("filter");

const exportButton = document.querySelector("#save-info button:nth-child(1)");
const importButton = document.querySelector("#save-info button:nth-child(2)");
const deleteButton = document.querySelector("#save-info button:nth-child(3)");

function getImageForYear(year) {
  year = parseInt(year);

  switch (true) {
    case (year === 1793):
      return "images/1024px-NNC-US-1793-1C-Flowing_Hair_Cent_(chain) (2).jpg";
    case (year >= 1787 && year <= 1788):
      return "images/Fugio_cent_reverse.png";
    case (year >= 1774 && year <= 1796):
      return "images/1024px-1794_1C_'Venus_Marina'_(S-32) (2).jpg";
    case (year >= 1796 && year <= 1807):
      return "images/1024px-NNC-US-1803-1C-Draped_Bust_Cent (2).jpg";
    case (year >= 1808 && year <= 1814):
      return "images/1024px-NNC-US-1813-1C-Classic_Head_Cent (1).jpg";
    case (year >= 1816 && year <= 1839):
      return "images/1024px-NNC-US-1817-1C-Coronet_Cent (1).jpg";
    case ((year >= 1839 && year <= 1857) || year === 1868):
      return "images/1024px-NNC-US-1839-1C-Matron_Head_Cent (1).jpg";
    case (year >= 1856 && year <= 1858):
      return "images/1024px-NNC-US-1858-1C-Flying_Eagle_Cent (1).jpg";
    case (year >= 1859 && year <= 1909):
      return "images/1024px-NNC-US-1860-1C-Indian_Head_Cent_(wreath_&_shield) (1).jpg";
    case (year >= 1909 && year <= 1958):
      return "images/1024px-NNC-US-1909-1C-Lincoln_Cent_(wheat) (2).jpg";
    case (year >= 1959 && year <= 2008):
      return "images/512px-2005_Penny_Rev_Unc_D.png";
    case (year === 2009):
      return "images/2009-lincoln-cent-penny-birth-childhood-kentucky-uncirculated-reverse.jpg";
    case (year >= 2010 && year <= 2025):
      return "images/2010-lincoln-shield-cent (1).jpg";
    default:
      return "images/512px-2005_Penny_Rev_Unc_D.png"; // Default image
  }
}

function updateTotal() {
  const total = pennyData.reduce((sum, item) => sum + item.quantity, 0);
  totalDisplay.textContent = `Total number of pennies: ${total}`;
}

function displayPennies() {
  const container = document.getElementById("added-pennies");
  const noneMessage = document.getElementById("none-message");

  container.innerHTML = "";

  if (pennyData.length === 0) {
    noneMessage.style.display = "block";
    return;
  } else {
    noneMessage.style.display = "none";
  }

  const selectedFilter = filterSelect.value;
  let sortedData = [...pennyData];

  if (selectedFilter === "asc") {
    sortedData.sort((a, b) => a.year - b.year);
  } else if (selectedFilter === "desc") {
    sortedData.sort((a, b) => b.year - a.year);
  } else if (selectedFilter === "recent") {
    sortedData = [...originalPennyData];
  }

  sortedData.forEach((penny) => {
    const pennyDiv = document.createElement("div");
    pennyDiv.classList.add("penny-entry");

    pennyDiv.innerHTML = `
      <img src="${penny.image}" alt="penny image">
      <p>Year: ${penny.year}</p>
      <p>Quantity: ${penny.quantity}</p>
    `;

    container.appendChild(pennyDiv);
  });
}

filterSelect.addEventListener("change", () => {
  displayPennies(); // Re-display based on new filter
});

addButton.addEventListener("click", () => {
  const year = parseInt(yearInput.value);
  const quantity = parseInt(quantityInput.value);

  if (isNaN(year) || year < 1787 || year > 2025) {
    alert("Please enter a year between 1787 and 2025.");
    return;
  }

  if (isNaN(quantity) || quantity < 1) {
    alert("Please enter a valid quantity (1 or more).");
    return;
  }

  // Check if penny with same year already exists in pennyData
  const existingPennyIndex = pennyData.findIndex(p => p.year === year);

  if (existingPennyIndex !== -1) {
    pennyData[existingPennyIndex].quantity += quantity;

    // Also update originalPennyData quantity for the same penny
    const originalIndex = originalPennyData.findIndex(p => p.year === year);
    if (originalIndex !== -1) {
      originalPennyData[originalIndex].quantity += quantity;
    }
  } else {
    const penny = {
      year,
      quantity,
      image: getImageForYear(year),
    };

    pennyData.push({ ...penny });
    originalPennyData.push({ ...penny });
  }

  updateTotal();
  displayPennies();

  yearInput.value = "";
  quantityInput.value = 1;
});

// Delete Button
deleteButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all pennies?")) {
    pennyData.length = 0;
    originalPennyData.length = 0;

    updateTotal();
    displayPennies();
  }
});

// Export Button
exportButton.addEventListener("click", () => {
  const dataStr = JSON.stringify(pennyData);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "penny_data.json";
  a.click();

  URL.revokeObjectURL(url);
});

// Import Button
importButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";

  input.onchange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (Array.isArray(importedData)) {
          pennyData.length = 0;
          originalPennyData.length = 0;

          importedData.forEach(item => {
            if (
              typeof item.year === "number" &&
              item.year >= 1787 && item.year <= 2025 &&
              typeof item.quantity === "number" &&
              item.quantity > 0
            ) {
              pennyData.push(item);
              originalPennyData.push(item);
            }
          });

          updateTotal();
          displayPennies();
          alert("Import successful!");
        } else {
          alert("Invalid data format!");
        }
      } catch (err) {
        alert("Error reading file: " + err.message);
      }
    };

    reader.readAsText(file);
  };

  input.click();
});

// Initial display in case you want to initialize anything on load
displayPennies();
updateTotal();