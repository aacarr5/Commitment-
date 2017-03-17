import React from 'react'
import FutureEventsShow from './FutureEventsShow.js'
const { string, shape } = React.PropTypes

const ShowCom = React.createClass({
	render () {
		const {firstName, lastName, phone, email, protest, futureEvents} = this.props.com
		return(
			<div className='com-detail'>
				<h2>{`${firstName} ${lastName}`} </h2>
				<h3>Phone: {phone} </h3>
				<h3>Email: {email} </h3>
				<h3>Protest: {`${protest}`}</h3>
				{/*<FutureEventsShow events={futureEvents} />*/}
			</div>
		)
	}
})

export default ShowCom