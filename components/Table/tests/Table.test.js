/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import renderer from 'react-test-renderer';
import Table from '../Table';

test('Render data as table', () => {
    const schema = {
        id: {
            title: 'ID',
        },
        title: {
            title: 'title',
        },
        author: {
            title: 'Author',
        },
        authored: {
            title: 'Date',
        },
    };

    const items = [
        {
            id: 1,
            author: 'John Doe',
            authored: '2017-02-28T11:08:41+0100',
            title: 'Test 1',
        },
        {
            id: 2,
            title: 'Test 2',
            author: 'Max Mustermann',
            authored: '2017-02-22T01:08:41+0100',
        },
    ];

    const table = renderer.create(<Table items={items} schema={schema} />);

    expect(table).toMatchSnapshot();
});
