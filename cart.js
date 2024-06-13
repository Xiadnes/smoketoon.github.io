const cardSide = document.querySelectorAll('.knopki')
const storage = JSON.parse(localStorage.getItem('but') || '[]')
const cart = document.querySelectorAll('.knopki')
const ofor = document.createElement('button')
ofor.innerHTML = 'Підтвердити замовлення'
ofor.className = 'ofor';
var count = 0
if (storage.length) {
	storage.forEach(el => {
		const newCard = document.createElement('div')
		newCard.className = 'foo';
		let o = JSON.parse(localStorage.getItem('but'));
		console.log(o)
		newCard.innerHTML = '<p>'+el.title+'</p><button id="'+count+'">Видалити</button>'
		cardSide[0].appendChild(newCard)
		cart.forEach((el, idx) =>{
			const btn = el.childNodes[count].childNodes[1]
			const elik = cart[0].childNodes[btn.id]
			btn.addEventListener('click', () =>{
				cardSide[0].removeChild(elik)
				let o = JSON.parse(localStorage.getItem('but'));
				o.splice(btn.id,1);
				localStorage.setItem('but', JSON.stringify(o));
				location.reload()
  });
});
		count = count+1
});
cardSide[0].appendChild(ofor)
}

//'<img src="'+el.title+'.png" alt="">'+'





//localStorage.clear()