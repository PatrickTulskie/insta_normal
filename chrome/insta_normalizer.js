function loadInstaNormalizer() {
  // Call this to inject the functions and loader into the page.
  // Nested the other functions in here so that they all get injected properly.
  
  function normalizeGalleryModals() {
    $("html").live("click", function() {
      $.each($("#profile-media-modal .imgImg.image"), function(index, item) {
        image = $(item).css("background-image").match(/url\((.*)\)/)[1];
        $(item).parent().html("<img src='" + image + "' style='visibility:visible' />");
      });
    });
  }

  function normalizeStandaloneImagePages() {
    $.each($('.media-photo span.img'), function(index, item) {
      image = $(item).css("background-image").match(/url\((.*)\)/)[1];
      $(item).parent().html("<img src='" + image + "' style='visibility:visible' />");
    });
  }
  
  $(function() {
    normalizeGalleryModals();
    normalizeStandaloneImagePages();
  });
}