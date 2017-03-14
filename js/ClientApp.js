import React from 'react'
import { render } from 'react-dom'

import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
	render () {
		return (
			<h1> Hello i'm working </h1>
		)
	}
})


render(<App />,document.getElementById('app'))