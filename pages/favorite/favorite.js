var filmNullTip={
  tipText:'亲，找不到电影的收藏',
  actionText:'去逛逛',
  routeUrl:'../popular/popular'
}
var personNullTip={
  tipText:'亲，找不到人物的收藏',
  actionText:'去逛逛',
  routeUrl:'../popular/popular'
}
// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:'film_favorite',
    film_favorite:[],
    person_favorite:[],
    nullTip:filmNullTip
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      wx.getStorage({       
        key: 'filmFavorite',
        success: function(res) {
          that.setData({
            film_favorite:res.data
          })
        },
      })
      wx.getStorage({
        key: 'personFavorite',
        success: function(res) {
          that.setData({
            person_favorite:res.data
          })
        },
      })
      wx.stopPullDownRefresh()
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
  changeViewType:function(e){
    var data=e.currentTarget.dataset
    this.setData({
      show:data.type,
      nullTip:data.type=='film_favorite'?filmNullTip:personNullTip
    })
  }
})