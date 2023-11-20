
function formSubmit(e){
    e.preventDefault();
    console.log("Form submitted successfully");
    let userFullName = document.getElementById("userFullName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let userAddress = document.getElementById("userAddress").value;
 


    if (userFullName == null || userFullName == '' || userFullName.length < 3 || userFullName.length > 35){

        let userFullNameError = document.getElementById("userFullNameError");
        userFullNameError.innerHTML = "Enter Your Full Name to continue (3 to 35 characters are allowed)";
        userFullNameError.style.display = 'block';
        return false;

    }     
    if (userEmail == null || userEmail == ''){

        let userEmailError = document.getElementById("userEmailError");
        userEmailError.innerHTML = "Please enter your email-ID";
        userEmailError.style.display = 'block';
        return false;
    }
    if (userPassword == null || userPassword == '' || userPassword.length < 8 || userPassword.length > 16 ){

        let userPasswordError = document.getElementById("userPasswordError");
        userPasswordError.innerHTML = "Please enter your password in 8 to 16 characters";
        userPasswordError.style.display = 'block';
        return false;
    }
    if (userAddress == null || userAddress == '' || userAddress.length < 15 || userAddress.length > 50 ){

        let userAddressError = document.getElementById("userAddressError");
        userAddressError.innerHTML = "Please enter your full address";
        userAddressError.style.display = 'block';
        return false;
    }

   


    console.log("Full Name:",userFullName);
    console.log("Email ID:",userEmail);
    console.log("Password:",userPassword);
    console.log("Address:",userAddress);
    alert("Details submitted successfully !")
}

