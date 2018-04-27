import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const allPosts = (state = [], action) => {
	let nuevoEstado = Object.assign({}, state);

	switch(action.type){
		case 'DATA_LOADED':
			nuevoEstado = state.concat(action.data);
			return nuevoEstado;
		case 'CLEAR_DATA':
			nuevoEstado = [];
			return nuevoEstado;
		default:
			return state;
	}
}

const reducer = combineReducers({
	allPosts: allPosts,
	form: formReducer
});

const store = createStore(reducer);


export default store;
