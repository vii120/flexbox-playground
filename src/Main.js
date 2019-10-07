import React, { Component } from 'react';
import { RadioBtn, Flexbox, ItemSelector, Flexitem } from './Components'

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
            // flex container 當前屬性值
            containerVal: {
                dirVal: 0,      // flex-direction
                wrapVal: 0,     // flex-wrap
                jcVal: 0,       // justify-content
                aiVal: 0,       // align-items
                acVal: 0,       // align-content
            },
            // flex items 當前屬性值
            itemVal: [
                { grow: 0, shrink: 1, basis: 0, order: 0, self: 0 },
                { grow: 0, shrink: 1, basis: 0, order: 0, self: 0 },
                { grow: 0, shrink: 1, basis: 0, order: 0, self: 0 },
                { grow: 0, shrink: 1, basis: 0, order: 0, self: 0 },
                { grow: 0, shrink: 1, basis: 0, order: 0, self: 0 }],
            asList: [
                { text: 'auto', class: '' },
                { text: 'flex-start', class: 'align-self-start' },
                { text: 'flex-end', class: 'align-self-end' },
                { text: 'center', class: 'align-self-center' },
                { text: 'baseline', class: 'align-self-baseline' },
                { text: 'stretch', class: 'align-self-stretch' }],
            fbList: [
                { text: 'auto', class: '' },
                { text: '0px', class: 'flex-basis-0' },
                { text: '100px', class: 'flex-basis-px' },
                { text: '50%', class: 'flex-basis-percent' },
            ]
        }
    }
    // 改變 container 屬性
    setConVal = (attr, val) => {
        const newVal = { ...this.state.containerVal }
        newVal[attr] = Number(val)
        this.setState({ containerVal: newVal });
    }
    // 改變 item 屬性
    setItemVal = (index, attr, val) => {
        const newVal = this.state.itemVal.map(item => ({ ...item }))
        newVal[index][attr] = Number(val)
        this.setState({ itemVal: newVal });
    }
    // 將 container 屬性轉成 class 名稱
    setClass = () => {
        const { containerVal } = this.state
        // 屬性值與列表的名稱對照
        const convertList = {
            dirVal: 'dirList',
            wrapVal: 'wrapList',
            jcVal: 'jcList',
            aiVal: 'aiList',
            acVal: 'acList',
        }
        const classList = Object.keys(containerVal).reduce((pre, el) => {
            if (!!containerVal[el] && convertList[el]) {
                const attrList = this.state[convertList[el]]
                return pre.concat(attrList[containerVal[el]].class)
            } else return pre
        }, [])
        return classList
    }
    // 初始化 container 所有值
    initCon = (e) => {
        if (e) { e.preventDefault() }
        const newVal = { ...this.state.containerVal }
        Object.keys(newVal).map(item => newVal[item] = 0)
        this.setState({ containerVal: newVal });
    }
    // 初始化 items 所有值
    initItems = (e) => {
        if (e) { e.preventDefault() }
        const newVal = Array.apply(null, Array(5)).map(item => (
            { grow: 0, shrink: 1, basis: 0, order: 0, self: 0 }
        ))
        this.setState({ itemVal: newVal });
    }
    render() {
        const {
            containerVal,
            dirList,
            wrapList,
            jcList,
            aiList,
            acList,
            itemVal,
            asList,
            fbList,
        } = this.state
        const radioContent = (title, btnName, list, valName) => (
            <div className="mb-2 row align-items-center">
                <span className="col-lg-2 mb-lg-0 mb-1 font-weight-bold">{title}</span>
                <div className="col-lg-10">
                    <RadioBtn name={btnName}
                        list={list}
                        value={containerVal[valName]}
                        onChange={e => this.setConVal(valName, e.target.value)}
                    />
                </div>
            </div>
        )
        return (
            <div className="container pt-2 pb-5">
                <h1 className="text-center mb-4">Flexbox Playground</h1>
                <h3 className="my-4"><span role="img">🧀</span> flex container
                    <button className="btn btn-sm btn-outline-danger ml-4" onClick={this.initCon}>reset!</button>
                </h3>
                {radioContent('flex-direction', 'dirBtn', dirList, 'dirVal')}
                {radioContent('flex-wrap', 'wrapBtn', wrapList, 'wrapVal')}
                {radioContent('justify-content', 'jcBtn', jcList, 'jcVal')}
                {radioContent('align-items', 'aiBtn', aiList, 'aiVal')}
                {radioContent('align-content', 'acBtn', acList, 'acVal')}
                {!!containerVal.acVal && !containerVal.wrapVal &&
                    <div className="text-danger">* ALIGN-CONTENT need to use with WRAP!!</div>}
                <Flexbox classList={this.setClass()} />
                <h3 className="my-4"><span role="img">🧀</span> flex items
                    <button className="btn btn-sm btn-outline-danger ml-4" onClick={this.initItems}>reset!</button>
                </h3>
                <div className="selectorWrapper">
                    {Array.apply(null, Array(5)).map((item, key) =>
                        <ItemSelector
                            key={key}
                            number={key + 1}
                            params={itemVal[key]}
                            asList={asList}
                            fbList={fbList}
                            setItemVal={(attr, val) => this.setItemVal(key, attr, val)} />
                    )}
                </div>
                <Flexitem itemVal={itemVal} asList={asList} fbList={fbList} />
            </div>
        );
    }
}

export default MainPage;