import React, { Component } from 'react';

class Flexitem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { itemVal, asList, fbList } = this.props
        const setStyle = (item) => {
            const { grow, shrink, order } = item
            const style = {
                'flexGrow': grow,
                'flexShrink': shrink,
                order
            }
            return style
        }
        const setClass = (item) => {
            const { basis, self } = item
            const classArr = ['itemSelf']
            if (fbList[basis] && fbList[basis].class) {
                classArr.push(fbList[basis].class)
            }
            if (asList[self] && asList[self].class) {
                classArr.push(asList[self].class)
            }
            // console.log(basis, self);
            return classArr.join(' ')
        }
        return (
            <div className="itemWrapper d-flex flex-wrap">
                {itemVal.map((item, key) =>
                    <div key={key}
                        className={setClass(item)}
                        style={setStyle(item)}
                    >{key + 1}</div>
                )}
            </div>
        );
    }
}

export default Flexitem;