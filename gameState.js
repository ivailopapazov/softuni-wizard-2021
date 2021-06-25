function gameStateFactory() {
    let state = {
        gameOver: false,
        wizard: {
            x: 100,
            y: 200,
            width: 82,
            height: 100,
            speed: 7,
        },
        keys: {},
        bugStats: {
            nextBugCreation: 0,
            maxCreationInterval: 1500,
            speed: 3,
            width: 50,
            height: 50,
        }
    };
    
    return function() {
        return state;
    };
}
