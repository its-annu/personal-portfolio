/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//smooth Scroll for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    });
});
//navbar active state on scroll
const sections = document.querySelectorAll("section, .hero");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 120;
        if(scrollY >= sectionTop) current = section.getAttribute("id");
    });

navLinks.forEach(links =>{
   link.classList.remove("active");
   if(link.getAttribute("href")=== `#${current}`){
       link.classList.add("active");
   }
});
});
//skill Icons Animation(Stagger)
const skillImages = document.querySelectorAll(".skills-list img");
const skillObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            skillImages.forEach((img, index)=>{
                setTimeout(()=> img.classList.add("show"),index * 120);
            });
        }
    });
},{threshold: 0.3});
skillImages.forEach(img => skillObserver.observe(img));

//scroll Reveal animation for all sections
const revealElements = document.querySelectorAll("section, .content, .pic");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
      const children = entry.target.querySelectorAll(".reveal-child");
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.15}s`;
        child.classList.add("reveal-visible");
           });
       }
    });
},{threshold: 0.2});
revealElements.forEach(el => revealObserver.observe(el));

//hero section stagger animation on load
window.addEventListener("load", () => {
  const heroItems = document.querySelectorAll(".content .title, .content h1, .content p, .content .btn");
  heroItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("reveal-visible");
    }, i * 200);
  });
});

//form validation for "get in touch"
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click",()=>{
    const name = document.querySelector(".name").value.trim();
    const email = document.querySelector(".email").value.trim();
    const msg = document.querySelector(".msg").value.trim();
    
    if(!name || !email || !msg){
        alert("⚠️ please fill in all fields before submitting!");
        return;
    }
    
    const emailpattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (!email.match(emailpattern)){
        alert("❌ please enter a valid email address!")
        return;
    }
    
    alert(`✅ Thank You ${name}! Your message has been sent successfully.`);
    document.querySelector(".name").value="";
    document.querySelector(".email").value="";
    document.querySelector(".msg").value="";
});
//scroll progress bar at top of page

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.background = "#00bcd4";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
progressBar.style.transition = "width 0.2s ease-out";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
});
/*MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});*/

