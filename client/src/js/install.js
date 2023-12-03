const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Added functionality to manage the Install button.  Event listener to manage the button behaviour prior to install.
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);

});

// Button install Click event
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Listenter for after install event has taken place
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
