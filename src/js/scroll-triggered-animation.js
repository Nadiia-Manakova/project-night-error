const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-title');
        } else {
            entry.target.classList.remove('show-title');
        }
    });
}); 

const hiddenElements = document.querySelectorAll('.hidden-title');
hiddenElements.forEach((el) => observer.observe(el));
