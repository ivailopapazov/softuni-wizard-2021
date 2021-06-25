function gameStateFactory() {
    let state = {
        wizard: {
            x: 100,
            y: 200,
        }
    };
    
    return function() {
        return state;
    };
}
