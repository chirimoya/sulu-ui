// @flow
import React from 'react';

import type { Element } from 'react';

type Props = {
    onClick: () => void,
    children?: Element<any>
};

export default class Button extends React.PureComponent {
    props: Props;

    handleClick = () => {
        this.props.onClick();
    }

    render() {
        return <button onClick={this.handleClick}>{this.props.children}</button>;
    }
}
