
const app = getApp();


Page({
  data: {
    arrow: '../../images/h_arrow_1.png',
    tblHeadFixed:false,
    navAllShow:false,
    isLoading:true
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
  }
  
})