for (let i = 0; i < 16; i++) {
	const grid = document.querySelector("#grid");
	const row = document.createElement("div");
	row.setAttribute("class", "row");
	grid.appendChild(row);

	for (let j = 0; j < 16; j++) {
		const square = document.createElement("div");
		square.className = "square";
		row.appendChild(square);
	}
}

const square = document.querySelectorAll(".square");
square.forEach((item) =>
	item.addEventListener("mouseenter", () => {
		item.setAttribute("style", "background-color: black");
	}),
);

const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener("click", (event) => {
	event.preventDefault();
	let newGrid = Number(prompt("Choose the grid size: "));
	console.log(newGrid);
	while (true) {
		if (newGrid > 0) {
			break;
		} else {
			newGrid = Number(prompt("Invalid value. Please choose the grid size: "));
		}
	}
});
