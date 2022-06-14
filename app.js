const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".btn--brev");
const nextBtn = document.querySelector(".btn--next");

slide.forEach((item,index) => {
	item.style.left = `${index * 100}%`;
})

let count = 0;

window.addEventListener("DOMContentLoaded", control);

prevBtn.addEventListener("click", function () {
	count--;
	control();
})

nextBtn.addEventListener("click", function () {
	count++;
	control();
})

function control() {
	if(count < 0){
		count = (slide.length - 1);
	}else if(count === slide.length){
		count = 0;
	}

	if(count < (slide.length - 1)){
		nextBtn.style.display = "inline-block";
	}else {
		nextBtn.style.display = "none";
	}

	if(count > 0){
		prevBtn.style.display = "inline-block";
	}else {
		prevBtn.style.display = "none";
	}

	slide.forEach(item=> {
		item.style.transform = `translateX(-${count * 100}%)`;
	})
}