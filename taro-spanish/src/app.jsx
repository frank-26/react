import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";

import counterStore from "./store/counter";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
};

class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/book/index", "pages/my/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      backgroundColor: "#ffffff",
      color: "#b3b3b3",
      selectedColor: "#0c17d8",
      list: [
        {
          pagePath: "pages/index/index",
          text: "课程",
          iconPath: "./assets/images/tabbar-index.png",
          selectedIconPath: "./assets/images/tabbar-index-select.png"
        },
        // {
        //   pagePath: "pages/book/index",
        //   text: "发现",
        //   iconPath: "./assets/images/tabbar-find.png",
        //   selectedIconPath: "./assets/images/tabbar-find-select.png"
        // },
        {
          pagePath: "pages/my/index",
          text: "我的",
          iconPath: "./assets/images/tabbar-my.png",
          selectedIconPath: "./assets/images/tabbar-my-select.png"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
