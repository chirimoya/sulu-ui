// @flow
import React from 'react';
import Link from './Link';

type Props = {
    current: number,
    total: number,
    onChange: (page: number) => void,
};

export default class Pagination extends React.PureComponent {
    props: Props;

    render() {
        return (
            <div>
                <Link page={this.props.current - 1} onClick={this.props.onChange}>Previous</Link>
                {this.props.current} of {this.props.total}
                <Link page={this.props.current + 1} onClick={this.props.onChange}>Next</Link>
            </div>
        );
    }
}
