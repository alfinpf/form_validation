
function formSubmit(e){
    e.preventDefault();
    console.log("Form submitted successfully");
    let userFullName = document.getElementById("userFullName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let userAddress = document.getElementById("userAddress").value;

   /* Alternate for adding warnings
   
    if (userFullName == null || userFullName == ''){

        let userFullNameError = document.getElementById("userFullNameError");
        userFullNameError.innerHTML = "Enter Your Full Name";
        userFullNameError.style.display = 'block';
    }

    */  

    console.log("Full Name:",userFullName);
    console.log("Email ID:",userEmail);
    console.log("Password:",userPassword);
    console.log("Address:",userAddress);
    alert("Details submitted successfully !")
}

