
let counting_elements = document.querySelectorAll("#services > .container > h1 + h1 + p + .box .right .boxes .numbers .data h1");

let speed = 200;

function animate(element) {
    // selecting the attribute 
    let target = +element.getAttribute('data-target');
    // selecting the innertxt of element 
    let data = +element.innerHTML;
    // creating time-equation to make it smooth 
    let time = target / speed;
    // creating the period in which it will count 
    let interval = setInterval(() => {
        // Creating condition to begin animation 
        if (data < target) { 
            element.innerHTML = Math.floor(data += time);
        } else {
            element.innerHTML = target;
            clearInterval(interval);
        }
    }, 1);
}
// creating function to check if the element is in viewable-contnet or not 
function isElementInViewport(el) {
    // getting the dimension of scrolled Viewport
    const rect = el.getBoundingClientRect(); 
    return (
        // check if the viewport of the section is not above or below  from the top of the screen
        rect.top >= 0 && 
        // check if the viewport of section is at left edge or not
        rect.left >= 0 && 
        // check if it's below the fold
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&  
        // check if the viewport of section is at left edge or not
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        // check if the viewport of section is at right edge or not
    );
}

window.onscroll = function () {
    let section_offset = 105; // Example value for section_offset
    counting_elements.forEach(element => {
        if (isElementInViewport(element) && this.scrollY >= section_offset) {
            animate(element);
        } else {
            element.innerHTML = '0'; // Reset the value if not in view
        }
    });
};
