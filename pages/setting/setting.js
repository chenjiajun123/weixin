var app = getApp()
// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cells: [
      [{
        title: "个人资料",
        text: '',
        access: true,
        fn: 'viewPersonInfo'
      }],
      [{
          title: '手机信息',
          text: '',
          access: true,
          fn: 'viewSystemInfo'
        },
        {
          title: '清除缓存',
          text: '',
          access: false,
          fn: 'clearStorage'
        }
      ],
      [{
        title: '更新位置',
        text: '',
        access: true,
        fn: 'viewLocation'
      }],
      [{
        title:'注销用户',
        text:'',
        access:false,
        fn:'loginOut'
      }]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  viewSystemInfo:function(){
    wx.redirectTo({
      url: '../systemInfo/systemInfo',
    })
  },
  viewLocation:function(){
    wx.redirectTo({
      url: '../location/location',
    })
  },
  viewPersonInfo:function(){
    wx.redirectTo({
      url: '../personInfo/personInfo',
    })
  },
  clearStorage: function () {
    wx.showModal({
      title: '确认要清除',
      content: '清除缓存会删除浏览历史和收藏及个人资料',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorage()
          app.initStorage()
          wx.showToast({
            title: '清除成功',
            icon: 'success',
            duration: 1500
          })
        }
      }
    })
  },
  loginOut:function(){
    wx.showModal({
      title: '确定要注销用户吗',
      content: '注销用户会删除浏览历史和收藏及个人资料',
      success:function(res){
        if(res.confirm){
          wx.clearStorage()
          app.initStorage()
          wx.showToast({
            title: '注销成功',
            icon:'success',
            duration:1500
          })
        }
      }
    })
  }
})