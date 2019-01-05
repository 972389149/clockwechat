// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    group: [{
      name: '黑铁组',
      adminName: '陈于希1',
      class_: 'groupItem_',
      id: '1'
    }, {
        name: '青铜组',
        adminName: '陈于希2',
        class_: 'groupItem',
        id: '2'
      }, {
        name: '黄金',
        adminName: '陈于希3',
        class_: 'groupItem',
        id: '3'
      }, {
        name: '铂金组',
        adminName: '陈于希4',
        class_: 'groupItem',
        id: '4'
      }, {
        name: '王者组',
        adminName: '陈于希5',
        class_: 'groupItem',
        id: '5'
      }]
  },
  chooseGroup: function(event){
    // console.log(event.currentTarget.dataset.id);
    for(var i=0;i<this.data.group.length; i++){
      var group = 'group[' + i + '].class_';
      if (this.data.group[i].id == event.currentTarget.dataset.id){
        this.setData({
          [group]: 'groupItem_'
        });
      }else{
        this.setData({
          [group]: 'groupItem'
        });
      }
    }
  },
  quit: function(){
    wx.showModal({
      title: "注意",
      content: '您确定退出该部门考勤？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '退出成功',
            icon: 'success'
          })
        } else {
          wx.showToast({
            title: '取消退出',
            icon: 'none'
          })
        }
      }
    })
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
    wx.stopPullDownRefresh()
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