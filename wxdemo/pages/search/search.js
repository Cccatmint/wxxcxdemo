// pages/search/search.js
Page({
  data: {
    billno:'',
    show:false,
    expTextName:'',
    tel:'',
    msg: "",
    updateStr:'',
    logoUrl:'',
    mailinfolist:[]
  },
search:function(e) {
  const that = this
  this.setData({billno : e.detail.value})
  let nu = this.data.billno

  wx.request({
    url: `https://route.showapi.com/64-19`, 
    data: {
      showapi_appid: '563956',
      showapi_sign: '81424faff58a4dad8106793fef4b48a6',
      com:'auto',
      nu: nu
    },
    header: {
      'content-type': 'application/json' 
    },
    success (res) {
      if (res.data.showapi_res_code === -1 || res.data.showapi_res_body.flag === false) { 
        that.setData({show:false})
        // that.logoUrl=''
        wx.showToast({
          title: '莫得信息',
          icon: 'error',
          duration: 1000
        })
        return 
      } //查询不到直接返回
      else{
      that.setData({show:true})
      console.log(res)
      that.setData({expTextName:res.data.showapi_res_body.expTextName})
      that.setData({tel:res.data.showapi_res_body.tel})
      that.setData({msg:res.data.showapi_res_body.msg})
      that.setData({updateStr:res.data.showapi_res_body.updateStr})
      that.setData({logoUrl:res.data.showapi_res_body.logo})
      that.setData({mailinfolist : res.data.showapi_res_body.data})
      }
      
    }
  })

}




  // onPullDownRefresh: function () {
  //   console.log('您搁那拉啥呢？')
  // },

})