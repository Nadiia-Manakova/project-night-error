const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-services-card');
        } else {
            entry.target.classList.remove('show-services-card');
        }
    });
}); 


const hiddenElements = document.querySelectorAll('.hidden-services-card');
hiddenElements.forEach((el) => observer.observe(el));