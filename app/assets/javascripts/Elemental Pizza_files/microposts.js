(function() {
  jQuery(function() {
    return $('#microposts').imagesLoaded(function() {
      return $('#microposts').masonry({
        itemSelector: ".box"
      });
    });
  });

}).call(this);
