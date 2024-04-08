document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var rm = document.getElementById("rmInput").value;
        var senha = document.getElementById("senhaInput").value;


        if (rm === "rm123" && senha === "123") {

            window.location.href = "portaldoaluno.html";
        } else {

            alert("RM ou senha incorretos. Por favor, tente novamente.");
        }
    });

    document.getElementById("toggleThemeButton").addEventListener("click", function() {
        toggleDarkMode();
        toggleSwitch(); 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    toggleSidebarBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    closeSidebarBtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
