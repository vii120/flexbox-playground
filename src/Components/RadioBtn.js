import React, { Component } from 'react';

class RadioBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { list, value, onChange, name } = this.props
        return (
            <div className="radioBox">
                {!!list.length && list.map((item, key) =>
                    <label htmlFor={`${name}_${key}`} key={key}
                        className={key === value ? 'checked' : ''}>
                        <input
                            type="radio"
                            name={name}
                            id={`${name}_${key}`}
                            value={key}
                            onChange={onChange}
                        />
                        {item.text}
                    </label>
                )}
            </div>
        );
    }
}

export default RadioBtn;