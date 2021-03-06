// pages/Profile/ProfilePic/ProfilePic.js
const app = getApp();
const db = wx.cloud.database();
const _ = db.command;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    headList: [], // 头像列表
    curAvatar: "",
  },
  /**
   * 组件的生命周期
   */
  created() {
    // head获取所有头像信息
    db.collection("official").where({
      name: "头像"
    })
      .get()
      .then((res) => {
        console.log(app.globalData.qualification)
        let qualification = app.globalData.qualification;
        for (let i = 0; i < res.data[0].head.length; i++) {
          if (res.data[0].head[i].qualification == "") {
            res.data[0].head[i].isShow = true;
          } else {
            if (qualification.indexOf(res.data[0].head[i].qualification) == -1) {
              res.data[0].head[i].isShow = false;
            } else {
              res.data[0].head[i].isShow = true
            }
          }
        }
        console.log(res.data[0].head);
        this.setData({
          headList: res.data[0].head,
          curAvatar: app.globalData.avatar,
        });
      });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 选择头像
    choosePic(e) {
      console.log(e);
      app.globalData.avatar = e.currentTarget.id;
      this.setData({
        curAvatar: e.currentTarget.id,
      });
      this.triggerEvent("closePic", this.data.curAvatar, {});
    },
    chooseLockedPic(e) {
      let content = e.currentTarget.id;
      wx.showToast({
        title: "参与" + content + "解锁",
        icon: "none",
        duration: 2000,
      });
    },
    // 关闭头像页面
    closePic() {
      this.triggerEvent("closePic", "none", {});
    },
  },
});
