if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker مسجل بنجاح: ', registration);
      })
      .catch((error) => {
        console.log('خطأ في تسجيل Service Worker: ', error);
      });
  });
}
