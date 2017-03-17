import React from 'react'
import preLoad from '../public/data.json'
import ShowCom from './ShowCom.js'


const Search = React.createClass({
	render () {
		return(
			<div className='search'>
				{preLoad.committments.map((com) => {
					return(
						<ShowCom key={com.id} {...com} />
					)
				})}
			</div>
		)
	}
})


export default Search