const buttons = document.querySelectorAll('.button')

const storage = localStorage.getItem('but') || '[]'
buttons.forEach((el, idx) =>{

  const title = el.id
  const btn = el.childNodes[0]
  const price = 2
  
  btn.addEventListener('click', () =>{
    let o = JSON.parse(localStorage.getItem('but'));
    if (o.length < 6) {
        const storage = localStorage.getItem('but') || '[]'
        const cart = JSON.parse(storage)
        const card = {title}
        localStorage.setItem('but', JSON.stringify([...cart,card]))
    } else {
      
    }
  })

  btn.addEventListener("touchstart", () =>{
    let o = JSON.parse(localStorage.getItem('but'));
    if (o.length < 6) {
        const storage = localStorage.getItem('but') || '[]'
        const cart = JSON.parse(storage)
        const card = {title}
        localStorage.setItem('but', JSON.stringify([...cart,card]))
    }
  })

  btn.addEventListener("touchend", () =>{
    let o = JSON.parse(localStorage.getItem('but'));
    if (o.length < 6) {
        const storage = localStorage.getItem('but') || '[]'
        const cart = JSON.parse(storage)
        const card = {title}
        localStorage.setItem('but', JSON.stringify([...cart,card]))
    }
  })
})



