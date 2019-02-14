//app.js
var common = require('/assets/JS/common/common') 
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    // 获取用户信息
      this.initStorage()
    //初始化缓存
    
  },
  
 
  initStorage:function(){
    wx.getStorageInfo({
      success: function(res) {
        var personInfo={
          name:'',
          nickName:'',
          gender:'',
          age:'',
          birthday:'',
          constellation:'',
          company:'',
          school:'',
          tel:'',
          email:'',
          intro:''
        }
        if(!('personInfo' in res.keys)){
          wx.setStorage({
            key: 'personInfo', 
            data: personInfo
          })
        }
        if(!('filmFavorite' in res.keys)){
          wx.setStorage({
            key: 'filmFavorite',
            data: [],
          })
        }
        if(!('personFavorite' in res.keys)){
          wx.setStorage({
            key: 'personFavorite',
            data: [],
          })
        }
        if(!('userInfo' in res.keys)){
          wx.setStorage({
            key: 'userInfo',
            data: '',
          })
        }
        if(!('skin' in res.keys)){
          wx.setStorage({
            key: 'skin',
            data: '',
          })
        }  
        if (!('gallery' in res.keys)) {
          wx.setStorage({
            key: 'gallery',
            data: []
          })
        }
        if (!('film_history' in res.keys)) {
          wx.setStorage({
            key: 'film_history',
            data: []
          })
        }
        // 判断人物浏览记录是否存在，没有则创建
        if (!('person_history' in res.keys)) {
          wx.setStorage({
            key: 'person_history',
            data: []
          })
        }
      },
    })
  },
  getCity: function (cb) {
    var that = this
    wx.getLocation({
      type:'wgs84',
      success: function (res) {
        var locationParam = res.latitude + ',' + res.longitude + '1'
        wx.request({
          url: common.apiList.baiduMap,
          data: {
            ak: common.baiduAK,
            location: locationParam,
            output: 'json',
            pois: '1'
          },
          method: 'GET',
          success: function (res) {
            console.log(res)
            common.city = res.data.result.addressComponent.city.slice(0, -1)
            typeof cb == "function" && cb(res.data.result.addressComponent.city.slice(0, -1))
          },
          fail: function (res) {
            // 重新定位
            that.getCity();
          }
        })
      }
    })
  },
})