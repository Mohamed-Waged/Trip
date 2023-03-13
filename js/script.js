////// Show Menu
let menu = document.querySelector('.icon');
let closeX = document.querySelector('.close');
let links = document.querySelector('#links');

menu.onclick = function () {
    links.classList.add('show')
    menu.style.opacity = '0'
    menu.style.visibility = 'hidden'
}
closeX.onclick = function () {
    links.classList.remove('show')
    menu.style.opacity = '1'
    menu.style.visibility = 'visible'
}

//////////////// Landing Section
var show = document.querySelectorAll(".display")
onload = function(){
    show.forEach(function(items){
        items.style.opacity = 1;
        items.style.visibility = "visible";
    });
}

////////////////////////////////////////////////////
var scrollToTop = document.querySelector('.up');
window.onscroll = function(){
    /////////////// About Section
    var slideRightElements = document.querySelector('.slide-right');
    var slideLeftElements = document.querySelector('.slide-left');
    var about = document.querySelector(".about")
    var aboutOffsetTop = about.offsetTop;
    var aboutOuterHeight = about.offsetHeight;
    var windowHeight = this.innerHeight;
    var windowScrollTop = this.pageYOffset;
        if(windowScrollTop > (aboutOffsetTop + aboutOuterHeight - windowHeight)){
            slideRightElements.classList.add('fade-in');
            slideLeftElements.classList.add('fade-in');
        }

    /////////////// Services Section
    var servicesFade = document.querySelector('.services-fade');
    var services = document.querySelector(".services")
    var servicesOffsetTop = services.offsetTop;
    var servicesOuterHeight = services.offsetHeight;
        if(windowScrollTop > (servicesOffsetTop + servicesOuterHeight - windowHeight)){
            servicesFade.classList.add('fade-in');
        }

    /////////////// Gallery Section
    var galleryFade = document.querySelector('.gallery-fade');
    var gallery = document.querySelector(".gallery")
    var galleryOffsetTop = gallery.offsetTop;   
    var galleryOuterHeight = gallery.offsetHeight;  
        if(windowScrollTop > (galleryOffsetTop + galleryOuterHeight - windowHeight -500)){
            galleryFade.classList.add('fade-in');
        }
        
    /////////////// packages Section
    var packagesFade = document.querySelector('.packages-fade');
    var packages = document.querySelector(".packages")
    var packagesOffsetTop = packages.offsetTop;   
    var packagesOuterHeight = packages.offsetHeight;  
        if(windowScrollTop > (packagesOffsetTop + packagesOuterHeight - windowHeight -600)){
            packagesFade.classList.add('fade-in');
        }

    /////////////// feedback Section
    var feedbackSlideRight = document.querySelector('.feed-slide-right');
    var feedbackSlideLeft = document.querySelector('.feed-slide-left');
    var feedbackFade = document.querySelector('.feedback-fade');
    var feedback = document.querySelector(".feedback")
    var feedbackOffsetTop = feedback.offsetTop;   
    var feedbackOuterHeight = feedback.offsetHeight;
    if(windowScrollTop > (feedbackOffsetTop + feedbackOuterHeight - windowHeight)){
        feedbackSlideRight.classList.add('fade-in');
        feedbackSlideLeft.classList.add('fade-in');
        feedbackFade.classList.add('fade-in');
    }

    ///////////////// Arrow To Top
        if (scrollY >= 600) {
            scrollToTop.classList.add('show');
            menu.style.color = "#163c87";
        }else {
            scrollToTop.classList.remove('show');
            menu.style.color = "#fff";
        }
}
scrollToTop.onclick = function () {
    scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
