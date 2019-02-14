// pages/personInfo/personInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cells:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'personInfo',
      success: function(res) {
        var data = res.data
        var cells = [[], [], []]
        cells[0].push({ title: '姓名', text: data.name == '' ? '未填写' : data.name, access: false, fn: '' })
        cells[0].push({ title: '昵称', text: data.nickName == '' ? '未填写' : data.nickName, access: false, fn: '' })
        cells[0].push({ title: '性别', text: data.gender == '' ? '未填写' : data.gender, access: false, fn: '' })
        cells[0].push({ title: '年龄', text: data.age == '' ? '未填写' : data.age, access: false, fn: '' })
        cells[0].push({ title: '生日', text: data.birthday == '' ? '未填写' : data.birthday, access: false, fn: '' })
        cells[0].push({ title: '星座', text: data.constellation == '' ? '未填写' : data.constellation, access: false, fn: '' })
        cells[1].push({ title: '公司', text: data.company == '' ? '未填写' : data.company, access: false, fn: '' })
        cells[1].push({ title: '学校', text: data.school == '' ? '未填写' : data.school, access: false, fn: '' })
        cells[1].push({ title: '手机号码', text: data.tel == '' ? '未填写' : data.tel, access: false, fn: '' })
        cells[1].push({ title: '邮箱', text: data.email == '' ? '未填写' : data.email, access: false, fn: '' })
        cells[2].push({ title: '个性签名', text: data.intro == '' ? '未填写' : data.intro, access: false, fn: '' })
        that.setData({
          cells: cells
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})