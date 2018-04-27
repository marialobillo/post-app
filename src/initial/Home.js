import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component{

	componentDidMount(){
			this.props.dispatch1();
	}

	componentWillUnmount(){
		this.props.clear();
	}

	allPosts = () => {
		const Posts = this.props.allPosts.map((post) => {
			return (
				<h4 key={post.id}>{post.title}</h4>
			);
		});
		return Posts;
	}

	render(){
		this.allPosts();

		return(
			<div>
				<h2>Home</h2>
				{this.allPosts()}
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
		},
		clear: () => {
			dispatch({
				type: 'CLEAR_DATA'
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
