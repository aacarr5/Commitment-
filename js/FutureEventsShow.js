import React from 'React'

const FutureEventsShow = React.createClass({
	eventItem(){
		return this.props.events.map( (event) => {
						return(<li key={event.id} className="event">{event.name}</li>)
					})
	},

	render () {
		return (
			<div className="events">
				<ul className="event-list">
					{this.eventItem()}
				</ul>
			</div>
		)
	}
})

export default FutureEventsShow