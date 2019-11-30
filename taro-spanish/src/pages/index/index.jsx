import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import FlexView from "../../components/FlexView";

import "./index.scss";

@inject("counterStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  goBook = () => {
    Taro.navigateTo({
      url: "/pages/book/index"
    });
  };

  render() {
    const {
      counterStore: { counter }
    } = this.props;

    return (
      <View className="home">
        <FlexView
          direction="row"
          align="center"
          justify="center"
          className="home"
        >
          <View onClick={this.goBook} className="book">
            预约课程
          </View>
        </FlexView>
      </View>
    );
  }
}

export default Index;
