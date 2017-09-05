$(document).ready(function () {
    $("#submit").click(function () {
        var voornaam = $("#achternaam").val();
        var achternaam = $("#voornaam").val();
        var mail = $("#mail").val();
        var message = $("#message").val();
        var tel = $("#tel").val();
        // Checking for blank fields.
        if (voornaam == '' || mail == '' || message == '') {
            alert("Please Fill Required Fields");
        } else {
            $('#mail-bericht').removeClass('not-visible-message');
            $.ajax({
                url: './assets/scripts/contact-form.php',
                type:'POST',
                data:
                {
                    voornaam1: voornaam,
                    achternaam1: achternaam,
                    mail1: mail,
                    message1: message,
                    tel1: tel,
                },
                success:function(data) {
                    if(data === true) {
                    }
                }             
            });
        }
    });
});