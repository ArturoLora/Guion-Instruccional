class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
          <div class="container container-header">
              <img src="assets/banner.png" alt="Imagen de banner" class="banner-img img-fluid">
          </div>
          <div class="container container-header">       
              <nav class="navbar navbar-expand-lg navbar-light">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link unidad" href="index.html">Inicio</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link unidad" href="unidad1.html">Unidad 1</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link unidad" href="#">Unidad 2</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link unidad" href="#">Unidad 3</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link unidad" href="#">Unidad 4</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link unidad" href="#">Unidad 5</a>
                      </li>
                    </ul>
                  </div>
              </nav>
          </div>
      </header>`;
    }
  }
  
  customElements.define('header-component', HeaderComponent);

  class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="container text-center  footer-background">
          <div class="d-flex justify-content-between">
            <p class="font-small">Desarrollado por Arturo Lora</p>
            <p class="font-small">21 de Marzo 2024</p>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);

  document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    navLinks.forEach(function(navLink) {
      const linkHref = navLink.getAttribute("href").split("/").pop(); 
  
      if (linkHref === currentPage) {
        navLink.classList.remove("unidad"); 
        navLink.classList.add("active"); 
      }
    });
  });
  