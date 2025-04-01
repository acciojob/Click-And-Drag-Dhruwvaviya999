// Your code here.

const items = document.querySelectorAll(".item");
const container = document.querySelector(".items");
let isdragging = false;
let draggedElement = null;
let offsetX, offsetY;

items.forEach((item)=>{
	// console.log(items);
	item.addEventListener("mousedown", (e) => {
		isdragging = true;
		draggedElement = e.target;
		offsetX = e.clientX - item.offsetLeft;
		offsetY = e.clientY - item.offsetTop;
		container.classList.add("active");
	});

	document.addEventListener("mouseover", (e) => {
		if(isdragging){
			console.log(e);
		}
	});

	item.addEventListener("mouseup", (e) => {
		container.classList.remove("active");
		isdragging = false;
	});
});