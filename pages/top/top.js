var douban=require("../././../assets/JS/api/fetch.js")
var common=require("../../assets/JS/common/common.js")
// pages/top/top.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films:[],
    hasMore:true,
    showLoading:true,
    start:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    douban.fetchFilms.call(that,common.apiList.top,that.data.start)
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
    var that=this 
    that.setData({
      films:[],
      start:0,
      hasMore:true,
      showLoading:true
    })
    douban.fetchFilms.call(that,common.apiList.top,that.data.start)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      var that=this
      if(!that.data.showLoading){
        douban.fetchFilms.call(that,common.apiList.top,that.data.start)
      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  viewFilmDetail:function(e){
    var data=e.currentTarget.dataset
    wx.navigateTo({
      url: '../filmDetail/filmDetail?id='+data.id,
    })
  },
  viewFilmByTag:function(e){
    var data=e.currentTarget.dataset
    var keyword=data.tag
    wx.navigateTo({
      url: '../searchResult/searchResult?url='+encodeURIComponent(common.apiList.search.byTag)+'&keyword='+keyword,
    })
  }
})