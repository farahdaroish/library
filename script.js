const wrapper = document.getElementById('wrapper');
const toggleBtn = document.getElementById('toggleBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const imageText = document.getElementById('imageText');

toggleBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');

  const isRegistering = wrapper.classList.contains('active');
  loginForm.style.display = isRegistering ? 'none' : 'flex';
  registerForm.style.display = isRegistering ? 'flex' : 'none';
  imageText.textContent = isRegistering
    ?'already have Account? Login '
    : 'Dont have account? Create Now';
  toggleBtn.textContent = isRegistering ? 'Login' : 'Create Account';
});
