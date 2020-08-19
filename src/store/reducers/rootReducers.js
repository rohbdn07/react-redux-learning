const currentTime = new Date();

const initialState = {
    posts: [
        
    ],
    userData: {}
};

const rootReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_NEW_POST':
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            };
        case 'REMOVE_ALL_POSTS':
            return {
                ...state,
                posts: []
            }
        default: 
            return state;
    }
}

export default rootReducers;