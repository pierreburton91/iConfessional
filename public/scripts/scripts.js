/* Client-side scripts */

var textarea = document.querySelector('textarea'),
	counter = document.querySelector('#char-count');

if (textarea) {
	textarea.addEventListener('input', function() {
		var countLeft = 140 - textarea.value.length;

		counter.innerHTML = countLeft;

		if (textarea.scrollHeight > 200) {
			textarea.style.height = 'auto';
			textarea.style.height = textarea.scrollHeight+'px';
		}
		else {
			textarea.removeAttribute('style');
		}
	});
}



var form = document.querySelector('form'),
	body = document.querySelector('body'),
	spinnerContainer = document.createElement("DIV"),
	spinner = document.createElement("DIV");

spinnerContainer.classList.add('spinner-container');
spinner.classList.add('spinner');
spinnerContainer.appendChild(spinner);

if (form) {
	form.addEventListener('submit', function() {
		body.appendChild(spinnerContainer);
	});
}