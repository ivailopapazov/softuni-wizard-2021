function gameFactory() {
    let factory = {};

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');

    Object.defineProperties(factory, {
        startScreen: {
            get: () => startScreen
        },
        playScreen: {
            get: () => playScreen
        }
    });

    return factory;
}
