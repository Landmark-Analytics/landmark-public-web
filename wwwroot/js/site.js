(function () {
    const sessionKey = 'next-visit';
    if (sessionStorage.getItem(sessionKey) === null) {
        //First visit for this session
        sessionStorage.setItem(sessionKey, 'true');

        //Add a class that will animate the logo.
        //We only want this to happen on the first visit within a session or else it becomes annoying
        document.querySelector('#header-logo').classList.add('animate');
    }
})();
