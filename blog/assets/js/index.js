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
    const BASE_URL =  'https://newsapi.org/v2/everything?q=keyword&apiKey=1c3bc6a544834622b4bcabe5149a37ee'

    fetch(BASE_URL).then(data => data.json()).then(body => {
        for(let i = 0; i < body.articles.length; i++){
            titleDOM[i].textContent = body.articles[i].title
            descriptionP[i].innerText = body.articles[i].description
        }
    })

} else {
    console.log(false)
}