document.addEventListener('DOMContentLoaded', function() {
  console.log("in js");
    const btn = document.getElementById("formButton");
    btn.addEventListener("click", () => {
      const formName = document.getElementById("formName").value; 
      const formEmail = document.getElementById("formEmail").value; 
      const formNumber= document.getElementById("formNumber").value ;
      const formTitle = document.getElementById("formTitle").value ;
      const formMessage = document.getElementById("formMessage").value;
      // const formCheckbox = document.getElementById("formCheckbox").value;
      console.log(formName);

      let url = 'https://api.sheety.co/220cf21062657e0ece899d8c5505f080/nursery/emails';
      let body = {
        "email": {
          "name":formName,
          "email":formEmail,
          "number": formNumber,
          "title": formTitle,
          "message": formMessage
          
        }
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        // console.log(json.sheet1);
        console.log("POSTING DONE")
      });
      
    alert("Thankyou! Your Query has been submitted successfully. We will respond to you as soon as possible.");
    
    setTimeout(()=> {
    location.reload()
    },2000);
    console.log("Done")
    
    
    
    })  //button
    
    })   //DOMContent