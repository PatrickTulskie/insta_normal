function main () {
  $(function() {
    $("html").live("click", function() {
      $.each($("#profile-media-modal .imgImg.image"), function(index, item) {
        image = $(item).css("background-image").match(/url\((.*)\)/)[1];
        $(item).parent().html("<img src='" + image + "' style='visibility:visible' />");
      });
    });
  
    $.each($('.media-photo span.img'), function(index, item) {
      image = $(item).css("background-image").match(/url\((.*)\)/)[1];
      $(item).parent().html("<img src='" + image + "' style='visibility:visible' />");
    });
  });
}

function addJS_Node (text, s_URL, funcToRun) {
  var D                                   = document;
  var scriptNode                          = D.createElement ('script');
  scriptNode.type                         = "text/javascript";
  if (text)       scriptNode.textContent  = text;
  if (s_URL)      scriptNode.src          = s_URL;
  if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

  var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
  targ.appendChild (scriptNode);
}

addJS_Node (null, null, main);