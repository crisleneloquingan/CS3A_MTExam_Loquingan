

// Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    let phoneNumber = document.getElementById("cellphoneNumber").value;
    let email = document.getElementById("email").value;
    let facebook = document.getElementById("facebook").value;

    if (!phoneNumber || !email || !facebook) {
        alert("Please fill in all contact details.");
        event.preventDefault(); // Prevent form submission if fields are empty
    } else {
        alert("Form submitted successfully!");
    }
});

// Change header color on mouse hover
document.querySelector("header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#005bb5";
});

document.querySelector("header").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#0073e6";
});
