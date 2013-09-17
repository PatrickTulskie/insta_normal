function loadInstaNormalizer() {
  // Call this to inject the functions and loader into the page.
  // Nested the other functions in here so that they all get injected properly.
  
  var imagePath = "div.Image.iLoaded.iWithTransition.Frame:visible";
  
  function normalizeGalleryModals() {
    $(imagePath).live({
      mousemove: function() {
        image = $(this).css("background-image").match(/url\((.*)\)/)[1];
      
        $('.normalizer_injected_image').remove();
        $(this).parent().prepend("<img src='" + image + "' style='visibility:visible; display:block; width: 100%;' class='normalizer_injected_image' />");
        $(this).css('display', 'none');
      }
    })
  }

  $(function() {
    normalizeGalleryModals();
  });
}