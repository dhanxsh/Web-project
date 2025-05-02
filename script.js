var sidenav = document.querySelector(".side-navbar");

function showNavbar() {
    sidenav.style.left = "0";
}

function closeNavbar() {
    sidenav.style.left = "-60%";
}

window.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.querySelector('.navbar-link a[href="login.html"]');

    if (localStorage.getItem("isLoggedIn") === "true") {
        // Hide login link
        if (loginLink) {
            loginLink.parentElement.style.display = 'none';
        }

        // Optionally add "Logout"
        const navbarLinks = document.querySelector('.navbar-links');
        const logoutLink = document.createElement('p');
        logoutLink.className = 'navbar-link';
        logoutLink.innerHTML = `<a href="#" id="logoutBtn">Logout</a>`;
        navbarLinks.appendChild(logoutLink);

        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userId");
            window.location.reload();
        });
    }
});
