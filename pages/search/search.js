// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    novels:[]
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
  formSubmit: function(e){
    var value1 = e.detail.value.value;
    if (value1 == ''){
      return;
    }
    var that = this;
    console.log(value1)
    wx.request({
      url: 'http://127.0.0.1:8080/novels/novel/search',
      data: {
        keyWord:value1
      },
      header: {'content-type': 'application/x-www-form-urlencoded'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data);
        var value = JSON.parse(res.data.data);
        that.setData({
          novels:value
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(that.data.novels)
  },


})