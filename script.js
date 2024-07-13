const buttons = document.querySelectorAll('.button')
let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

const storage = localStorage.getItem('but') || '[]'
buttons.forEach((el, idx) =>{

  const title = el.id
  const btn = el
  const price = 2
  
  btn.addEventListener('click', () =>{
    let o = JSON.parse(localStorage.getItem('but'));
    if (o.length < 6) {
        const storage = localStorage.getItem('but') || '[]'
        const cart = JSON.parse(storage)
        const card = {title}
        localStorage.setItem('but', JSON.stringify([...cart,card]))
//      item = title;
//      tg.sendData(item);
    } else {
      
    }
  })


})



