var util=require('../../util/util.js')
// pages/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    nickName:'',
    gender:0,
    genderArray:['男','女'],
    genderIndex:0,
    age:0,
    birthday:'',
    constellation:'',
    constellationArray:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    constellationIndex:0,
    company:'',
    school:'',
    tel:'',
    email:'',
    intro:'',
    birthdayEndDate:''
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
    var birthdayEndDate=util.getDate()
    var that=this
    wx.getStorage({
      key: 'personInfo',
      success: function(res) {
        var data=res.data
        that.setData({
          name:data.name,
          nickName:data.nickName,
          gender:data.gender,
          age:data.age,
          birthdayEndDate:birthdayEndDate
        })
      },
    })
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
  changeGender:function(e){
    var genderIndex=e.detail.value
    if(genderIndex!='null'){
     this.setData({
       genderIndex:genderIndex,
       gender:this.data.genderArray[this.data.genderIndex]
     })
    }
  },
  changeBirthday:function(e){
    var birthday=e.detail.value
    if(birthday!='null'){
      this.setData({
        birthday:birthday
      })
    }
  },
  changeConstellation:function(e){
    var constellationIndex=e.detail.value
    if(constellationIndex!='null'){
      this.setData({
        constellationIndex:constellationIndex,
        constellation:this.data.constellationArray[this.data.constellationIndex]
      })
    }
  },
  savePersonInfo:function(e){
    var data=e.detail.value
    wx.setStorage({
      key: 'personInfo',
      data: {
        name: data.name,
        nickName: data.nickName,
        gender: data.gender,
        age: data.age,
        birthday: data.birthday,
        constellation: data.constellation,
        company: data.company,
        school: data.school,
        tel: data.tel,
        email: data.email,
        intro: data.intro
      },
      success:function(res){
        wx.showToast({
          title: '资料修改成功',
          icon:'success',
          duration:2000
        })
        setTimeout(function(){
            wx.navigateTo({
              url: '../personInfo/personInfo',
            })
        },2000)
      }
    })
  }
})