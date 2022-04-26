const feedDisplay = document.querySelector('#feed');

fetch('http://localhost:3000/results')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((article) => {
            const articleItem = '<div class="news_container"><h3>' + article.title + '</h3><p><a href="' + article.url + '"> Read More' + '</a></p></d>'
            feedDisplay.insertAdjacentHTML("afterbegin", articleItem);
        })
    })