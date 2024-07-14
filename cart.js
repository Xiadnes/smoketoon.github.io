const cardSide = document.querySelectorAll('.knopki')
const storage = JSON.parse(localStorage.getItem('but') || '[]')
const cart = document.querySelectorAll('.knopki')
const ofor = document.createElement('button')

ofor.innerHTML = 'Перейти до оформлення'
ofor.className = 'ofor';
ofor.id = 'oformsuper';
var count = 0
if (storage.length) {
	storage.forEach(el => {
		const newCard = document.createElement('div')
		newCard.className = 'foo';
		let o = JSON.parse(localStorage.getItem('but'));
		console.log(o)
		newCard.innerHTML = '<p>'+el.title+'</p><p>120грн</p><button id="'+count+'">Видалити</button>'
		cardSide[0].appendChild(newCard)
		cart.forEach((el, idx) =>{
			const btn = el.childNodes[count].childNodes[2]
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
const newCard = document.createElement('div')
newCard.className = 'foo1';
newCard.innerHTML = '<p>Сума:</p><p> '+120*storage.length+'грн</p>'
cardSide[0].appendChild(newCard)
cardSide[0].appendChild(ofor)
}
//function sleep(ms) {        
//   return new Promise(resolve => setTimeout(resolve, ms)); }  
document.getElementById('oformsuper').onclick = function(event) {
//	document.getElementById('pipioo').classList.add('vverx');
//	window.scrollTo({
//		top: 0
//	})
	window.location.href = 'oform.html'; }; 
//};
//'<img src="'+el.title+'.png" alt="">'+'





//localStorage.clear()