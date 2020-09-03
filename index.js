window.addEventListener('load', function () {
    var projects = document.querySelector('.project').querySelectorAll('li');
    projects[0].addEventListener('click', function () {
        location.assign('b站/index.html');
    })
    projects[1].addEventListener('click', function () {
        location.assign('js案例/register/register.html');
    })
    projects[2].addEventListener('click', function () {
        location.assign('movie/movie.html');
    })
    /* projects.forEach(function (one) {
        one.addEventListener('click', function () {
            location.assign('b站/index.html')
        })
    }) */
})