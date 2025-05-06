document.addEventListener('DOMContentLoaded', function() {
    // Efeito de loading
    setTimeout(function() {
      document.querySelector('.loading').style.display = 'none';
    }, 1000);
  
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Botão de voltar ao topo
    const backToTopButton = document.createElement('a');
    backToTopButton.href = '#';
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });
  
    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Efeito de digitação no título (opcional)
    const heroTitle = document.querySelector('.parallax h2');
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.textContent = '';
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 100);
    }
  });
  
  // Adicione isso antes do fechamento do body no index.html
  <div class="loading">
    <div class="loading-spinner"></div>
  </div>