export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDLBQKeFBUwaL4HFrw4ipi20eejg1zQfsFkifyo69cY-3uHMUSK89PExcF1vjYT2fcL86w1AQLlXkKfPb6o2pSZtP8F_kNzRkjMDJwOPFYR7i__9_tlwLPEtfNrUFc25ibivBJaKhmVhtmV_KB1RhiAiPTwcjKDHoO9cU9kFbQvGhGaNKPlcoE',

};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };


        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists

            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;