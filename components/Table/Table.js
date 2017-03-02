// @flow
import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

import type {Item, Schema} from './types';

type Props = {
    items: Array<Item>,
    schema: Schema,
};

export default class Table extends React.Component {
    props: Props;

    render() {
        return (
            <table>
                <TableHead schema={this.props.schema} />
                <tbody>
                    {this.props.items.map((item) => <TableRow key={item.id} item={item} schema={this.props.schema} />)}
                </tbody>
            </table>
        );
    }
}
