document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".flavor_trigger");
    const pageWrapper = document.getElementById("page-wrapper");
    const openingSliderComponent = document.querySelector('.opening_slider_component');

    function applySavedTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        pageWrapper.setAttribute("data-theme", savedTheme);
        if (openingSliderComponent) {
          openingSliderComponent.style.display = 'none';
        }
      } else {
        if (openingSliderComponent) {
          openingSliderComponent.style.display = 'block';
        }
      }
    }

    applySavedTheme();

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const theme = this.getAttribute("data-theme");

        localStorage.setItem('theme', theme);

        pageWrapper.setAttribute("data-theme", theme);
        
        if (openingSliderComponent) {
          openingSliderComponent.style.display = 'none';
        }
      });
    });
});