import { createStore, combineReducers } from 'redux';


const allPosts = (state = [{
	title: "Titulo del Post",
	body: "Cuerpo del Post"
}, {
	title: "Chia y titulo",
	body: "El nuevo amanecer"

}], action) => {
	let nuevoEstado = Object.assign({}, state);

	switch(action.type){
		case 'DATA_LOADED':
			return nuevoEstado;
		default:
			return state;
	}
}

const reducer = combineReducers({
	allPosts: allPosts
});

const store = createStore(reducer);


export default store;
