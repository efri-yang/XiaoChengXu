Page({
  data: {
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
        
      },
      fail: function (res) {
       
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






