const buttons = document.querySelectorAll('.button')



buttons.forEach((el, idx) =>{

  const title = el.childNodes[0].innerText
  const btn = el
  const price = 2
  
  btn.addEventListener('click', () =>{
    const storage = localStorage.getItem('but') || '[]'
    const cart = JSON.parse(storage)
    const card = {title}
    localStorage.setItem('but', JSON.stringify([...cart,card]))
  })

})

