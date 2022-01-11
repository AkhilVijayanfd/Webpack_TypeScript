
const initialState = {
    age:23
};

const reducer = (state = initialState, action: { type: any; }) => {
    const newState = {...state};

    if(action.type === 'AGE_UP')
    {
        newState.age++;
    }
    if(action.type === 'AGE_DOWN')
    {
        newState.age--;
    }

    return newState;
}

export default reducer;