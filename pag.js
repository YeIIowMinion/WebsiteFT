let prevBtn = document.querySelector(".prevBtn")
let currentPage = document.querySelector(".currentPage")
let nextBtn = document.querySelector(".nextBtn")
let ul = document.querySelector(".ul")

let page = 1

function fetchWebtoons() {
    fetch("JSON.json")
    .then(response => response.json())
    .then(json => {
        ul.innerHTML = ''
        let start = (page - 1) * 1;
        let end = start + 1;
        let paginatedMangas = json.mangas.slice(start, end)
        paginatedMangas.forEach((manga) => {
            let li = document.createElement('li')
                li.innerHTML = `
                    <img width="300px" height="200px" src="${manga.photo || 'https://via.placeholder.com/480'}" alt="${manga.title}">
                    <div>
                    <h2>${manga.title}</h2>
                    <p>${manga.description}</p></div>`
            ul.append(li)
        });

        if (paginatedMangas.length === 0) {
                ul.innerHTML = `<li>No news</li>`
            }

        pagination(json.mangas.length)
    })
}

fetchWebtoons()

nextBtn.addEventListener('click', function () {
    page++
    fetchWebtoons()
})

prevBtn.addEventListener('click', function () {
    if (page > 1) {
        page--
        fetchWebtoons()
    }
})

function pagination(totalResults) {
    let totalPages = Math.ceil(totalResults / 1)
    currentPage.textContent = `Page ${page} of ${totalPages}`

    nextBtn.disabled = page >= totalPages;
    prevBtn.disabled = page <= 1;
}