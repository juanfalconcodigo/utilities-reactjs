const INITIAL_STATE = JSON.parse(localStorage.getItem('todos')) || [];

const setDataLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value))
}

const todoReducer = (state, action = {}) => {
    console.log('[ACTION]', action)
    switch (action.type) {
        case "[ADD]":
            state = [...state, action.payload];
            setDataLocalStorage('todos', state);
            break;

        case "[DELETE]":
            state = state.filter((e) => e.id !== action.payload.id);
            setDataLocalStorage('todos', state);
            break;
        case "[TOOGLE]":
            state = state.map((e) => {
                if (e.id === action.payload.id) {
                    return {
                        ...e,
                        done: !(e.done)
                    }
                }
                return {...e };
            });
            setDataLocalStorage('todos', state);
            break;

        case "[GET-ALL]":
            state = [...state];
            break;
    }
    return state;
}

export {
    INITIAL_STATE,
    todoReducer
}