// ===============================
// HAB TRANSPORT COMPANY LTD
// script.js
// ===============================

// Mobile Navigation

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// Close menu when a link is clicked

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// ===============================
// EmailJS
// ===============================

// Replace these ONLY if you change your EmailJS account

emailjs.init("iCiu8NlilIQVvik35");

// ===============================
// Booking Form
// ===============================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const params = {

        name: document.getElementById("name").value,

        company: document.getElementById("company").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        pickup: document.getElementById("pickup").value,

        destination: document.getElementById("destination").value,

        goods: document.getElementById("goods").value,

        truck: document.getElementById("truck").value,

        weight: document.getElementById("weight").value,

        date: document.getElementById("date").value,

        time: document.getElementById("time").value,

        message: document.getElementById("message").value

    };

    emailjs.send(

        "service_d0qhr7e",

        "template_15qf2ok",

        params

    )

    .then(function(){

        alert("✅ Booking request sent successfully! HAB Transport will contact you shortly.");

        bookingForm.reset();

    })

    .catch(function(error){

        alert("❌ Booking failed. Please try again.");

        console.log(error);

    });

});

// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.20)";

    }

    else{

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

});

// ===============================
// Smooth Fade Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

document.querySelectorAll(

".service-card,.fleet-card,.leader-card,.partner-card,.contact-card,.stat-card"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-button";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};