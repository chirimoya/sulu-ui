// @flow
import React from 'react';

type Props = {
    current: number,
    total: number,
    onChange: (page: number) => void,
};

export default class Pagination extends React.Component {
    props: Props;

    render() {
        return (
            <div>
                <a onClick={() => this.props.onChange(this.props.current - 1)}>Previous</a>
                {this.props.current} of {this.props.total}
                <a onClick={() => this.props.onChange(this.props.current + 1)}>Next</a>
            </div>
        );
    }
}
