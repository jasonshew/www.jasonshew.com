// Check if the browser is Internet Explorer 6
var isIE6 = window.XMLHttpRequest ? false : true;

// Function to initialize the 'Go To Top' button behavior
function newTopOnLoad() {
    var c = document.getElementById("full"); // Select the 'Go To Top' button

    // Function to handle scroll events
    function b() {
        // Get the current scroll position
        var a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

        // Show or hide the 'Go To Top' button based on scroll position
        if (a > 0) {
            if (isIE6) { 
                // If IE6, delay the appearance of the button for smoother scrolling
                c.style.display = "none";
                clearTimeout(window.show);

                window.show = setTimeout(function () {
                    var d = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                    if (d > 0) {
                        c.style.display = "block";
                        // Position button relative to scroll amount
                        c.style.top = (400 + d) + "px";
                    }
                }, 300);
            } else {
                // For non-IE6 browsers, show button without delay
                c.style.display = "block";
            }
        } else {
            // Hide button if at the top of the page
            c.style.display = "none";
        }
    }

    // If using IE6, set the button position to 'absolute'
    if (isIE6) {
        c.style.position = "absolute";
    }

    // Attach the scroll event to the function
    window.onscroll = b;
    b(); // Initial call to set button state
}

// Add event listener for when the page loads
if (window.attachEvent) {
    // For older versions of IE
    window.attachEvent("onload", newTopOnLoad);
} else {
    // For modern browsers
    window.addEventListener("load", newTopOnLoad, false);
}

// Set 'Go To Top' button to scroll to the top when clicked
document.getElementById("full").onclick = function () {
    window.scrollTo(0, 0); // Scroll smoothly to the top of the page
};