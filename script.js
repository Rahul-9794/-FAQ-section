
document.querySelectorAll('.accordion-header').forEach(header=> {
    header.addEventListener('click',() => {
        const activeItem = document.querySelector('.accordion-item.active');
        
       
        
        if (activeItem  && activeItem !== header.parentElement) {
            activeItem.classList.remove('active');
        }

       
        
        header.parentElement.classList.toggle('active');
    });
});





