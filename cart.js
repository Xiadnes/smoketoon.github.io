const cardSide = document.querySelectorAll('.cart')
const storage = JSON.parse(localStorage.getItem('but') || '[]')
const cart = document.querySelectorAll('.cart')

var count = 0
if (storage.length) {
	storage.forEach(el => {
		const newCard = document.createElement('div')
		newCard.innerHTML = '<p>'+el.title+'</p><button id="'+count+'">Delete</button>'
		cardSide[0].appendChild(newCard)
		cart.forEach((el, idx) =>{
			const btn = el.childNodes[count].childNodes[1]
			const elik = cart[0].childNodes[btn.id]
			console.log(btn)
			btn.addEventListener('click', () =>{
				cardSide[0].removeChild(elik)
				let o = JSON.parse(localStorage.getItem('but'));
				console.log(btn.id)
				o.splice(btn.id,1);
				console.log(o)
				localStorage.setItem('but', JSON.stringify(o));
				location.reload()
  });
});
		count = count+1
});
}







//localStorage.clear()
