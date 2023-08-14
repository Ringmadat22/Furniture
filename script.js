const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('hidden');
        }
    });
});





const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)) => observer.observe((el));