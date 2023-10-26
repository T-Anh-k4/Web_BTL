// validation form login
const inputEmail = document.querySelector(".input-login-email");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login_signInButton");

// validation form login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputEmail.value));
    if (user && user.email === inputEmail.value && user.password === inputPassword.value) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "HOME/font.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
