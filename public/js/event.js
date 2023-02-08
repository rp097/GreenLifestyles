let modal = document.getElementById('create-event-model');

// Get the button that opens the modal
let btn = document.getElementById('create-event-btn');

let e_name = document.getElementById('event_name');
let date = document.getElementById('date');
let des = document.getElementById('description');

let modal_background = document.querySelector('.modal_background');

// Get the <span> element that closes the modal
let modal_related = document.getElementsByClassName('modal_related');

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
	modal_background.style.display = 'block';
};

// window.addEventListener('click', function (event) {
// 	if (
// 		event.target != modal &&
// 		event.target != btn &&
// 		event.target != e_name &&
// 		event.target != date &&
// 		event.target != des &&
// 		event.target != modal_related
// 	) {
// 		modal.style.display = 'none';
// 	}
// });

// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = 'none';
// 	}
// };

modal_background.addEventListener('click', function () {
	modal.style.display = 'none';
	modal_background.style.display = 'none';
});
