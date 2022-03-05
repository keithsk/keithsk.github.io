/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Fetch quotes API
/* fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    // console.log(data);

    let max = 1600;
    randomNo = Math.floor(Math.random() * max);

    document.getElementById("positive-quote1").innerHTML = data[randomNo].text +" - "+ data[randomNo].author;
}); */



fetch("https://testing641.p.rapidapi.com/positive-quotes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "testing641.p.rapidapi.com",
		"x-rapidapi-key": "5f791bd1d8msh004a9e30923f67bp1994f2jsn1f6f6ab27455"
	}
})
.then(response => {
	console.log(response);
    document.getElementById("positive-quote").innerHTML = data[randomNo].text +" - "+ data[randomNo].author;
})
.catch(err => {
	console.error(err);
});
