import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor', this.props.value)
    this.state = {
      newValue: 'foo'
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.newValue) {
      return {newValue: nextProps.value};

    }
    return null;
  }
  // NOTE: 注意区分其有无 shouldComponentUpdate(prevProps) {   const result =
  // prevProps.value !== this.props.value;
  // console.log('shouldComponentUpdate',result,this.props.value)   return result
  // }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount', this.props.value)
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate', this.props.value)
  }
  // 当父组件的 props 改变时...
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('componentWillRecieveProps', nextProps, this.props.value)
    if (nextProps.value !== this.props.value) {
      console.log('props changed')
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.props.value)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props.value)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props.value)

  }
  render() {
    console.log('render', this.props.value)
    return <li>{this.props.value}</li>;
  }
}
const numbers = [1, 2, 3, 4, 5];
const numbers1 = [1, 2, 3, 5, 4];

export class LifeCycle extends React.Component {
  constructor() {
    console.log('P: constructor')
    super();
    this.state = {
      nums: numbers,
      useIndex: false
    }
    this.change = this
      .change
      .bind(this);
    this.changeKeysSource = this
      .changeKeysSource
      .bind(this);
  }

  shouldComponentUpdate(prevProps, prevState) {
    const result = prevState.useIndex !== this.state.useIndex || prevState
      .nums
      .toString() !== this
      .state
      .nums
      .toString();
    console.log('P: shouldComponentUpdate', result)
    return result;
  }
  UNSAFE_componentWillMount() {
    console.log('P: componentWillMount')
  }
  UNSAFE_componentWillUpdate() {
    console.log('P: componentWillUpdate')
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('P:  componentWillRecieveProps', nextProps)
  }
  componentDidMount() {
    console.log('P: componentDidMount')
  }

  componentDidUpdate() {
    console.log('P: componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('P: componentWillUnmount')

  }
  change(nums) {
    this.setState({nums})
  }
  changeKeysSource() {
    this.setState({
      useIndex: !this.state.useIndex
    })
  }

  render() {
    console.log('P: render')
    const {nums, useIndex} = this.state;

    return (
      <div>
        <div className='flex'>
          <div
            onClick={() => this.change(nums[4] === 5
            ? numbers1
            : numbers)}>change</div>
          <div
            onClick={() => this.change([
            ...nums,
            ++nums.length
          ])}>push</div>
          <div
            onClick={() => {
            const arr = nums.slice();
            arr.unshift(++nums.length);
            this.change(arr)
          }}>unShift</div>
          <div onClick={() => this.change([...nums.slice(1, nums.length)])}>pop</div>
          <div
            onClick={() => {
            const index = 3;
            const arr = nums.slice();
            arr.splice(index, 1, 100);
            this.change(arr);
          }}>splice</div>
          <div onClick={this.changeKeysSource}>{useIndex
              ? 'useItem'
              : 'useIndex'}</div>
        </div>
        <ul>
          {nums.map((num, i) =>< ListItem key = {
            useIndex
              ? i
              : num
          }
          value = {
            num
          } > {
            num
          } </ListItem>)}
        </ul>
      </div>
    )
  }
}

