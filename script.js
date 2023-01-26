function answerSelected(ev) {
	let element = ev.currentTarget;
	element.classList.add("colorize");
	
	let answers = document.getElementsByClassName("answer");
	for (let answer of answers) {
		answer.removeEventListener("click", answerSelected);
		if (answer.dataset.correct == "true") {
			answer.classList.add("colorize");
		}
	}
	
	let explanation = document.getElementById("answer-explanation");
	if (explanation != null) {
		explanation.style.display = "block";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	let answers = document.getElementsByClassName("answer");
	for (let answer of answers) {
		answer.addEventListener("click", answerSelected);
	}
});