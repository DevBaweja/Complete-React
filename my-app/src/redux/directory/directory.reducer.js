import sections from './sections.data';

const INITIAL_STATE = {
    sections,
};
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
