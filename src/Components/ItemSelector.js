import React, { Component } from 'react';

class ItemSelector extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { params, setItemVal, asList, fbList } = this.props
        const { grow, shrink, basis, order, self } = params
        const NumberBox = (attr, data) => (
            <div className="numberBox">
                <div className="roundBtn minusBtn" onClick={() => setItemVal(attr, data - 1)}>-</div>
                <div className="number">{data}</div>
                <div className="roundBtn plusBtn" onClick={() => setItemVal(attr, data + 1)}>+</div>
            </div>
        )
        return (
            <div className="selector">
                <div className="selRow">
                    <span className="selTitle">flex-grow</span>
                    {NumberBox('grow', grow)}
                </div>
                <div className="selRow">
                    <span className="selTitle">flex-shrink</span>
                    {NumberBox('shrink', shrink)}
                </div>
                <div className="selRow">
                    <span className="selTitle">flex-basis</span>
                    <select value={basis} onChange={(e) => setItemVal('basis', e.target.value)}>
                        {fbList.map((item, key) => <option value={key} key={key}>{item.text}</option>)}
                    </select>
                </div>
                <div className="selRow">
                    <span className="selTitle">order</span>
                    {NumberBox('order', order)}
                </div>
                <div className="selRow">
                    <span className="selTitle">align-self</span>
                    <select value={self} onChange={(e) => setItemVal('self', e.target.value)}>
                        {asList.map((item, key) => <option value={key} key={key}>{item.text}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

export default ItemSelector;