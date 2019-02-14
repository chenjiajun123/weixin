var common =require('../../assets/JS/common/common.js') 
var  app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    login:true,
    userInfo:'',
    skin:'',
     gridList: [
      { enName: 'favorite', zhName: '收藏' },
      { enName: 'gallery', zhName: '相册' },
      { enName: 'setting', zhName: '设置' },
      {enName:'history',zhName:'浏览记录'}
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (cb) {
   
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
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        if (res.data===""){
            that.setData({
              skin:common.skinList[0].imgUrl
            })
          }      
          else{
            that.setData({
              skin: res.data
            })
          }
      },
    })
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        that.setData({
          userInfo:res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(this.data)
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
    this.onLoad(function(){
      wx.stopPullDownRefresh()
    })
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

  },
  viewSkin: function () {
    wx.navigateTo({
      url: "../skin/skin"
    })
  },
  viewGridDetail:function(e){
   var data=e.currentTarget.dataset
   wx.navigateTo({
     url: '../'+data.url+'/'+data.url,
   })
  },
  getCity: function(cb) {
    var that = this
    wx.getLocation({
   
      success: function (res) {
        var locationParam = res.latitude + ',' + res.longitude + '1'
        wx.request({
          url: config.apiList.baiduMap,
          data: {
            ak: config.baiduAK,
            location: locationParam,
            output: 'json', 
            pois: '1'
          },
          method: 'GET',
          success: function(res){
            console.log(res)
            config.city = res.data.result.addressComponent.city.slice(0,-1)
            typeof cb == "function" && cb(res.data.result.addressComponent.city.slice(0,-1))
          },
          fail: function(res) {
            // 重新定位
            that.getCity();
          }
        })
      }
    })
  },
  getUserInfo:function(){
    var that=this
    wx.login({
      success:function(){ 
        app.initStorage()
        wx.getUserInfo({
          success:function(res){
           that.setData({
             userInfo:res.userInfo, 
             login:false
           })
           wx.setStorage({
             key: 'userInfo',
             data: that.data.userInfo,
           })
          }
        })
      }
    })
  }
})