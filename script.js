const buttons = document.querySelectorAll('.button')
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";


buttons.forEach((el, idx) =>{

  const title = el.childNodes[0].innerText
  const btn = el
  const price = 2
  
  btn.addEventListener('click', () =>{
    const storage = localStorage.getItem('but') || '[]'
    const cart = JSON.parse(storage)
    const card = {title}
    localStorage.setItem('but', JSON.stringify([...cart,card]))
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }
    else {
      tg.MainButton.setText("${card} додано в корзину!");
      item = "${card}";
      tg.MainButton.show();
    }
  })


})



