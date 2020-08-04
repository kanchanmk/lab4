"use strict";
// // #1 VENDING MACHINE
// Create four buttons. Each button represents a different product with a different price. Also
// display a total, which starts at $0.00. Whenever a button is clicked, update the total by adding
// the price of that item.

let btns = document.querySelectorAll(".food");
let total = 0;

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		let amount = btn.getAttribute("data-amt");
		//console.log(amount);
		total += parseInt(amount);

		document.querySelector(".total").innerText = total;
	});
});

// #2 MAKE MONEY
// Create a form with two inputs: a number input (or range input) for count and a select input
// for the type of coin: Penny, Nickel, Dime, or Quarter.
// ● When the form is submitted, add the specified number of “coins” to the page, each with
// text from the “Which coin?” input. For example, the diagram below shows what would
// be displayed after submitting the form.

// Get the amount from numCoins and denomination

const getAmt = (numCoins, denomination) => {
	switch (denomination) {
		case "penny":
			return numCoins;
		case "nickel":
			return numCoins * 5;
		case "dime":
			return numCoins * 10;
		case "quarter":
			return numCoins * 25;
	}
};

const coinForm = document.querySelector(".coinForm");
let coinContainer = document.createElement("div");

// add an attribute to an element
coinContainer.setAttribute("class", "coin-container");
coinForm.append(coinContainer);

let numCoins = 0;
let denomination = "";
let sum = 0;
coinForm.addEventListener("submit", (event) => {
	event.preventDefault();

	let coinData = new FormData(coinForm);
	numCoins = coinData.get("numCoins");
	denomination = coinData.get("denomination");
	sum += parseFloat(getAmt(numCoins, denomination));
	for (let index = 0; index < numCoins; index++) {
		let coinDiv = document.createElement("div");
		coinDiv.innerText = denomination;
		coinDiv.setAttribute("id", denomination + "_" + index);
		coinDiv.setAttribute("class", "coin " + denomination);
		// add the coin circles to the coin container
		coinContainer.append(coinDiv);
		document.querySelector(".sumTotal").innerText = sum;
		coinDiv.addEventListener("click", () => {
			console.log(coinDiv);
			// coinContainer.("#" + coinDiv.getAttribute("id"));
			const clickedCoinId = coinDiv.getAttribute("id");
			const clickedCoinDenomination = clickedCoinId.slice(
				0,
				clickedCoinId.indexOf("_")
			);
			sum -= getAmt(1, clickedCoinDenomination);
			coinDiv.remove();
			document.querySelector(".sumTotal").innerText = sum;
		});
	}
});

/// #3
const bulb = document.querySelector(".light_bulb");
//console.log(bulb);
const onBtn = document.querySelector(".swOn");
onBtn.addEventListener("click", () => {
	bulb.classList.add("switch_on");
});

const offBtn = document.querySelector(".swOff");
offBtn.addEventListener("click", () => {
	bulb.classList.remove("switch_on");
});

const toggleBtn = document.querySelector(".swToggle");
toggleBtn.addEventListener("click", () => {
	bulb.classList.toggle("switch_on");
});

const endBtn = document.querySelector(".swEnd");
const bulbBtns = document.querySelectorAll(".bulb");
console.dir(bulbBtns);
endBtn.addEventListener("click", () => {
	bulb.remove();

	for (let btn of bulbBtns) {
		btn.classList.add("disabled");
	}
});
