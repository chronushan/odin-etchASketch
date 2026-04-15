function createGrid(size = 16) {
	for (let i = 0; i < size; i++) {
		const grid = document.querySelector("#grid");
		const row = document.createElement("div");
		row.setAttribute("class", "row");
		grid.appendChild(row);

		for (let j = 0; j < size; j++) {
			const square = document.createElement("div");
			square.className = "square";
			row.appendChild(square);
		}
	}
}

createGrid();

function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `${r},${g},${b}`;
}

function paintSquares() {
	const square = document.querySelectorAll(".square");
	square.forEach((item) => {
		item.style.backgroundColor = `rgb(255,255,255)`;
		console.log(item.style.getPropertyValue("background-color"));
	});

	let opacity = 0.1;
	square.forEach((item) =>
		item.addEventListener("mouseenter", () => {
			if (item.style.backgroundColor == `rgb(255, 255, 255)`) {
				item.style.backgroundColor = `rgb(${randomRGB()})`;
				item.style.opacity = opacity;
			} else {
				item.style.opacity = +item.style.getPropertyValue("opacity") + 0.1;
			}
		}),
	);
}
paintSquares();

const gridSize = document.querySelector("#gridSize");
let newGrid;
gridSize.addEventListener("click", (event) => {
	event.preventDefault();
	newGrid = Number(prompt("Choose the grid size: "));
	console.log(newGrid);
	while (true) {
		if (newGrid > 0) {
			break;
		} else {
			newGrid = Number(prompt("Invalid value. Please choose the grid size: "));
		}
	}
	document.querySelector("#grid").replaceChildren();
	createGrid(newGrid);
	paintSquares();
});
