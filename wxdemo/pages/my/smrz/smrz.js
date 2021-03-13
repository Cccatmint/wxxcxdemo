// pages/my/smrz.js
Page({
  data: {
    name: '唱跳rap',
    idnumber: '4309xxxxxxxxxx6612',
    idimageurllist: ['../../../resourse/loadidimage.png', '../../../resourse/loadidimage.png'],
    telnum: '15173192581',
  },
  submit: function () {
    //表单数据验证------------------------------------start    
    let {
      name,
      idnumber,
      telnum
    } = this.data //解构data
    const regname = /^[\u4e00-\u9fa5]{1,6}(·[\u4e00-\u9fa5]{1,6}){0,2}$/; //验证姓名，包含少数民族
    const regid = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //验证身份证号码
    const regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; //验证手机号码
    let reg = {
      regnamevalue: regname.test(name),
      regidvalue: regid.test(idnumber),
      regtelvalue: regtel.test(telnum),
    }
    //表单数据验证------------------------------------end
    if (reg.regnamevalue === true && reg.regidvalue === true && reg.regtelvalue === true) {
      // -------------------------------------------发送实名认证请求，从模拟接口返回固定数据---------------------------------------------------------start
      wx.request({
        method: 'POST',
        url: 'https://www.fastmock.site/mock/5bf46b0699d4a6c72c387939c43bf9f6/wxdemo/wx/smrz', //fastmock模拟接口 ，返回的永远为errno :0 data :"success"
        data: {
          name: 'xxx',
          idnumber: "135133",

        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          console.log('发送实名认证成功')
          if (res.data.errno === 0 && res.data.data === "success") {
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 2000,
              mask: true // 显示透明蒙层，防止触摸穿透
            })
          } else {
            wx.showToast({
              title: '提交失败',
              icon: 'error',
              duration: 2000,
              mask: true // 显示透明蒙层，防止触摸穿透
            })
          }
        }
      })

    } else {
      //表单填写错误提示信息
      wx.showToast({
        title: '信息填写不正确',
        icon: 'error',
        duration: 2000,
        mask: true // 显示透明蒙层，防止触摸穿透
      })
    }
    // -------------------------------------------发送实名认证请求，从模拟接口返回固定数据---------------------------------------------------------end
  },
  //上传证件照片
  uploadIdImageL: function () {
    let that = this
    let idimageurllist = that.data.idimageurllist
    wx.chooseImage({
      count: 2, //限制上传数量为两张 ，身份证真正反面
      sizeType: 'original', //所选图片的尺寸 原图
      sourceType: ['album', 'camera'], //从相册选图或者拍照
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        let tempIamgeUrlList = res.tempFilePaths
        idimageurllist = tempIamgeUrlList
        that.setData({
          idimageurllist: idimageurllist
        })
      }
    })
  },
  //每次input输入获取设置data------------------------
  handleNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  handleIdNumberInput(e) {
    this.setData({
      idnumber: e.detail.value
    })
  },
  handleTelInput(e) {
    this.setData({
      telnum: e.detail.value
    })
  }
  //每次input输入获取设置data------------------------
})