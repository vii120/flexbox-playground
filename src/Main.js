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
            wrapList: [
                { text: 'nowrap', class: '' },
                { text: 'wrap', class: 'flex-wrap' },
                { text: 'wrap-reverse', class: 'flex-wrap-reverse' }],
            jcList: [
                { text: 'flex-start', class: '' },
                { text: 'flex-end', class: 'justify-content-end' },
                { text: 'center', class: 'justify-content-center' },
                { text: 'space-between', class: 'justify-content-between' },
                { text: 'space-around', class: 'justify-content-around' }],
            aiList: [
                { text: 'flex-start', class: '' },
                { text: 'flex-end', class: 'align-items-end' },
                { text: 'center', class: 'align-items-center' },
                { text: 'baseline', class: 'align-items-baseline' },
                { text: 'stretch', class: 'align-items-stretch' }],
            acList: [
                { text: 'flex-start', class: '' },
                { text: 'flex-end', class: 'align-content-end' },
                { text: 'center', class: 'align-content-center' },
                { text: 'space-between', class: 'align-content-between' },
                { text: 'space-around', class: 'align-content-around' },
                { text: 'stretch', class: 'align-content-stretch' }],
            // aiList: [
            //     { text: '', class: '' },
            // ],
            // 當前屬性值
            valRecord: {
                dirVal: 0,      // flex-direction
                wrapVal: 0,     // flex-wrap
                jcVal: 0,       // justify-content
                aiVal: 0,       // align-items
                acVal: 0,       // align-content
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
            wrapVal: 'wrapList',
            jcVal: 'jcList',
            aiVal: 'aiList',
            acVal: 'acList',
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
    initVal = (e) => {
        if (e) { e.preventDefault() }
        const newVal = { ...this.state.valRecord }
        Object.keys(newVal).map(item => newVal[item] = 0)
        this.setState({ valRecord: newVal });
    }
    render() {
        const { valRecord, dirList, wrapList, jcList, aiList, acList } = this.state
        const radioContent = (title, btnName, list, valName) => (
            <div className="mb-2 row align-items-center">
            <span className="col-lg-2 mb-lg-0 mb-1">{title}</span>
            <div className="col-lg-10">
            <RadioBtn name={btnName}
                list={list}
                value={valRecord[valName]}
                onChange={e => this.setVal(valName, e.target.value)}
            /></div>
        </div>
        )
        return (
            <div className="container p-3">
                {radioContent('flex-direction', 'dirBtn', dirList, 'dirVal')}
                {radioContent('flex-wrap', 'wrapBtn', wrapList, 'wrapVal')}
                {radioContent('justify-content', 'jcBtn', jcList, 'jcVal')}
                {radioContent('align-items', 'aiBtn', aiList, 'aiVal')}
                {radioContent('align-content', 'acBtn', acList, 'acVal')}
                {!!valRecord.acVal && !valRecord.wrapVal && 
                <div className="text-danger">* ALIGN-CONTENT need to use with WRAP!!</div> }
                <button className="btn btn-outline-danger my-2" onClick={this.initVal}>reset!</button>
                <Flexbox classList={this.setClass()} />
            </div>
        );
    }
}

export default MainPage;