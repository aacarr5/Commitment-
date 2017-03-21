import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match} from 'react-router'

import Landing  from './Landing.js'
import Search from './Search.js'

import '../public/reset.scss'
import '../public/normalize.css'
import '../public/style.scss'

const App = React.createClass({
	render () {
		return (
			<BrowserRouter>
				<div className='app'>
					<ul className="nav">
						<li className="nav-item"><a target="_blank" href="www.thepeopleslobbyusa.org">The People's Lobby</a> </li>
						<li className="nav-item"><a target="_blank" href="https://www.linkedin.com/in/andrewacarr">Andrew Carr</a> </li>
						<li className="nav-item"><a target="_blank" href="http://www.reclaimchicago.org/">Reclaim Chicago</a> </li>
					</ul>
					<div className="main">
						<Match exactly pattern='/' component={Landing} />
						<Match exactly pattern='/search' component={Search}/>
					</div>
				</div>
			</BrowserRouter>
		)
	}
})


render(<App />,document.getElementById('app'))