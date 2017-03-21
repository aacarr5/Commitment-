import React from 'react'
import preLoad from '../public/data.json'
import ShowCom from './ShowCom.js'


const Search = React.createClass({
	getInitialState () {
		return  {
			searchTerm:'initial search term'
		}
	},

	handleSeachTermChange (event) {
		this.setState({searchTerm:event.target.value})
	},

	searchFilter (term,array) {
		array.filter( (element) => {
			return `${element.firstName} ${element.lastName}`.toUpperCase().indexOf(term.toUpperCase() ) >= 0
 		})
	},

	render () {
		return(
			<div className='search'>
				<header className="search-header">
					<h1> Search: </h1>
					<input onChange={this.handleSeachTermChange} className="search-input" value={this.state.searchTerm} type="text" placeholder='search' />					
				</header>
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