function getDate(){
  var time=new Date()
  var year=time.getFullYear()
  var month=time.getMonth()+1
  month=month<10?'0'+month:month
  var day=time.getDate()
  day=day<10?'0'+day:day
  return [year,month,day].join('-')
}
function getTime() {
  var time = new Date()
  var hours = time.getHours()
  hours = hours < 10 ? '0' + hours : hours
  var minute = time.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = time.getSeconds()
  second = second < 10 ? '0' + second : second
  return [hours, minute, second].join(':')
}
module.exports={
  getDate:getDate,
  getTime: getTime
}