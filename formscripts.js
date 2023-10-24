function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderMale = document.getElementById("male").checked;
        const genderFemale = document.getElementById("female").checked;
        const gender = genderMale ? "Male" : (genderFemale ? "Female" : "N/A");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const popup = document.getElementById("popup");
        const popupList = document.getElementById("popup-list");
        popupList.innerHTML = `
            <li>First Name: ${firstName}</li>
            <li>Last Name: ${lastName}</li>
            <li>Date of Birth: ${dob}</li>
            <li>Country: ${country}</li>
            <li>Gender: ${gender}</li>
            <li>Profession: ${profession}</li>
            <li>Email: ${email}</li>
            <li>Mobile Number: ${mobile}</li>
        `;
        popup.style.display = "block";
        form.reset();
    } else {
        alert("Please fill in all required fields.");
    }
}

function resetForm() {
    const form = document.getElementById("surveyForm");
    form.reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
