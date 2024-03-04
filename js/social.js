document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        let iconColor = window.getComputedStyle(link.querySelector('ion-icon')).color;
        link.style.setProperty('--icon-color', iconColor);
    });

    link.addEventListener('mouseout', () => {
        link.style.setProperty('--icon-color', 'transparent');
    });
});