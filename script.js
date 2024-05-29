function submit() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let age = document.getElementById("age").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    let user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        number: number,
        email: email
    };

    document.getElementById("output").innerHTML = `
        First Name: ${user.firstName || "Empty"}<br>
        Last Name: ${user.lastName || "Empty"}<br>
        Age: ${user.age || "Empty"}<br>
        Number: ${user.number || "Empty"}<br>
        Email: ${user.email || "Empty"}
    `;



    // if (firstName === "") {
    //     document.getElementById("output1").innerHTML = "Please Enter Your Name!";
    // } else {
    //     document.getElementById("output1").innerHTML =
    //         `First Name: ${user.firstName}`;
    // }

    // if (lastName === "") {
    //     document.getElementById("output2").innerHTML = "Please Enter Your Last Name!";
    // } else {
    //     document.getElementById("output2").innerHTML =
    //         `Last Name: ${user.lastName}`;
    // }

    // if (age === "") {
    //     document.getElementById("output3").innerHTML = "Please Enter Your Age!";
    // } else {
    //     document.getElementById("output3").innerHTML =
    //         `Age: ${user.age}`;
    // }

    // if (number === "") {
    //     document.getElementById("output4").innerHTML = "Please Enter Your Number!";
    // } else {
    //     document.getElementById("output4").innerHTML =
    //         `Number: ${user.number}`;
    // }

    // if (email === "") {
    //     document.getElementById("output5").innerHTML = "Please Enter Your Last Email!";
    // } else {
    //     document.getElementById("output5").innerHTML =`Email: ${user.email}`;
    // }


}

