// components/lx-nav-pt/lx-nav-pt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navUrl: {
      // 跳转页面
      type: String,
      value: "",
    },
    navImg: {
      // icon绝对路径
      type: String,
      value: "",
    },
    navText: {
      // 文本
      type: String,
      value: "",
    },
    modelTitle: {
      type: String,
      value: "暂无法操作",
    },
    modelContent: {
      type: String,
      value: "志愿已开始招募，等待招募结束后，方可更改",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    navUrl() {
      let properties = this.properties;
      if (properties.navUrl != "")
        wx.navigateTo({
          url: properties.navUrl,
        });
      else {
        this.hover = this.selectComponent("#msg");
        this.hover.showHover({
          title: properties.modelTitle,
          content: properties.modelContent,
          button: [
            {
              ID: 0,
              name: "assure",
              text: "确认",
              isAblePress: true,
            },
          ],
          success: function (res) {
            console.log(res);
          },
        });
      }
    },
  },
});
