const storage = JSON.parse(localStorage.getItem('but') || '[]')
const textarea = document.querySelectorAll('.knopki')
let tg = window.Telegram.WebApp;

tg.expand();
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');
const gr1 = document.querySelector('.gr1');
const gr2 = document.querySelector('.gr2');
function updateSelect2() {
  const selectedOption = select1.options[select1.selectedIndex].text;

  // Очистить существующие варианты в select2
  select2.options.length = 0;

  // Добавить новые варианты в select2 based on selectedOption
  if (selectedOption === 'Маяк') {
	const option = document.createElement('option');
	option.text = '10.40';
	option.value = 'сьогодні';
	gr1.appendChild(option);

	const option1 = document.createElement('option');
	option1.text = '11.40';
	option1.value = 'сьогодні';
	gr1.appendChild(option1);

	const option2 = document.createElement('option');
	option2.text = '12.40';
	option2.value = 'сьогодні';
	gr1.appendChild(option2);

	const option3 = document.createElement('option');
	option3.text = '13.40';
	option3.value = 'сьогодні';
	gr1.appendChild(option3);

	const option4 = document.createElement('option');
	option4.text = '14.40';
	option4.value = 'сьогодні';
	gr1.appendChild(option4);

	const option5 = document.createElement('option');
	option5.text = '15.40';
	option5.value = 'сьогодні';
	gr1.appendChild(option5);

	const option6 = document.createElement('option');
	option6.text = '16.40';
	option6.value = 'сьогодні';
	gr1.appendChild(option);
																//Зміна під написом Завтра
	const option0 = document.createElement('option');
	option0.text = '10.40';
	option0.value = 'завтра';
	gr2.appendChild(option0);

	const option21 = document.createElement('option');
	option21.text = '11.40';
	option21.value = 'завтра';
	gr2.appendChild(option21);

	const option22 = document.createElement('option');
	option22.text = '12.40';
	option22.value = 'завтра';
	gr2.appendChild(option22);

	const option23 = document.createElement('option');
	option23.text = '13.40';
	option23.value = 'завтра';
	gr2.appendChild(option23);

	const option24 = document.createElement('option');
	option24.text = '14.40';
	option24.value = 'завтра';
	gr2.appendChild(option24);

	const option25 = document.createElement('option');
	option25.text = '15.40';
	option25.value = 'завтра';
	gr2.appendChild(option25);

	const option26 = document.createElement('option');
	option26.text = '16.40';
	option26.value = 'завтра';
	gr2.appendChild(option26);
																//ВАріанти для другого вибору
    } else if (selectedOption === 'Атб бiля вокзалу') {
	const option = document.createElement('option');
	option.text = '10.20';
	option.value = 'сьогодні';
	gr1.appendChild(option);

	const option1 = document.createElement('option');
	option1.text = '11.20';
	option1.value = 'сьогодні';
	gr1.appendChild(option1);

	const option2 = document.createElement('option');
	option2.text = '12.20';
	option2.value = 'сьогодні';
	gr1.appendChild(option2);

	const option3 = document.createElement('option');
	option3.text = '13.20';
	option3.value = 'сьогодні';
	gr1.appendChild(option3);

	const option4 = document.createElement('option');
	option4.text = '14.20';
	option4.value = 'сьогодні';
	gr1.appendChild(option4);

	const option5 = document.createElement('option');
	option5.text = '15.20';
	option5.value = 'сьогодні';
	gr1.appendChild(option5);

	const option6 = document.createElement('option');
	option6.text = '16.20';
	option6.value = 'сьогодні';
	gr1.appendChild(option);
																//Зміна під написом Завтра
	const option0 = document.createElement('option');
	option0.text = '10.20';
	option0.value = 'завтра';
	gr2.appendChild(option0);

	const option21 = document.createElement('option');
	option21.text = '11.20';
	option21.value = 'завтра';
	gr2.appendChild(option21);

	const option22 = document.createElement('option');
	option22.text = '12.20';
	option22.value = 'завтра';
	gr2.appendChild(option22);

	const option23 = document.createElement('option');
	option23.text = '13.20';
	option23.value = 'завтра';
	gr2.appendChild(option23);

	const option24 = document.createElement('option');
	option24.text = '14.20';
	option24.value = 'завтра';
	gr2.appendChild(option24);

	const option25 = document.createElement('option');
	option25.text = '15.20';
	option25.value = 'завтра';
	gr2.appendChild(option25);

	const option26 = document.createElement('option');
	option26.text = '16.20';
	option26.value = 'завтра';
	gr2.appendChild(option26);
  } else {
    // Установить значение по умолчанию или отключить select2
    // ...
  }
}

// Запустить updateSelect2 при загрузке страницы
updateSelect2();

// Обновить select2 при изменении значения в select1
select1.addEventListener('change', updateSelect2);

const mistse = select1.options[select1.selectedIndex].text;
const vremya = select2.options[select2.selectedIndex].text;
var sz = select2.options[select2.selectedIndex].value;

console.log(mistse)
console.log(vremya)

const dosp = document.querySelectorAll('.splata')[0]
dosp.textContent = 'До сплати: '+120*storage.length+'грн'
document.getElementById('rr').onclick = function(event) {
	item = 'Прийшло нове замовлення! Товар:'+localStorage.getItem('but')+'. Місце доставки: '+mistse+'. Час доставки: '+select2.options[select2.selectedIndex].value+' '+vremya;
	console.log(item)
	tg.sendData(item);
};
