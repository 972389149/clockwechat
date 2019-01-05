// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {},
    weatherData: ''
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'PgN1OAlfeebmPp5xIXmz6hDleNxXSUpQ'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success1 = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    var success2 = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市: ' + weatherData.currentCity + ' ' + 'PM2.5: ' + weatherData.pm25 + '  ' + '日期: ' + weatherData.date + '  ' + '温度: ' + weatherData.temperature + ' ' + '天气: ' + weatherData.weatherDesc + '  ' + '风力: ' + weatherData.wind + ' ';
      that.setData({
        weatherData: weatherData
      });
    } 
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success1,
      iconPath: '../../img/marker_red.png',
      iconTapPath: '../../img/marker_red.png'
    });
    BMap.weather({
      fail: fail,
      success: success2
    }); 
  },
  showSearchInfo: function (data, i) {
    var that = this;
    // wx.getLocation({
    //   type: '0',
    //   altitude: true,
    //   success: function (res) {
    //     that.setData({
    //       rgcData: {
    //         address: data[i].address+'  ['+[res.latitude, res.longitude]+']'
    //       }
    //     });
    //   },
    //   fail: function (res) {

    //   },
    //   complete: function (res) {

    //   },
    // })
    that.setData({
      rgcData: {
        address: data[i].address + '\n',
        desc: '描述：' + data[i].desc + '\n',
        business: '商圈：' + data[i].business
      }
    });
  },
  reflash: function(){
    if (getCurrentPages().length != 0) {
      //刷新当前页面的数据
      getCurrentPages()[getCurrentPages().length - 1].onLoad()
    }
  },
  clock: function(){

  }

})