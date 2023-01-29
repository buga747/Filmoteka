import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function onPageLoad() {
  Loading.hourglass({
    cssAnimationDuration: 500,
    svgSize: '150px',
    svgColor: '#ff6b01',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  });

  setTimeout(() => {
    Loading.remove();
  }, 1000);
}
