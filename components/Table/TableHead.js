// @flow
import React from 'react';

import type {Schema} from './types';

type Props = {
    schema: Schema,
};

export default class TableHead extends React.Component {
    props: Props;

    render() {
        return (
            <thead>
                <tr>
                    {Object.keys(this.props.schema).map((key) => <th key={key}>{this.props.schema[key].title}</th>)}
                </tr>
            </thead>
        );
    }
}
