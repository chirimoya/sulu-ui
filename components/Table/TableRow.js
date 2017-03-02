// @flow
import React from 'react';

import type {Item, Schema} from './types';

type Props = {
    item: Item,
    schema: Schema,
};

export default class TableRow extends React.Component {
    props: Props;

    render() {
        return (
            <tr>
                {Object.keys(this.props.schema).map((key) => <td key={key}>{this.props.item[key]}</td>)}
            </tr>
        );
    }
}
