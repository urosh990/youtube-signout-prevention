// Wait for the page to fully load
window.onload = function() {
    // Use MutationObserver to track changes in the DOM if YouTube dynamically loads content
    let observer = new MutationObserver(function(mutations) {
      mutations.forEach(function() {
        bindSignOutListener();
      });
    });
  
    // Start observing the document for any changes (dynamic content loading)
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  
    // Function to bind the click event to the sign-out button
    function bindSignOutListener() {
      let signOutButton = document.querySelector('a[href*="logout"]');
      
      if (signOutButton) {
        // Remove any existing event listener to avoid duplication
        signOutButton.removeEventListener('click', handleSignOutClick);
        // Add the new event listener
        signOutButton.addEventListener('click', handleSignOutClick);
      }
    }
  
    // Function to handle the confirmation and sign-out logic
    function handleSignOutClick(event) {
      // Prevent the default sign-out action
      event.stopImmediatePropagation();
      event.preventDefault();
  
      // Display a confirmation popup
      let confirmation = alert("To sign out, please click sign out from the switch account option");
  
      if (confirmation) {
        // Simulate a click on the sign-out button to trigger the native YouTube behavior
        signOutButton.click();
      } else {
        // If canceled, do nothing and keep the user on the page
        console.log("Sign out cancelled");
      }
    }
  
    // Call the bind function once initially to catch the button
    bindSignOutListener();
  };
  
