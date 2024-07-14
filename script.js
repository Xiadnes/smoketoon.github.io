const buttons = document.querySelectorAll('.button')
let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

mobile = navigator.maxTouchPoints > 0 && 'orientation' in window
console.log(mobile)


const storage = localStorage.getItem('but') || '[]'
buttons.forEach((el, idx) =>{

  const title = el.id
  const btn = el
  const price = 2
  if (mobile === 'true') {
    btn.addEventListener('touchstart', () => {
    let o = JSON.parse(localStorage.getItem('but'));
    if (storage.length < 6) {
    if (o.length < 6) {
        const storage = localStorage.getItem('but') || '[]'
        const cart = JSON.parse(storage)
        const card = {title}
        localStorage.setItem('but', JSON.stringify([...cart,card]))
    }}});
  } else{
    btn.addEventListener('click', () => {
    let o = JSON.parse(localStorage.getItem('but'));
    if (storage.length < 6) {
    if (o.length < 6) {
        const storage = localStorage.getItem('but') || '[]'
        const cart = JSON.parse(storage)
        const card = {title}
        localStorage.setItem('but', JSON.stringify([...cart,card]))
    }});
  };
  

  
})



