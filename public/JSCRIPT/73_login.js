$(document).on('click', '#btnLogin', function () {
    $.ajax({
        type: "POST",
        url: "http://10.0.6.74:1235/login/logindata",
        data: JSON.stringify({ "username": $("loginUsername").val(), "password": $("loginPassword").val() }),
        contentType: "application/json; charset=UTF-8",
        success: function (response) {
            $(location).attr("href", "../HTML/dashboard.html");
        },
        statusCode: {
            401: function () {
                alert("Wrong Username or Password");
            }
        },
        error: function (e) {
            alert("Server error - " + e);
        }
    });
});