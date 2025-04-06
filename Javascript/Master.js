// Mobile Menu Toggle
document.getElementById("icon").onclick = function () {
    const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
    mobileMenu.style.display = mobileMenu.style.display === "none" ? "flex" : "none";
};

// Typing Animation
const paragraph = document.querySelector(`#home .container > h1 + h1 + p`);
const txt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga expedita ea obcaecati quidem quis sint sapiente delectus deleniti distinctio earum, excepturi, tenetur, similique nisi dicta consequuntur laudantium. Dicta, vero!`;

let i = 0; // Counter for typing animation
function writer() {
    if (i < txt.length) {
        paragraph.innerHTML += txt.charAt(i);
        i++;
        setTimeout(writer, 10);
    }
}
writer(); // Start typing animation

// Scroll Progress Indicator
this.addEventListener('scroll', function () {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const winScroll = document.documentElement.scrollTop;
    document.getElementById("scollor-indicator").style.width = `${(winScroll / height) * 100}%`;
});

// Animate Bars on Scroll
const bars = document.querySelectorAll(`#services > .container > h1 + h1 + p + .box .left .bars .bar .data + .progress`);
const sectionOffset = document.getElementById(`services`).offsetTop;

this.addEventListener('scroll', function () {
    bars.forEach(element => {
        element.style.width = this.scrollY >= sectionOffset ? element.dataset.width : '0%';
    });
});

// Count Animation
const countingElements = document.querySelectorAll("#services > .container > h1 + h1 + p + .box .right .boxes .numbers .data h1");
const speed = 200;

function animate(element) {
    const target = +element.getAttribute('data-target');
    let data = +element.innerHTML;
    const time = target / speed;

    const interval = setInterval(() => {
        if (data < target) {
            element.innerHTML = Math.floor(data += time);
        } else {
            element.innerHTML = target;
            clearInterval(interval);
        }
    }, 1);
}

// Check if Element is in Viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onscroll = function () {
    countingElements.forEach(element => {
        if (isElementInViewport(element) && this.scrollY >= 105) {
            animate(element);
        } else {
            element.innerHTML = '0'; // Reset the value if not in view
        }
    });
};

// Count Animation in Brand Trust Section
const BT_sec = document.getElementById("Brands-trust");
const BT_span = document.querySelector("#Brands-trust .container .base-image+.info-txt>h1>span");
const BT_span_target = parseInt(BT_span.getAttribute("Target"));
const BT_Entry = BT_sec.offsetTop;
let BT_counter = 0;
let started = false; // Is function started?

window.addEventListener('scroll', function () {
    if (!started && window.scrollY >= BT_Entry) {
        const Bt_interval = setInterval(function () {
            BT_counter++;
            BT_span.innerHTML = BT_counter;
            if (BT_counter >= BT_span_target) clearInterval(Bt_interval);
        }, 10);
        started = true; // Start counting
    }
});

// Scroll to Top Button
const Scroll_button = document.getElementById("top");
Scroll_button.onclick = function () {
    window.scrollTo({ top: 0 });
};

// Show/Hide Scroll Button
window.addEventListener('scroll', function () {
    Scroll_button.style.opacity = window.scrollY >= 700 ? 1 : 0;
});

// Margin Animation
window.addEventListener('scroll', function () {
    const h1Elements = document.querySelectorAll("#register .container .box h1");
    const marginValue = window.scrollY >= 4514 ? "0" : "-150em";
    h1Elements.forEach(element => element.style.marginLeft = marginValue);
});

// Character Count
const tele_input = document.getElementById("tele_input");
const tele_input_Attr = tele_input.getAttribute("maxlength");
const tele_span = document.getElementById("tele_span");

tele_input.oninput = function () {
    tele_span.style.width = `${(this.value.length * 100) / tele_input_Attr}%`;
};

// Paragraph Animation
// this.addEventListener('scroll', function () {
//     const opinionOffset = document.getElementById("opinion").offsetTop - 100;
//     document.querySelector("#opinion .container .txt p").style.marginLeft = window.scrollY >= opinionOffset ? `0` : `-375em`;
// });

// Opacity Animation at Plan Section
this.addEventListener('scroll', function () {
    const planOffset = document.getElementById("plan").offsetTop - 100;
    const opacityValue = window.scrollY >= planOffset ? 1 : 0;
    document.querySelector("#plan h6").style.opacity = opacityValue;
    document.querySelector("#plan h6+h1").style.opacity = opacityValue;
});
