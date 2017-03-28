import React from 'react'
import Search from './Search.js'
// import renderer from 'react-test-renderer'
import preload from './../public/data.json'
import { shallow } from 'enzyme'
import { shallowToJson} from 'enzyme-to-json'
import ReactTestUtils from 'react-addons-test-utils' 

test('Search Snapshot Test', () => {
	const component = shallow(<Search />)
	const tree = shallowToJson(component)
	expect(tree).toMatchSnapshot()
})

test('Search should render correct amount of items when searching', () => {
	const searchWord = 'Maxwell'
	const wrapper = shallow(<Search/>)
	const result = wrapper.instance().filterResults(searchWord,preload.committments,);
	expect(result.length).toEqual(1)
})