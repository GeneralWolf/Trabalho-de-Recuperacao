
      // Menu responsivo
      function myMenuFunction() {
         var x = document.getElementById("myNavMenu");
         if (x.className === "nav-menu") {
            x.className += " responsive";
         } else {
            x.className = "nav-menu";
         }
      }
      
      // Animação de sombra no cabeçalho
      function headerShadow() {
         var header = document.getElementById("header");
         if (window.pageYOffset > 0) {
            header.classList.add("shadow");
         } else {
            header.classList.remove("shadow");
         }
      }
      
      // Adicionando animação de digitação
      var typed = new Typed('.typedText', {
         strings: ['Desenvolvedor Web', 'Estudante', 'Entusiasta de Tecnologia'],
         typeSpeed: 80,
         backSpeed: 50,
         loop: true
      });
      
      // Iniciando Scroll Reveal
      ScrollReveal().reveal('.section', {
         delay: 200,
         distance: '50px',
         easing: 'ease-in-out',
         origin: 'bottom',
         reset: true
      });
      
      // Selecionando item ativo no menu de navegação
      function scrollActive() {
         var sections = document.querySelectorAll('section');
         var navLinks = document.querySelectorAll('.nav-link');
         window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
               const sectionTop = section.offsetTop;
               const sectionHeight = section.clientHeight;
               if (pageYOffset >= sectionTop - sectionHeight / 3) {
                  current = section.getAttribute('id');
               }
            });
            navLinks.forEach(link => {
               link.classList.remove('active-link');
               if (link.classList.contains(current)) {
                  link.classList.add('active-link');
               }
            });
         });
      }
      // Chamar funções ao carregar a página
      window.onload = function() {
         scrollActive();
         headerShadow();
      };
      
      // Chamar funções ao rolar a página
      window.onscroll = function() {
         headerShadow();
      };