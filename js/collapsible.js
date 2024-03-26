(function ($) {
  Backdrop.behaviors.collapsible_section = {
    attach: function() {
      var coll = document.getElementsByClassName("collapsible_button");
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var section = this.nextElementSibling;
          if (section.style.maxHeight){
            section.style.maxHeight = null;
          } else {
            section.style.maxHeight = section.scrollHeight + "px";
          }
        });
      }

    }
  }
})(jQuery);
