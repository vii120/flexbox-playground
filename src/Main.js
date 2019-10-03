import React, { Component } from 'react';
import { RadioBtn, Flexbox } from './Components'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 各個屬性的所有值
            dirList: [
                { text: 'row', class: '' },
                { text: 'column', class: 'flex-column' },
                { text: 'row-reverse', class: 'flex-row-reverse' },
                { text: 'column-reverse', class: 'flex-column-reverse' }],
            jcList: [
                { text: 'flex-start', class: '' },
                { text: 'flex-end', class: 'justify-content-end' },
                { text: 'center', class: 'justify-content-center' },
                { text: 'space-between', class: 'justify-content-between' },
                { text: 'space-around', class: 'justify-content-around' },
            ],
            // aiList: [
            //     { text: '', class: '' },
            // ],
            // 當前屬性值
            valRecord: {
                dirVal: 0,      // flex-direction
                jcVal: 0,       // justify-content
                aiVal: 0,       // align-items
            },
        }
    }
    // 改變任何屬性
    setVal = (attr, val) => {
        const newVal = { ...this.state.valRecord }
        newVal[attr] = Number(val)
        this.setState({ valRecord: newVal });
    }
    // 將屬性轉成 class 名稱
    setClass = () => {
        const { valRecord } = this.state
        // 屬性值與列表的名稱對照
        const convertList = {
            dirVal: 'dirList',
            jcVal: 'jcList',
        }
        const classList = Object.keys(valRecord).reduce((pre, el) => {
            if (!!valRecord[el] && convertList[el]) {
                const attrList = this.state[convertList[el]]
                return pre.concat(attrList[valRecord[el]].class)
            } else return pre
        }, [])
        return classList
    }
    // 初始化所有值
    initVal = () => {
        const newVal = { ...this.state.valRecord }
        Object.keys(newVal).map(item => newVal[item] = 0)
        console.log(newVal);
        this.setState({ valRecord: newVal });
    }
    render() {
        const { valRecord, dirList, jcList } = this.state
        const radioContent = (title, btnName, list, valName) => (
            <div className="mb-2 d-flex align-items-center">
                <span className="mr-3">{title}</span>
                <RadioBtn name={btnName}
                    list={list}
                    value={valRecord[valName]}
                    onChange={e => this.setVal(valName, e.target.value)}
                />
            </div>
        )
        return (
            <div className="container p-3">
                {radioContent('flex-direction', 'dirBtn', dirList, 'dirVal')}
                {radioContent('justify-content', 'jcBtn', jcList, 'jcVal')}
                {/* {radioContent('align-items', 'aiBtn', dirList, 'aiVal')} */}
                <span className="btn btn-outline-danger my-2" onClick={this.initVal}>reset!</span>
                <Flexbox classList={this.setClass()} />
            </div>
        );
    }
}

export default MainPage;