// pages/readexcel/readexcel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
 
  //选择文件
  chosefile:function(){
      let that=this
      wx.chooseMessageFile({
        count: 1,
        type:'file',
        success(res){
          let path=res.tempFiles[0].path
         // console.log("选择文件成功",path)   //调试时在控制台看输出
          that.uploadexcel(path)
        }
      })
  },
  //上传文件
  uploadexcel(path){
    let that=this
    wx.cloud.uploadFile({
      cloudPath:new Date().getTime()+'.xlsx',
      filePath:path,
      success:res=>{
       // console.log("上传文件成功",res.fileID)   //调试时在控制台看输出
        that.getdata(res.fileID)
      }
    })
  },
  //调用云函数实现文件的解析并上传
  getdata(fileID){
    wx.cloud.callFunction({
      name:'excel',
      data:{
        fileID:fileID
      },
      success(res){
        console.log("数据已获取",res)
      }
    })
  }
})