if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

if (window.matchMedia('(display-mode: standalone)').matches) {
    document.documentElement.style.width = '100vw';
    document.body.style.width = '100vw';
    document.body.style.overflowX = 'hidden';

    // ページの幅が想定外なら修正
    if (document.documentElement.scrollWidth > window.innerWidth) {
        document.body.style.transform = `scale(${window.innerWidth / document.documentElement.scrollWidth})`;
        document.body.style.transformOrigin = 'top left';
    }
}