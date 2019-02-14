var common = require('../../assets/JS/common/common.js')
var douban = require('../../assets/JS/api/fetch.js')
var app = getApp()
// pages/top/top.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: common.bannerList,
    showLoading: true,
    hasMore: true,
    start: 0,
    films: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.showNavigationBarLoading()
    app.getCity(function() {
      wx.hideNavigationBarLoading()
      wx.setNavigationBarTitle({
        title: '正在热映 - ' + common.city
      })
    })
    douban.fetchFilms.call(that, common.apiList.popular, that.data.start)
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
    var that=this
    that.setData({
      films:[],
      hasMore:true,
      showLoading:true, 
      start:0
    })
    this.onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that=this
    if(!that.data.showLoading){
      douban.fetchFilms.call(that,common.apiList.popular,that.data.start)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  viewSearch:function(){
    wx.navigateTo({
      url: '../search/search',
    })
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
  },
  viewBannerDetail: function (e) {
    var data = e.currentTarget.dataset
    if (data.type == 'film') {
      wx.navigateTo({
        url: "../filmDetail/filmDetail?id=" + data.id
      })
    } else if (data.type == 'person') {
      wx.navigateTo({
        url: '../personDetail/personDetail?id=' + data.id
      })
    } else if (data.type == 'search') {
      // stype(searchType) 0:关键词, 1:类型标签
      var searchUrl = stype == 'keyword' ? config.search.byKeyword : config.search.byTag
      wx.navigateTo({
        url: '../searchResult/searchResult?url=' + encodeURIComponent(searchUrl) + '&keyword=' + keyword
      })
    }
  },
})