document.addEventListener('DOMContentLoaded', function() {
  
    const btn = document.getElementById("formButton");
    btn.addEventListener("click", () => {
      const formName = document.getElementById("formName").value; 
      const formEmail = document.getElementById("formEmail").value; 
      const formNumber= document.getElementById("formNumber").value ;
      const formTitle = document.getElementById("formTitle").value ;
      const formMessage = document.getElementById("formMessage").value;
      const formCheckbox = document.getElementById("formCheckbox").value;
      
      console.log(formCheckbox);


      alert("Thankyou! Your Query has been submitted successfully. We will respond to you as soon as possible.")
      console.log("Done")
     location.reload()
    
    
    
    })
    
    })