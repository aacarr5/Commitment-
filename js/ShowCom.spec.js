import React from 'react'
import ShowCom from './ShowCom.js'
import preload from './../public/data.json'
import Search from './Search.js'

import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('ShowCom component for each com', () => {
	const component = shallow(<Search />)
	expect(component.find(ShowCom).length).toEqual(preload.committments.length)
})
