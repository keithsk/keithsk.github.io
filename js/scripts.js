/**
 * Scripts
 */


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


// Display Quote
function displayQuoteText(objQuotes) {
    let elmQuote = document.getElementById("positive-quote");

    if(objQuotes && Object.keys(objQuotes).length > 0) {
        let max = 1600;
        let randomNo = Math.floor(Math.random() * max);
        elmQuote.innerHTML = objQuotes[randomNo].text +' - '+ objQuotes[randomNo].author;
    } else {
        elmQuote.innerHTML = '';
    }
}

let quotes = sessionStorage.getItem('quotes');

if(quotes) {
    objQuotes = JSON.parse(quotes);
    displayQuoteText(objQuotes);
} 
else {
    // Fetch quotes API
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(data);
        sessionStorage.setItem('quotes', JSON.stringify(data));
        
        displayQuoteText(data);
    })
    .catch((error) => {
        console.log(error);
        sessionStorage.removeItem('quotes');
    });
}

