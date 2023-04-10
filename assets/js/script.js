let title = document.querySelector('h1');

const handleTitle = (()=> {

	if(title.classList.contains('light') {
		title.classList.remove('light');
	} else {
		title.classList.add('light');


	}
	
	return;

});

setInterval(handleTitle, 1000);