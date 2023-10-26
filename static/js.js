document.addEventListener('DOMContentLoaded', function() {
    const fixedDiv1 = document.querySelector('.navbar');
    const fixedDiv2 = document.querySelector('.sidepanel');
    console.log(fixedDiv2);
    // const container = document.querySelector("body");

    
    // Calculate the position where the div should become fixed
    const scrollThreshold = 101;
    
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      
      if (scrollTop >= scrollThreshold) {
        
        fixedDiv1.style.position = 'fixed';
        fixedDiv1.style.top = '0';
        fixedDiv1.style.width = "100%";
        fixedDiv1.style.zIndex = "100";

        fixedDiv2.style.top = '80px';
        fixedDiv2.style.zIndex = "2";
        fixedDiv2.style.visibility = "visible"

      }
      if (scrollTop < scrollThreshold) {
        // Make the div fixed
        fixedDiv1.style.position = 'static';
        // fixedDiv2.style.position = 'static';

        fixedDiv2.style.top = '180px';
        fixedDiv2.style.visibility = "visible"


        // fixedDiv.style.width = "100%"
      }
      if (scrollTop > 4100) {
        fixedDiv2.style.visibility = "hidden"
      }
    //  else {
    //     // Reset the position
    //     fixedDiv.style.position = 'absolute';
    //     fixedDiv.style.top = '0';
    //   }
    });
  });
document.addEventListener('DOMContentLoaded', function() {
window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        console.log("The value is " + scrollTop)
})
})