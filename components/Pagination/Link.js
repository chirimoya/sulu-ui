// @flow
import React from 'react';

import type { Element } from 'react';

type Props = {
    page: number,
    onClick: (page: number) => void,
    children?: Element<any>,
};

export default class Link extends React.PureComponent {
    props: Props;

    handleClick = () => {
        this.props.onClick(this.props.page);
    };

    render() {
        return (
            <a onClick={this.handleClick}>{this.props.children}</a>
        );
    }
}
