// @flow
import React from 'react';

import type { Element } from 'react';

type Props = {
    onClick: () => void,
    children?: Element<any>,
};

export default class Button extends React.PureComponent {
    props: Props;

    render() {
        return <button onClick={this.props.onClick}>{this.props.children}</button>;
    }
}
