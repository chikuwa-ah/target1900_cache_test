if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

if (window.matchMedia('(display-mode: standalone)').matches) {
    document.addEventListener('DOMContentLoaded', () => {
        // スケールを1に固定（小さく表示されるのを防ぐ）
        document.body.style.transform = 'scale(1)';
        document.body.style.transformOrigin = 'top left';
        document.body.style.zoom = 'reset'; // Android対策
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.documentElement.style.width = '100%';
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    });
}