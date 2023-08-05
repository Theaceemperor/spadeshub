
function mySwitch() {
    const lightMode = document.body;
    document.getElementById('myToggle').innerHTML = 'Dark Mode';
    lightMode.classList.toggle("light-theme");
    lightMode.classList.toggle("light-theme-heading");
    lightMode.classList.toggle("light-theme-text");
  }

const darkMode = document.getElementById('myToggle').onclick = mySwitch;
