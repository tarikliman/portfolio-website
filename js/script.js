let navs = document.querySelectorAll(".nav-item");


function activeLink() {
    navs.forEach((item) => item.classList.remove('active'));
    
    this.classList.add('active');
    }

navs.forEach((item) => item.addEventListener("click", activeLink));




