import React, { Component } from 'react';

class Flexbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classList } = this.props;
        return (
            <div className={`boxWrapper d-flex ${classList.join(' ')}`}>
                {Array.apply(null, Array(5)).map((item, key) =>
                    <div className="boxItem" key={key}>{key+1}</div>
                )}
            </div>
        );
    }
}

export default Flexbox;