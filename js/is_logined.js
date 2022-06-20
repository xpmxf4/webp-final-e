Kakao.init("d7583032b88962c538ab3eed34ef8315");

// 동적 로그인 컴포넌트 작업

const login_cpn = document.getElementById("login");

if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
        url: "/v2/user/me",
        success: function (res) {
            login_cpn.innerHTML = `<a>위시리스트</a><a>내 여행</a><a>메시지</a><a>알림</a><img id='user' src='images/profile_img.png' /><div id='profile_popup'><div id='popup_first_row' class='popup_rows'><span class='name'>${res.properties.nickname}</span><span class='profile_manage'>프로필 관리</span></div><div class='popup_rows'><p>포인트</p><p>쿠폰</p></div><div class='popup_rows'><p>친구 초대</p></div><div class='popup_rows'><p>파트너 등록하기</p><p id='logout'>로그아웃</p></div></div>`;

            // 드랍다운
            const img = document.getElementById("user");
            const popup = document.getElementById("profile_popup");
            const logout_btn = document.getElementById("logout");

            img.addEventListener("click", function () {
                popup.style.display = "inline-block";
            });

            popup.addEventListener("mouseleave", function () {
                popup.style.display = "none";
            });

            // 로그아웃
            logout_btn.addEventListener("click", unlinkApp);
        },
        fail: function (error) {
            console.log(error);
        },
    });
} else {
    login_cpn.innerHTML =
        "<a href=''><div class='notSignup'>파트너 등록하기</div></a><a href='login/login.html'><div class='notSignup'>로그인</div></a><div id='signup-box'><a id='signup' href=''><div>회원가입</div></a></div>";
}

// 로그아웃

function unlinkApp() {
    Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (res) {
            location.reload();
        },
        fail: function (err) {
            alert("logout failed");
        },
    });
    Kakao.Auth.logout(function () {
        location.href = "../index.html";
    });
}


