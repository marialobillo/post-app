import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// const Home = (props) => {
// 	const Posts = props.allPosts.map((post, index) => {
// 		return (
// 			<h4 key={index}>{post.title}</h4>
// 		);
// 	});
// 	return (
// 		<div>
// 			<h2>Home</h2>
// 			{Posts}
// 		</div>
// 	);
// }

class Home extends Component{
	allPosts = () => {
		this.props.dispatch1();
	}

	render(){
		this.allPosts();

		return(
			<div>
				<h2>Home</h2>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		allPosts: state.allPosts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch1: () => {
			axios.get('https://blog-api-u.herokuapp.com/v1/posts')
			.then((response) => {
				console.log(response);
				dispatch({
					type: 'DATA_LOADED',
					data: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
