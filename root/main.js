document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');
    var nameElement = document.getElementById('name');
    var roleElement = document.getElementById('role');
    var nameText = "HAMZA EL-YOUSSFI";
    var roleText = "Software Engineer Student";

    function checkVisibility() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    function typeText(element, text) {
        var i = 0;
        var intervalId = setInterval(function() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 100); // Adjust typing speed as needed
    }

    // Function to check if an element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Type out name and role
    typeText(nameElement, nameText);
    setTimeout(function() {
        typeText(roleElement, roleText);
    }, nameText.length * 100); // Start typing role after name is finished

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Check visibility on page load
    checkVisibility();
});

// Function to handle scroll event
function handleScroll() {
    var content = document.querySelector('.content');
    if (isElementInViewport(content)) {
        content.classList.add('active');
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
