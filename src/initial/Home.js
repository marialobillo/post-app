import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
	const Posts = props.allPosts.map((post, index) => {
		return (
			<h4 key={index}>{post.title}</h4>
		);
	});
	return (
		<div>
			<h2>Home</h2>
			{Posts}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		allPosts: state.allPosts
	}
}

const mapDispatchToProps = () => {
	return {
		dispatch: () => {

		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
