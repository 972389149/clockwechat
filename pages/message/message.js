// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailGroup: '黑铁组',
    detailAdmin: '陈于希',
    detailUser: '陈1希',
    detailTime: '2018-10-13T07:40:53.965Z',
    detailContent: '陈于希邀请您加入黑铁组考勤',
    message: [{
      "_id": "5bc1a185d0e7a025849a69c0",
      "initiativeMsgId": "5bc1a185d0e7a025849a69bf",
      "administratorId": "5bb1c590b73803170cfa9659",
      "administratorName": "陈于希",
      "userId": "5bb1c91fb73803170cfa965f",
      "userName": "陈1希",
      "userPhone": "11",
      "departmentId": "5bb9bb52a6b55818981ba707",
      "departmentName": "黑铁组",
      "date": "2018-10-13T07:40:53.965Z",
      "type": -1,
      "class_": "messageItem_"
    }, {
      "_id": "5bc1a185d0e7a025849a69c1",
      "initiativeMsgId": "5bc1a185d0e7a025849a69bf",
      "administratorId": "5bb1c590b73803170cfa9659",
      "administratorName": "陈于希",
      "userId": "5bb1c91fb73803170cfa965f",
      "userName": "陈1希",
      "userPhone": "11",
      "departmentId": "5bb9bb52a6b55818981ba707",
      "departmentName": "青铜组",
      "date": "2018-10-14T17:40:53.965Z",
      "type": 0,
      "class_": "messageItem"
      }, {
      "_id": "5bc1a185d0e7a025849a69c2",
      "initiativeMsgId": "5bc1a185d0e7a025849a69bf",
      "administratorId": "5bb1c590b73803170cfa9659",
      "administratorName": "陈于希",
      "userId": "5bb1c91fb73803170cfa965f",
      "userName": "陈1希",
      "userPhone": "11",
      "departmentId": "5bb9bb52a6b55818981ba707",
      "departmentName": "白银组",
      "date": "2018-10-15T06:40:53.541Z",
      "type": 1,
      "class_": "messageItem"
      }, {
      "_id": "5bc1a185d0e7a025849a69c3",
      "initiativeMsgId": "5bc1a185d0e7a025849a69bf",
      "administratorId": "5bb1c590b73803170cfa9659",
      "administratorName": "陈于希",
      "userId": "5bb1c91fb73803170cfa965f",
      "userName": "陈1希",
      "userPhone": "11",
      "departmentId": "5bb9bb52a6b55818981ba707",
      "departmentName": "黄金组",
      "date": "2018-10-19T07:50:51.458Z",
      "type": 2,
      "class_": "messageItem"
      }, {
      "_id": "5bc1a185d0e7a025849a69c4",
      "initiativeMsgId": "5bc1a185d0e7a025849a69bf",
      "administratorId": "5bb1c590b73803170cfa9659",
      "administratorName": "陈于希",
      "userId": "5bb1c91fb73803170cfa965f",
      "userName": "陈1希",
      "userPhone": "11",
      "departmentId": "5bb9bb52a6b55818981ba707",
      "departmentName": "王者组",
      "date": "2018-10-13T07:40:53.965Z",
      "type": 3,
      "class_": "messageItem"
    }]
  },
  chooseMessage: function (event) {
    // console.log(event.currentTarget.dataset._id);
    for (var i = 0; i < this.data.message.length; i++) {
      var message = 'message[' + i + '].class_';
      if (this.data.message[i]._id == event.currentTarget.dataset._id) {
        switch (this.data.message[i].type){
          case -1:
            var content = this.data.message[i].administratorName + '邀请您加入' + this.data.message[i].departmentName + '考勤';
            break;
          case 0:
            var content = '您成功加入' + this.data.message[i].departmentName + '的考勤';
            break;
          case 1:
            var content = '您拒绝加入' + this.data.message[i].departmentName + '的考勤';
            break;
          case 2:
            var content = '您成功退出' + this.data.message[i].departmentName + '的考勤';
            break;
          case 3:
            var content = '您被管理员' + this.data.message[i].administratorName + '移出了' + this.data.message[i].departmentName + '的考勤';
            break;
        }
        this.setData({
          [message]: 'messageItem_',
          'detailGroup': this.data.message[i].departmentName,
          'detailAdmin': this.data.message[i].administratorName,
          'detailUser': this.data.message[i].userName,
          'detailTime': this.data.message[i].date,
          'detailContent': content

        });
      } else {
        this.setData({
          [message]: 'messageItem'
        });
      }
    }
  },
  accept_btn: function(event){
    wx.showModal({
      title: "注意",
      content: '您确定同意加入？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '加入成功',
            icon: 'success'
          })
        } else {
          wx.showToast({
            title: '取消加入',
            icon: 'none'
          })
        }
      }
    })
  },
  refuse_btn: function(event){
    wx.showModal({
      title: "注意",
      content: '您确定拒绝加入？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '拒绝成功',
            icon: 'success'
          })
        } else {
          wx.showToast({
            title: '取消拒绝',
            icon: 'none'
          })
        }
      }
    })
    // console.log(event.currentTarget.dataset._id)
  },
  delete_btn: function(event){
    wx.showModal({
      title: "注意",
      content: '确定删除此消息？',
      success: function(res){
        if(res.confirm){
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          })
        }else{
          wx.showToast({
            title: '取消删除',
            icon: 'none'
          })
        }
      }
    })
    // console.log(event.currentTarget.dataset._id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.yuxichan.cn:3000/passivityMsg/getMsg',
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'charset': 'UTF - 8'
      },
      success: function (res) {
        
      },
      fail: function (err) {
        
      }
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
  
  }
})