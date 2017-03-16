import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
	render () {
		return (
			<div className="mainInfo">
				<h1> Welcome to Commitment! Please login to ensure that you are the correct person </h1>
				<h3> This is an application built for <a href="http://www.thepeopleslobbyusa.org/">The People's Lobby </a> </h3>
				<h4> This application is developed by Andrew Carr and is built in React using a Sinatra Backend</h4>
				<p> To proceed, please login </p>
				<Link to='/search'> Review all committments </Link>
			</div>
		)
	}
})

export default Landing