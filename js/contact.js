function sendMail() {
    (function () {
        emailjs.init("oShe7g55firgwWZDP"); // Account Public Key
    })();

    var params = {
        from_name: document.querySelector("#studentname").value,
        email: document.querySelector("#parentemail").value,
        phone: document.querySelector("#phone").value,
        message: document.querySelector("#message").value,
    };

    var serviceID = "service_4jbxtbv"; // Email Service ID
    var templateID = "template_g52vhrc"; // Email Template ID

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email sent successfully!!")
        })
        .catch();
}
