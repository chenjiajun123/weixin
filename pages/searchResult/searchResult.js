var douban=require('../../assets/JS/api/fetch.js')
var common=require('../../assets/JS/common/common.js')
// pages/searchResult/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    films:[],
    hasMore:true,
    showLoading:true,
    start:0,
    url:'',
    keyword:'',
    isNull:false,
    nullTip:{
      tipText: 'sorry，没有找到您要的内容，换个关键词试试吧',
      actionText: '返回',
      routeUrl: '../../pages/search/search'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that=this
    that.setData({
      url:options.url,
      keyword:options.keyword,
      title:options.keyword
    })
    douban.search.call(that,that.data.url,that.data.keyword,that.data,common.count,function(data){
      if(data.subjects.length==0){
        that.setData({
          isNull:true
        })
      }
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
    var that = this
    that.setData({
      films: [],
      hasMore: true,
      showLoading: true,
      start: 0
    })
    douban.search.call(that, that.data.url, that.data.keyword, that.data.start, common.count)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    if (!that.data.showLoading) {
      douban.search.call(that, that.data.url, that.data.keyword, that.data.start, common.count)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  viewFilmDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: "../filmDetail/filmDetail?id=" + data.id
    })
  },
  viewFilmByTag: function (e) {
    var data = e.currentTarget.dataset
    var keyword = data.tag
    wx.navigateTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(common.apiList.search.byTag) + '&keyword=' + keyword
    })
  }
})