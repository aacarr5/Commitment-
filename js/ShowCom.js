import React from 'react'
import FutureEventsShow from './FutureEventsShow.js'
const { string, shape, arrayOf, number } = React.PropTypes

const ShowCom = React.createClass({
	propTypes: {
			firstName: string.isRequired,
			lastName: string.isRequired,
			phone: string.isRequired,
			email: string.isRequired,
			futureEvents: arrayOf(shape({
				id:number.isRequired,
				name:string.isRequired,
			})),
	},

	render () {
		const {firstName, lastName, phone, email, protest, futureEvents} = this.props
		return(
			<div className='com-detail'>
				<h2>{`${firstName} ${lastName}`} </h2>
				<h3>Phone: {phone} </h3>
				<h3>Email: {email} </h3>
				<h3>Protest: {`${protest}`}</h3>
				<FutureEventsShow events = {futureEvents} />
			</div>
		)
	}
})

export default ShowCom