function initContentCards(){
    if(document.documentElement.classList.contains('js')){
        const btnFavorite = document.querySelectorAll('.button-favorite img')
        btnFavorite.forEach((imagem) => {
            imagem.addEventListener('click', () => {
                imagem.classList.toggle('active')
                if(imagem.classList.contains('active')){
                    imagem.setAttribute('src', 'assets/img/heart-background.svg')
                } else{
                    imagem.classList.remove('active')
                    imagem.setAttribute('src', 'assets/img/icon-heart-vazio.svg')
                }
            })
        })
    
        const titleDOM = document.querySelectorAll('.title-news')
        const descriptionP = document.querySelectorAll('.descrip-paragraph')
        const BASE_URL =  'https://newsapi.org/v2/top-headlines?country=br&apiKey=1c3bc6a544834622b4bcabe5149a37ee'
    
        fetch(BASE_URL).then(data => data.json()).then(body => {
            for(let i = 0; i < body.articles.length; i++){
                titleDOM[i].textContent = body.articles[i].title
                descriptionP[i].innerText = body.articles[i].description
            }
        })
    
    } else {
        alert("Por favor, habilite o Javascript para ter acesso a página")
    }
}
initContentCards()

const cards = document.querySelectorAll('.new-item')
if(window.screen.width <= 1366){
    cards[0].classList.add('behavior-active')
    cards[1].classList.add('behavior-active')
} else {
    cards[0].classList.add('behavior-active')
    cards[1].classList.add('behavior-active')
    cards[2].classList.add('behavior-active')
}

function initCardAnimation(event){
    const width = window.innerWidth * 0.4
    cards.forEach(card => {
        const contentTop = card.getBoundingClientRect().top - (width)
        if(contentTop < 0){
            card.classList.add('behavior-active')
        }
    })
}

window.addEventListener('scroll', initCardAnimation)
