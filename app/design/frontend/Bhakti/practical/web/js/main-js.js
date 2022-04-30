define([
    "jquery",
  ], 
  function($) {
    "use strict";
  
      $(document).ready(function($){
            $(".sections.nav-sections .nav-sections-item-content .navigation").after($('.header-topbar-container').html());
      });
      return;
  });