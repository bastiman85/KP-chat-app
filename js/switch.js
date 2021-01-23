const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
   if (e.target.checked) {
      document.body.classList.add("full-site");
   } else {
      document.body.classList.remove("full-site");
   }
}

// Cred: Ananya Neogi https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
