import titleAction from '../actions/titleAction';

const initTitle = {
    list: ['测试数据一', '测试数据二']
}

const reducer = (state = initTitle, action) => {
    console.log('action ==>> ', action);
    switch(action.type) {
        case titleAction.ADD:
            console.log(state, action);
            state.list = [...state.list, action.value];
            return Object.assign({}, state);
        case titleAction.DEL:
            console.log(state, action);
            state.list.splice(action.key, 1);
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default reducer;