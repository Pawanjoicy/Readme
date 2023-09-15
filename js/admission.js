function sendMail() {
    (function () {
        emailjs.init("oShe7g55firgwWZDP"); // Account Public Key
    })();

    var params = {
        from_name: document.querySelector("#parentname").value,
        st_name: document.querySelector("#studentname").value,
        email: document.querySelector("#parentemail").value,
        phone: document.querySelector("#phone").value,
        class: document.querySelector("#course").value,
    };

    var serviceID = "service_4jbxtbv"; // Email Service ID
    var templateID = "template_hel0vbt"; // Email Template ID

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email sent successfully!!")
        })
        .catch();
}
