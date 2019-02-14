var common = require("../common/common.js")
var message= require('../../../components/message/message.js')
function fetchFilms(url, start, count, cb, fail_cb) {
  var that = this
  if (that.data.hasMore) {
    wx.request({
      url: url,
      data: {
        city: common.city,
        start: start,
        count: common.count
      },
      method: "GET",
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res) {
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false
          })
        } else {
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false
          })
        }
        wx.stopPullDownRefresh()
      },
      fail:function(){
          that.setData({
            showLoading:false 
          })
          message.show.call(that,{
            content:'网络开小差了',
            icon:'offline',
            duration:3000
          })
          wx.stopPullDownRefresh()
      },
     
    })
  }
}
function search(url, keyword, start, count, cb) {
  var that = this
  message.hide.call(that)
  var url = decodeURIComponent(url)
  if (that.data.hasMore) {
    wx.request({
      url: url + keyword,
      data: {
        start: start,
        count: count
      },
      method: 'GET',
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function (res) {
        if (res.data.subjects.length === 0) {
          that.setData({
            hasMore: false,
            showLoading: false
          })
        } else {
          that.setData({
            films: that.data.films.concat(res.data.subjects),
            start: that.data.start + res.data.subjects.length,
            showLoading: false
          })
          wx.setNavigationBarTitle({
            title: keyword
          })
        }
        wx.stopPullDownRefresh()
        typeof cb == 'function' && cb(res.data)
      },
      fail: function () {
        that.setData({
          showLoading: false
        })
        message.show.call(that, {
          content: '网络开小差了',
          icon: 'offline',
          duration: 3000
        })
      }
    })
  }
}
function fetchFilmsDetail(url,id,cb){
  var that=this
  message.hide.call(that)
  wx.request({
    url: url+id,
    method:'GET',
    header:{
      "Content-Type":"application/json,application/json"
    },
    success:function(res){
      that.setData({
        filmDetail:res.data,
        showLoading:false,
        showContent:true,
      })
      wx.setNavigationBarTitle({
        title: res.data.title,
      })
      wx.stopPullDownRefresh()
      typeof cb=='function'&&cb(res.data)
    },
    fail:function(){
      that.setData({
        showLoading:false
      })
      message.show.call(that,{
        content:'网络开小差了',
        icon:'offline',
        duration:3000
      })
    }
  })
}
function fetchPersonDetail(url, id, cb) {
  var that = this;
  message.hide.call(that)
  wx.request({
    url: url + id,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      that.setData({
        personDetail: res.data,
        showLoading: false,
        showContent: true
      })
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      wx.stopPullDownRefresh()
      typeof cb == 'function' && cb(res.data)
    },
    fail: function () {
      that.setData({
        showLoading: false
      })
      message.show.call(that, {
        content: '网络开小差了',
        icon: 'offline',
        duration: 3000
      })
    }
  })
}
module.exports = {
  fetchFilms: fetchFilms,
  search:search,
  fetchFilmsDetail:fetchFilmsDetail,
  fetchPersonDetail: fetchPersonDetail
}