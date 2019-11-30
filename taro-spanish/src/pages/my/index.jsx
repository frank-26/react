import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.scss";

@inject("counterStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
      </View>
    );
  }
}

export default Index;
