
const app = getApp();


Page({
  data: {
    arrow: '../../images/h_arrow_1.png',
    tblHeadFixed: false,
    navAllShow: false,
    isLoading: true,
    nav: "",
    dataRank: "",
    currentIndex: 0
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.cates",
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          nav: res.data
        });
        console.log(that.data.nav);
        that.ajaxGetRankList(that.data.nav.data.list[0]);
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

 ajaxGetRankList: function (id) {
    var that=this;
    wx.request({
      url: "https://m3.xiaoyu.com/welcome/wechatapp?callback=haodian.top50&cate=" + id,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          dataRank: res.data
        });

      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  navTap: function (e) {
    var that = this;
    var id = e.currentTarget.id;
    //设置currentIndex
    this.data.nav.data.list.forEach(function (v, k) {
      if (id == v) {
        that.setData({
          currentIndex: k
        });
        return;
      }
    });
    this.setData({
      navAllShow: false
    })
    //请求获取数据


  },

  onPageScroll: function (res) {
    if (res.scrollTop > 80) {
      this.setData({
        tblHeadFixed: true
      })
    } else {
      this.setData({
        tblHeadFixed: false
      })
    }
  },
  navMore: function () {
    this.setData({
      navAllShow: !this.data.navAllShow
    })
  }


})