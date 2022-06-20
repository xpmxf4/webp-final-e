Kakao.init("d7583032b88962c538ab3eed34ef8315");

Kakao.Auth.createLoginButton({
    container: "#kakao_login_button",
    success: function () {
        location.href = "../index.html";
    },
    fail: function (err) {
        alert("failed to login: " + JSON.stringify(err));
    },
});
