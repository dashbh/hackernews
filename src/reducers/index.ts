const initialState = {
    news: [],
    page: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_NEWS': {
            const { page } = action.payload;
            return {
                ...state,
                page
            }
        }

        case 'UPDATE_NEWS': {
            const story = action.payload;
            const { news } = state;
            const updatedNews = news.map(el => (el.objectID === story.objectID ? {...story} : el));

            return {
                ...state,
                news: updatedNews
            }
        }

        case 'LOAD_NEWS': {
            const { news } = action.payload;
            return {
                ...state,
                news
            }
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;
