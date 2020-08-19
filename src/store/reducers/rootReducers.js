const currentTime = new Date();

const initialState = {
    posts: [
        
    ],
    userData: {}
};

const rootReducers = (state = initialState, action) => {
    console.log(state.posts);

    if (action.type === 'CREATE_NEW_POST') {
        return {
            ...state,
            posts: [
                ...state.posts,
                action.post
            ]
        };
    }

    return state; 
}

export default rootReducers;