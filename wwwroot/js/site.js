(() => {
  const $body = document.querySelector('body');
  const $logo = document.querySelector('#header-logo');
  const $sideNavToggle = document.querySelector('#side-nav-toggle')
  const $sideNav = document.querySelector('#side-navigation')
  const $sideNavLinks = Array.from($sideNav.querySelectorAll('a'));
  const $sidebarBackdrop = document.querySelector('#sidebar-backdrop')

  //Header logo Animation
  const sessionKey = 'next-visit';
  if (sessionStorage.getItem(sessionKey) === null) {
    //First visit for this session
    sessionStorage.setItem(sessionKey, 'true');

    //Add a class that will animate the logo.
    //We only want this to happen on the first visit within a session or else it becomes annoying
    $logo.classList.add('animate');
  }

  let sideNavOpen = false;
  function updateSidebarClass() {
    $body.classList.toggle('nav-open', sideNavOpen);

    if (sideNavOpen) {
      $sideNav.focus();
    } else {
      document.activeElement.blur();
    }

    //make the links focusable only when shown on screen
    $sideNavLinks.forEach(l => l.tabIndex = sideNavOpen ? 0 : -1);
  }

  document.body.addEventListener('keyup', (ev) => {
    if (sideNavOpen && ev.key === 'Escape') {
      sideNavOpen = false
      updateSidebarClass()
    }
  }, false);

  $sideNavToggle.addEventListener('click', (ev) => {
    ev.preventDefault();
    sideNavOpen = !sideNavOpen;
    updateSidebarClass();
  }, false);

  $sidebarBackdrop.addEventListener('click', (ev) => {
    ev.preventDefault();
    sideNavOpen = false
    updateSidebarClass()
  }, false);

  $sidebarBackdrop.addEventListener('touchstart', (ev) => {
    ev.preventDefault();
    sideNavOpen = false
    updateSidebarClass()
  }, false);
})();
