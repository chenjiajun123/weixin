var common=require('../../assets/JS/common/common.js')
var douban=require('../../assets/JS/api/fetch.js')
var util=require('../../util/util.js')
// pages/filmDetail/filmDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading:true,
    filmDetail:{},
    showContent:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var id=options.id
    douban.fetchFilmsDetail.call(that,common.apiList.filmDetail,id,function(data){
      wx.getStorage({
        key: 'filmFavorite',
        success: function(res) {
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].id==data.id){
              that.setData({
                isFilmFavorite:true
              })
            }
          }
        },
      })
      var date = util.getDate()
      var time = util.getTime()
      var film_history = []
      console.log('----进入----')
      wx.getStorage({
        key: 'film_history',
        success: function (res) {
          film_history = res.data
          console.log('----获取缓存----')
          console.log(res.data)
          // 当前的数据
          var now_data = {
            time: time,
            data: data
          }
          // 今天的数据，没有时插入
          var sub_data = {
            date: date,
            films: []
          }
          sub_data.films.push(now_data)
          if (film_history.length == 0) { // 判断是否为空
            console.log('----为空插入----')
            film_history.push(sub_data)
          } else if ((film_history[0].date = date)) { //判断第一个是否为今天
            console.log('----今日插入----')
            console.log(film_history[0].films.length)
            for (var i = 0; i < film_history[0].films.length; i++) {
              // 如果存在则删除，添加最新的
              if (film_history[0].films[i].data.id == data.id) {
                film_history[0].films.splice(i, 1)
              }
            }
            film_history[0].films.push(now_data)
          } else { // 不为今天(昨天)插入今天的数据
            console.log('----昨日插入今日----')
            film_history.push(sub_data)
          }
          wx.setStorage({
            key: 'film_history',
            data: film_history,
            success: function (res) {
              console.log(res)
              console.log('----设置成功----')
            }
          })
          console.log(film_history)
        },
        fail: function (res) {
          console.log('----获取失败----')
          console.log(res)
        }
      })
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

  },
  viewFilmByTag: function (e) {
    var data = e.currentTarget.dataset
    var keyword = data.tag
    wx.navigateTo({
      url: '../searchResult/searchResult?url=' + encodeURIComponent(common.apiList.search.byTag) + '&keyword=' + keyword
    })
  },
  favoriteFilm: function () {
    var that = this
    // 判断原来是否收藏，是则删除，否则添加
    wx.getStorage({
      key: 'filmFavorite',
      success: function (res) {
        var filmFavorite = res.data
        if (that.data.isFilmFavorite) {
          // 删除
          for (var i = 0; i < filmFavorite.length; i++) {
            if (filmFavorite[i].id == that.data.filmDetail.id) {
              filmFavorite.splice(i, 1)
              that.setData({
                isFilmFavorite: false
              })
            }
          }
          wx.setStorage({
            key: 'filmFavorite',
            data: filmFavorite,
            success: function (res) {
              console.log(res)
              console.log('----设置成功----')
            }
          })
        } else {
          // 添加
          filmFavorite.push(that.data.filmDetail)
          wx.setStorage({
            key: 'filmFavorite',
            data: filmFavorite,
            success: function (res) {
              that.setData({
                isFilmFavorite: true
              })
            }
          })
        }
      }
    })
  },
   viewPersonDetail:function(e){
     var data=e.currentTarget.dataset
     wx.redirectTo({
       url: '../personDetail/personDetail?id='+data.id,
     })
   }
})