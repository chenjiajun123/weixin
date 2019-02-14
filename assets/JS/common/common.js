var staticUrl = 'https://static.sesine.com/wechat-weapp-movie'
var apiUrl = 'https://sesine.com/mina/api'
module.exports = {
  city:'',
  baiduAK: 'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',  
  count: 20,
  apiList: {
    popular: apiUrl + '/movie/in_theaters',
    coming: apiUrl + '/movie/coming_soon',
    top: apiUrl + '/movie/top250',
    search: {
      byKeyword: apiUrl + '/movie/search?q=',
      byTag: apiUrl + '/movie/search?tag='
    },
    filmDetail: apiUrl + '/movie/subject/',
    personDetail: apiUrl + '/movie/celebrity/',
    baiduMap: 'https://api.map.baidu.com/geocoder/v2/'
  },
  skinList: [
    { title: '公路', imgUrl: staticUrl + '/images/user_bg_1.jpg' },
    { title: '黑夜森林', imgUrl: staticUrl + '/images/user_bg_2.jpg' },
    { title: '鱼与水', imgUrl: staticUrl + '/images/user_bg_3.jpg' },
    { title: '山之剪影', imgUrl: staticUrl + '/images/user_bg_4.jpg' },
    { title: '火山', imgUrl: staticUrl + '/images/user_bg_5.jpg' },
    { title: '科技', imgUrl: staticUrl + '/images/user_bg_6.jpg' },
    { title: '沙漠', imgUrl: staticUrl + '/images/user_bg_7.jpg' },
    { title: '叶子', imgUrl: staticUrl + '/images/user_bg_8.jpg' },
    { title: '早餐', imgUrl: staticUrl + '/images/user_bg_9.jpg' },
    { title: '英伦骑车', imgUrl: staticUrl + '/images/user_bg_10.jpg' },
    { title: '草原', imgUrl: staticUrl + '/images/user_bg_11.jpg' },
    { title: '城市', imgUrl: staticUrl + '/images/user_bg_12.jpg' }
  ],
  bannerList: [
    { type: 'film', id: '26683290', imgUrl: staticUrl + '/images/banner_1.jpg' },
    { type: 'film', id: '25793398', imgUrl: staticUrl + '/images/banner_2.jpg' },
    { type: 'film', id: '26630781', imgUrl: staticUrl + '/images/banner_3.jpg' },
    { type: 'film', id: '26415200', imgUrl: staticUrl + '/images/banner_4.jpg' },
    { type: 'film', id: '3025375', imgUrl: staticUrl + '/images/banner_5.jpg' }
  ],
  hotKeyword: ['功夫熊猫', '烈日灼心', '摆渡人', '长城', '我不是潘金莲', '这个杀手不太冷', '驴得水', '海贼王之黄金城', '西游伏妖片', '我在故宫修文物', '你的名字'],
  hotTag: ['动作', '喜剧', '爱情', '悬疑'],
}