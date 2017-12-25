
const app = getApp();


Page({
  data: {
    arrow: '../../images/h_arrow_1.png',
    tblHeadFixed:false,
    navAllShow:false,
    isLoading:true,
    nav:[]
  },
  onLoad: function (options) {
    var that=this;
    wx.request({
      // url: 'http://127.0.0.1/nav.php',
      url:"http://127.0.0.1/nav.php",
      data: {},
      method: 'GET',  
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        res.data.data.list[0].selected=true;
        that.setData({
          nav: res.data.data.list
        })
      },
      fail:function(res){
        console.log(res);
      }
    })
  },

  onPageScroll: function (res){
    if (res.scrollTop > 80){
        this.setData({
            tblHeadFixed:true
        })
    }else{
      this.setData({
        tblHeadFixed:false
      })
    }
  },
  navMore:function(){
      this.setData({
        navAllShow: !this.data.navAllShow
      })
  },
  navTap:function(e){
    var id=e.currentTarget.id;
    this.data.nav.forEach(function(v,k){
      if(v.id==id){
        v["selected"]=true;
      }else{
        v["selected"] =false;
      }
    });
    this.setData({
      nav: this.data.nav
    });

    
   
    
  }
  
})