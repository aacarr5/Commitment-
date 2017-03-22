import React from 'react'
import preLoad from '../public/data.json'
import ShowCom from './ShowCom.js'


const Search = React.createClass({
	getInitialState () {
		return  {
			searchTerm:''
		}
	},

	handleSeachTermChange (event) {
		this.setState({searchTerm:event.target.value})
	},

	filterResults (term,array) {
		return array.filter( (com) => {
			return `${com.firstName} ${com.lastName} ${com.email}`.toUpperCase().indexOf(term.toUpperCase()) >= 0
		})
	},

	render () {
		return(
			<div className='search'>
				<header className="search-header">
					<h1> Search:</h1>
					<input onChange={this.handleSeachTermChange} className="search-input" value={this.state.searchTerm} type="text" placeholder='search' />					
				</header> 
				{this.filterResults(this.state.searchTerm,preLoad.committments).map((com) => {
					return(
						<ShowCom key={com.id} {...com} />
					)
				})}
			</div>
		)
	}
})


export default Search