import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import App from './App';

describe('App',() => {

  it('should render TaskList',() => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists('TaskList')).toEqual(true)
    })

});