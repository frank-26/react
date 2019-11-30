import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Input } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import FlexView from "../../components/FlexView";

import "./index.scss";

@inject("counterStore")
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "预约"
  };

  state = {
    dateSel: "2019-12-01",
    list: [
      {
        value: 0,
        text: "男",
        checked: false
      },
      {
        value: 0,
        text: "女",
        checked: true
      }
    ]
  };

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  };

  onSubmit = e => {
    console.log(this.state);
  };

  render() {
    const {} = this.props;
    return (
      <View className="cover">
        <FlexView direction="column" justify="space-between">
          <View>
            <View className="item">
              <Text>1. 请输入微信号</Text>
              <Input type="text" placeholder="请输入" maxLength="10" />
            </View>
            <View className="item">
              <Text>2. 你的名字</Text>
              <Input type="text" placeholder="请输入" maxLength="10" />
            </View>
            <View className="item">
              <Text>3. 性别</Text>
              <Input type="text" placeholder="请输入" maxLength="10" />
            </View>
            <View className="item">
              <Text>4. 年龄</Text>
              <View className="radio-list">
                <RadioGroup>
                  {this.state.list.map((item, i) => {
                    return (
                      <Label className="radio-list__label" for={i} key={i}>
                        <Radio
                          className="radio-list__radio"
                          value={item.value}
                          checked={item.checked}
                        >
                          {item.text}
                        </Radio>
                      </Label>
                    );
                  })}
                </RadioGroup>
              </View>
            </View>
            <View className="item">
              <Text>5. 你想预约上课的日期</Text>
              <Picker mode="date" onChange={this.onDateChange}>
                <View className="picker">当前选择：{this.state.dateSel}</View>
              </Picker>
            </View>
          </View>
          <View>
            <Button type="primary" onClick={this.onSubmit}>
              提交
            </Button>
          </View>
        </FlexView>
      </View>
    );
  }
}

export default Index;
