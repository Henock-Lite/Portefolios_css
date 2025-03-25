document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
  
      let targetId = this.getAttribute("href").substring(1); 
      let targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        let navbarHeight = document.querySelector("nav").offsetHeight; 
        let targetPosition = targetSection.offsetTop - navbarHeight; 
  
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
  