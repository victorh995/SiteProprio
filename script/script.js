const imgsPasseio = document.querySelectorAll('.js-passeiotab li')
const contentPasseio = document.querySelectorAll('.js-passeioconteudo section')
contentPasseio[0].classList.add('ativo')

function activeContent(index) {
  contentPasseio.forEach((content) => {
    content.classList.remove('ativo')
  })
  contentPasseio[index].classList.add('ativo')
}

imgsPasseio.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    activeContent(index)
  })
})
