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
                ...state, // spread operation
                posts: [
                    ...state.posts, // spread operation
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