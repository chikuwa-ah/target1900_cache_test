if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

if (window.matchMedia('(display-mode: standalone)').matches) {
    document.addEventListener('DOMContentLoaded', () => {
        document.documentElement.style.width = '100%';
        document.body.style.width = '100%';
        document.body.style.overflowX = 'hidden';

        // 遅延補正（レイアウト確定後に実行）
        setTimeout(() => {
            if (document.documentElement.scrollWidth > window.innerWidth) {
                document.body.style.transform = `scale(${window.innerWidth / document.documentElement.scrollWidth})`;
                document.body.style.transformOrigin = 'top left';
            }
        }, 50);
    });
}