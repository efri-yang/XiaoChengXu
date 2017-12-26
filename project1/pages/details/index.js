

Page({
  data: {
    iconGsWhat: '../../images/details/icon_hdwhat.png',
    iconDialogClose: "../../images/details/icon_dialog_close.png",
    isIntroDialogShow: false
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      id: options.id,
      dataDetail: ""
    });
    wx.request({
      url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.detail&id=" + this.data.id,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          dataDetail: res.data
        });
        console.log(that.data.dataDetail);
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },





  shopIntroDialog: function () {
    var that=this;
    wx.request({
      url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.about",
      method: 'GET',
      success: function (res) {
        that.setData({
          dataAbout: res.data
        });
      }
    });
    this.setData({
      isIntroDialogShow: !this.data.isIntroDialogShow
    })
  }

});






