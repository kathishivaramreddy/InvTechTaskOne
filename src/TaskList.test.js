import React from 'react';
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {TaskList} from "./TaskList";

describe('TaskList',() => {

    it('should display list on submit',() => {
        const wrapper = mount(<TaskList/>);
        wrapper.find('input').simulate('change',{target:{value:'Task1'}});
        wrapper.find('form').simulate('submit');
        expect(wrapper.exists('li')).toEqual(true);
        expect(wrapper.find('li').text()).toBe('Task1')
    })

    it('should remove task on click', () => {
        const wrapper = mount(<TaskList/>);
        wrapper.find('input').simulate('change',{target:{value:'Task2'}});
        wrapper.find('form').simulate('submit');
        wrapper.find('li').simulate('click');
        expect(wrapper.exists('li')).toEqual(false)
    })
});