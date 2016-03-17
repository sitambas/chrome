chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      	
		jQuery('body').append('<div class="overlay"><div class="content">hello india</div></div>');
    }
  }
);

