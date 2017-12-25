

Page({
  data: {
    iconGsWhat: '../../images/details/icon_hdwhat.png',
    iconDialogClose:"../../images/details/icon_dialog_close.png",
    isIntroDialogShow:false
  },
  
  shopIntroDialog:function () {
       this.setData({
         isIntroDialogShow: !this.data.isIntroDialogShow
       }) 
  }

});






