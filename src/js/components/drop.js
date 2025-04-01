const subMenu = document.querySelectorAll('.nav__item--submenu');
subMenu.forEach(sub => {
  const navLink = sub.querySelector('.nav__link');
  console.log(navLink);

  navLink.addEventListener('focus', (e) => {
    sub.classList.add('open');
  })

  window.addEventListener('click', (e) => {
    sub.classList.remove('open');
  })

  document.addEventListener('keyup', function (event) {
  	if (event.code === 'Escape') {
  		sub.classList.remove('open');
  	}
  });


  // window.onclick = window.onmouseup = window.oncontextmenu =
  // window.onkeydown = window.touchstart = function(e){...}


  const simpleLink = document.querySelectorAll('.nav__link');
  simpleLink.forEach(simple => {
    if(!simple.closest('.nav__item--submenu')) {
      simple.addEventListener('focus', (e) => {
        sub.classList.remove('open');
      })
    }
  })


})



  // const dropLink = document.querySelectorAll('.nav__item--menu .nav__link');
  // const ordLink = document.querySelectorAll('.nav__link');
  // dropLink.forEach(link => {
  //   link.addEventListener("focusin", (e) => {
  //     const targetElement = e.target;
  //     const liItem = targetElement.closest('.nav__item--menu');
  //     liItem.classList.add('open');
  //   })
  // })

  // ordLink.forEach(ord => {
  //   if(!ord.closest('.nav__item--menu')) {
  //     ord.addEventListener('focusin', (e) => {
  //       const menu = document.querySelectorAll('.nav__item--menu');
  //       menu.forEach(men => {
  //         men.classList.remove('open');
  //       })
  //     })
  //   }
  // })


//   /* Перевірка мобільного браузера */
// export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
// /* Додавання класу touch для HTML, якщо браузер мобільний */
// export function addTouchClass() {
// 	// Додавання класу _touch для HTML, якщо браузер мобільний
// 	if (isMobile.any()) document.documentElement.classList.add('touch');
// }


