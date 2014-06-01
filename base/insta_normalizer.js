function loadInstaNormalizer() {
  // Call this to inject the functions and loader into the page.
  // Nested the other functions in here so that they all get injected properly.
  
  var imagePath = "div.Image.iLoaded.Frame:visible";
  var rtime     = new Date(1, 1, 2000, 12,00,00);
  var timeout   = false;
  var delta     = 200;
  
  function domModifiedEnd() {
    if (new Date() - rtime < delta) {
      setTimeout(domModifiedEnd, delta);
    } else {
      timeout = false;
      normalizeImages();
    }
  }
  
  function normalizeImages() {
    if (document.URL === "http://instagram.com/") {
      normalizeTimelineImages();
    } else {
      setTimeout(normalizeGalleryModals, 200);
    }
  }
  
  // function normalizeGalleryModals() {
  //   $(imagePath).live({
  //     mousemove: function() {
  //       image = $(this).css("background-image").match(/url\((.*)\)/)[1];
  //     
  //       $('.normalizer_injected_image').remove();
  //       $(this).parent().prepend("<img src='" + image + "' style='visibility:visible; display:block; width: 100%;' class='normalizer_injected_image' />");
  //       $(this).css('display', 'none');
  //     }
  //   })
  // }
  
  function normalizeTimelineImages() {
    $.each($(imagePath), function(index, e) {
      image = $(e).css("background-image").match(/url\((.*)\)/)[1];
    
      // $('.normalizer_injected_image').remove();
      $(e).parent().parent().prepend("<img src='" + image + "' style='visibility:visible; display:block; width: 100%;' class='normalizer_injected_image' />");
      $(e).parent().css('display', 'none');
    });
  }
  
  function normalizeGalleryModals() {
    $.each($(imagePath), function(index, e) {
      image = $(e).css("background-image").match(/url\((.*)\)/)[1];
      $('.normalizer_injected_image').remove();
      $(e).parent().prepend("<img src='" + image + "' style='visibility:visible; display:block; width: 100%;' class='normalizer_injected_image' />");
      $(e).css('display', 'none');
    });
  }

  $(function() {
    $(document).bind('DOMSubtreeModified', function () {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(domModifiedEnd, delta);
      }
    });
  });
}