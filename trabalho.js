// Sidebar //
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item[data-submenu]');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const submenuId = item.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);

            // Alterna a visibilidade do submenu
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }

            // Alterna a classe active no item do menu
            item.classList.toggle('ative');
        });
    });
});
