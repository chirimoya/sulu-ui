/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';

test('Render pagination with page numbers', () => {
    const pagination = renderer.create(<Pagination current={5} total={10} onChange={jest.fn()} />);

    expect(pagination).toMatchSnapshot();
});

test('Click previous link', () => {
    const clickSpy = jest.fn();
    const pagination = shallow(<Pagination current={5} onChange={clickSpy} />);

    pagination.find('a').at(0).simulate('click');
    expect(clickSpy).toBeCalledWith(4);
});

test('Click next link', () => {
    const clickSpy = jest.fn();
    const pagination = shallow(<Pagination current={6} onChange={clickSpy} />);

    pagination.find('a').at(1).simulate('click');
    expect(clickSpy).toBeCalledWith(7);
});
