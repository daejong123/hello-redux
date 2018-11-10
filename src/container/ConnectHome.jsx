import {connect} from 'react-redux';
import Home from '../component/Home';
import titleAction from '../actions/titleAction';

// ConnectApp这里是数据容器，负责处理业务和数据。
// App 那个组件只负责渲染。

/** 
 * 注意: 这里只能给到具体reducer。 不可以给到reducer里面具体的值
 * 如： list: state.titleReducer.list
 * 否则：会导致页面数据不刷新。
 * 因为只有reducer发生变化。 才会导致store发生改变，从而触发store.subscribe监听来更新ui
 */
// () => ({}) 箭头函数小技巧，等价于 () => {return {}}
const mapStateToProps = (state) => ({
    titleReducer: state.titleReducer
}); 
const mapDispatchToProps = (dispatch) => ({
    addTitle: (value) => dispatch({type: titleAction.ADD, value}),
    delTitle: (key) => dispatch({type: titleAction.DEL, key})
})

let ContainerHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ContainerHome;