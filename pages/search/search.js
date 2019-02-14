var common=require('../../assets/JS/common/common.js')
var message=require('../../components/message/message.js')
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchType: 'keyword',
    hotKeyword:common.hotKeyword,
    hotTag:common.hotTag
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  changeSearchType:function(){
    var types=['默认','类型']
    var searchType=['keyword','tag']
    var that=this
    wx.showActionSheet({
      itemList: types,
      success:function(res){
        console.log(res)
        if(res!=undefined){
          that.setData({
            searchType:searchType[res.tapIndex]
          })
        }
      }
    })
  },
  search:function(e){
    var that=this
    var keyword=e.detail.value.keyword
    if(keyword==''){
        message.show.call(that,{
          content:'请输入内容',
          icon:'null',
          duration:1500
        })
        return false
    }else{
      var searchUrl=that.data.searchType=='keyword'?common.apiList.search.byKeyword:common.apiList.search.byTag
      wx.redirectTo({
        url: '../searchResult/searchResult?url='+encodeURIComponent(searchUrl)+'&keyword='+keyword,
      })
    }
  },
  searchByKeyword:function(e){
    var that=this
    var keyword=e.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(common.apiList.search.byKeyword) + '&keyword=' + keyword
    })
  },
  searchByTag: function (e) {
    var that = this
    var keyword = e.currentTarget.dataset.keyword
    wx.redirectTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(common.apiList.search.byTag) + '&keyword=' + keyword
    })
  }
})