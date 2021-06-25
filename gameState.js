function gameStateFactory() {
    let state = {
        gameOver: false,
        wizard: {
            x: 100,
            y: 200,
            speed: 5,
        },
        keys: {},
    };
    
    return function() {
        return state;
    };
}
