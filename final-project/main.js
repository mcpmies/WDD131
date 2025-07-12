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
  "The U.S. Treasury will cease producing pennies in 2026."
];

document.addEventListener("DOMContentLoaded", () => {
  const factElement = document.querySelector("#fun-fact p");
  if (factElement) {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factElement.textContent = funFacts[randomIndex];
  }
});

// Counter JS