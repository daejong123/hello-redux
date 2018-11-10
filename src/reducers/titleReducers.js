import titleAction from '../actions/titleAction';

const initTitle = {
    list: ['测试数据一', '测试数据二']
}

const reducer = (state = initTitle, action) => {
    switch(action.type) {
        case titleAction.ADD:
            state.list = [...state.list, action.value];
            return state;
        case titleAction.DEL:
            const { list } = state;
            const index = action.value;
            list.splice(index, 1);
            state.list = list;
            return state;
        default:
            return state;
    }
}

export default reducer;