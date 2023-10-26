const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputEmailRegister = document.querySelector(".input-signup-email");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".login_registerButton");
const registerForm = document.querySelector('.form-box.register');
const loginForm = document.querySelector('.form-box.login');

// Biểu thức chính quy kiểm tra địa chỉ email
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const inputUsernameRegister = document.querySelector(".input-signup-username");
  const inputEmailRegister = document.querySelector(".input-signup-email");
  const inputPasswordRegister = document.querySelector(".input-signup-password");
  
  if (
    inputUsernameRegister.value === "" ||
    inputEmailRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("Vui lòng không để trống.");
  } else if (!emailRegex.test(inputEmailRegister.value)) {
    alert("Địa chỉ email không hợp lệ.");
  } else {
    // Tạo đối tượng user
    const user = {
      username: inputUsernameRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };
    // Chuyển đối tượng user thành chuỗi JSON
    let json = JSON.stringify(user);
    // Lưu thông tin đăng ký vào Local Storage (hoặc cơ sở dữ liệu của bạn)
    localStorage.setItem(inputEmailRegister.value, json);
    alert("Đăng ký thành công!");
    // Chuyển sang màn hình đăng nhập
    registerForm.style.transform = 'translateX(400px)';
    loginForm.style.transform = 'translateX(0)';
  }
});

  