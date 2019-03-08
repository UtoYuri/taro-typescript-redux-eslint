import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui';
import { connect } from '@tarojs/redux'
import { bindActionCreators } from 'redux'

import './index.less'

import * as Actions from '../../actions/test'

interface IStateProps {
  counter?: {
    num: number
  };
}

interface IDispatchProps {
  add?: any;
  minus?: any;
  asyncAdd?: any;
}

interface IPageProps {
}

interface IPageState {
}

type IProps = IStateProps & IDispatchProps & IPageProps

class Index extends Component<IProps, IPageState> {

  config: Taro.Config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const { add, minus, asyncAdd, counter } = this.props;
    return (
      <View>
        <Text>Hello world!</Text>
        <AtButton onClick={add}>+</AtButton>
        <AtButton onClick={minus}>-</AtButton>
        <AtButton onClick={asyncAdd}>async</AtButton>
        <View>{counter ? counter.num : 'null'}</View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch)
  }
}

export default connect<IStateProps, IDispatchProps, IPageProps>(mapStateToProps, mapDispatchToProps)(Index);
