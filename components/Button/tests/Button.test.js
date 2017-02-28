/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

test('Render children in button', () => {
    const button = shallow(<Button>Click me!</Button>);

    expect(button.text()).toBe('Click me!');
});

test('Click callback fires', () => {
    const clickSpy = jest.fn();
    const button = shallow(<Button onClick={clickSpy}/>);

    button.simulate('click');

    expect(clickSpy).toBeCalled();
});
