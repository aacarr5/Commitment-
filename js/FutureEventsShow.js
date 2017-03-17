import React from 'React'

const FutureEventsShow = React.createClass({
	eventItem(){
		return this.props.events.map( (event) => {
						return(<li className="com">{event}</li>)
					})
	},

	render () {
		return (
			<div className="com-events">
				<ul>
					{this.eventItem()}
				</ul>
			</div>
		)
	}
})

export default FutureEventsShow