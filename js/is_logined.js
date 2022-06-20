Kakao.init("d7583032b88962c538ab3eed34ef8315");

// 동적 로그인 컴포넌트 작업

const login_cpn = document.getElementById("login");

if (Kakao.Auth.getAccessToken()) {
    login_cpn.innerHTML =
        "<a>위시리스트</a><a>내 여행</a><a>메시지</a><a>알림</a><img id='user' src='../images/profile_img.png' /><div id='profile_popup'><div id='popup_first_row' class='popup_rows'><span class='name'>박채훈</span><span class='profile_manage'>프로필 관리</span></div><div class='popup_rows'><p>포인트</p><p>쿠폰</p></div><div class='popup_rows'><p>친구 초대</p></div><div class='popup_rows'><p>파트너 등록하기</p><p id='logout'>로그아웃</p></div></div>";
} else {
    login_cpn.innerHTML =
        "<a href=''><div class='notSignup'>파트너 등록하기</div></a><a href='./login/login.html'><div class='notSignup'>로그인</div></a><div id='signup-box'><a id='signup' href=''><div>회원가입</div></a></div> ";
}

// 드랍 다운
if (login_cpn.textContent.includes("위시리스트")) {
    const img = document.getElementById("user");
    const popup = document.getElementById("profile_popup");

    img.addEventListener("click", () => {
        popup.style.display = "inline-block";
    });

    if (popup.style.display == "inline-block" && e.e.target.id != profile_popup) {
        document.addEventListener("click", (e) => {
            popup.style.display = "none";
        });
    }
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

const logout_btn = document.getElementById("logout");

logout_btn.addEventListener("click", unlinkApp);
