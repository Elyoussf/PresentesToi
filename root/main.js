document.addEventListener('DOMContentLoaded', function() {
    var contents = document.querySelectorAll('.content');
    var nameElement = document.getElementById('name');
    var roleElement = document.getElementById('role');
    var nameText = "HAMZA EL-YOUSSFI";
    var roleText = "Software Engineer Student";

    function checkVisibility() {
        contents.forEach(function(content) {
            if (isElementInViewport(content)) {
                content.classList.add('active');
            }
        });
    }

    function typeText(element, text, callback) {
        var i = 0;
        var intervalId = setInterval(function() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
                if (callback) callback();
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

    // Type out name and role sequentially
    typeText(nameElement, nameText, function() {
        typeText(roleElement, roleText, function() {
            // Start checking visibility after typing is finished
            window.addEventListener('scroll', checkVisibility);
            window.addEventListener('resize', checkVisibility);
            checkVisibility();
        });
    });
});
