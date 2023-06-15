//active Menu
document.querySelectorAll('.navOpt').forEach((size, index)=>{
	size.addEventListener('click', (e)=> {
		document.querySelector('.navOpt.active').classList.remove('active');
		size.classList.add('active');
	})
})