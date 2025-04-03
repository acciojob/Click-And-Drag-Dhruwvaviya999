// Your code here.

const items = document.querySelectorAll(".item");
const container = document.querySelector(".items");
let isdragging = false;
let selectedCube = null;
let offsetX, offsetY;

items.forEach((item)=>{
	// console.log(items);
	item.addEventListener("mousedown", (e) => {
		isdragging = true;
		selectedCube = e.target;
		offsetX = e.clientX - selectedCube.offsetLeft;
		offsetY = e.clientY - selectedCube.offsetTop;
		container.classList.add("active");
	});

	document.addEventListener("mouseover", (e) => {
		if(!selectedCube) return;

		let newX = e.clientX - offsetX;
		let newY = e.clientY - offsetY;
		const containerRect = container.getBoundingClientRect();
		const cubeRect = selectedCube.getBoundingClientRect();

		if (newX < 0) newX = 0;
		if (newY < 0) newY = 0;
		if (newX + cubeRect.width > containerRect.width) newX = containerRect.width - cubeRect.width;
		if (newY + cubeRect.height > containerRect.height) newY = containerRect.height - cubeRect.height;
		
		selectedCube.style.left = `${newX}px`;
		selectedCube.style.top = `${newY}px`;
	});

	item.addEventListener("mouseup", (e) => {
		container.classList.remove("active");
		isdragging = false;
	});
});