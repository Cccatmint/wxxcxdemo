Page({
  data: {
    menulist:[
      { iconUrl: '../../resourse/phone-icon.png', text:'绑定手机' ,pageurl:'/pages/my/wddyq/wddyq', mark:'bddj'},
      { iconUrl: '../../resourse/realname-icon.png', text:'实名认证' ,pageurl:'/pages/my/smrz/smrz', mark:'smrz'},
      { iconUrl: '../../resourse/Voucher-icon.png', text:'我的抵用卷', pageurl:'/pages/my/wddyq/wddyq', mark:'wddyq'},
      { iconUrl: '../../resourse/address-icon.png', text:'常用地址' ,pageurl:'/pages/my/wddyq/wddyq', mark:'cydz'},
      { iconUrl: '../../resourse/news-icon.png', text:'消息中心' ,pageurl:'/pages/my/wddyq/wddyq', mark:'xxzx'},
      { iconUrl: '../../resourse/service-icon.png', text:'客服服务', pageurl:'/pages/my/wddyq/wddyq', mark:'kffw'}
    ]},
    handleMenuClick: function(e){
      console.log(e.currentTarget.dataset.pageurl,this.data)
      wx.navigateTo({
        url: e.currentTarget.dataset.pageurl
      })

    }
})