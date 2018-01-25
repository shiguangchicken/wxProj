//index.js
//获取应用实例
const app = getApp()
var totalPrice=0;//购买水果总价
var baseurl = '../../template/fruitdes';//后面跳转水果详细介绍用
var i ;
Page({
  data: {
    
    fruit:
      [{
        "id": "0","name" : "苹果","imgUri": "../../images/apple.jpg",
      "price": [{
        "money": "8", "danwei": "一斤"},{"money": "12","danwei": "一斤半"},{"money": "22","danwei": "一盒"
      }],
      "purchasePrice": "123","sale": true, "show": true,"number": "999", "locationCode": "heu","mark": "产自American 圣地亚戈","label": "水果",
      },
      {
        "id": "1", "name": "草莓", "imgUri": "../../images/strobery.jpg",
        "price": [{
          "money": "18", "danwei": "一斤"
        }, { "money": "27", "danwei": "一斤半" }, {
          "money": "55", "danwei": "一盒"
        }],
        "purchasePrice": "123", "sale": false, "show": false, "number": "999", "locationCode": "heu", "mark": "产自American 圣地亚戈", "label": "水果",
      },
      {
        "id": "2", "name": "橙子", "imgUri": "../../images/orange.jpg",
        "price": [{
          "money": "9", "danwei": "一斤"
        }, { "money": "13", "danwei": "一斤半" }, {
          "money": "30", "danwei": "一盒"
        }],
        "purchasePrice": "123", "sale": true, "show": true, "number": "999", "locationCode": "heu", "mark": "产自American 圣地亚戈", "label": "水果",
      },
      ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数

  onLoad: function () {
    var that=this
     /* wx.request({
      url: 'https://www.myweb.fang/MyWeb/get_weixin.php',
      data: {
        code: "我是微信发来的消息。"
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var feeds = res.data;
       /* wx.setStorage({
          key: "blog_feeds",
          data: feeds
        })

        that.setData({
          motto: feeds
        })
      },
      fail: function (res) {
        that.setData({
          motto: '连接失败'
        })
      }
    })*/
  },
  fruit_addShoppingCar:function(e){
    var p1,p2,p3;//分别为一斤、一斤半、一盒的价格
    var n1,n2,n3;//分别为上面对应的数量
    var i=e.target.dataset.i;
    console.log(i);
    n1 = e.detail.value['purchaseNuber1'];
    n2 = e.detail.value['purchaseNuber2'];
    n3 = e.detail.value['purchaseNuber3'];
    p1=this.data.fruit[i].price[0].money;
    p2 = this.data.fruit[i].price[1].money;
    p3 = this.data.fruit[i].price[2].money;
    wx.showModal({
      title: '提示',
      content: '是否将该商品添加购物车?',
      success: function (res) {
        if (res.confirm) {
          totalPrice += p1 * n1 + p2 * n2 + p3 * n3;
          console.log(totalPrice);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  describFruit:function(e){
    var i = e.target.dataset.i;
    wx.navigateTo({
      url: baseurl+this.data.fruit[1].id,
      //header:{'Content-Type':'application/json'},
      success: function(res) {console.log('页面跳转成功')},
      fail: function (res) { console.log('页面跳转失败')},
      complete: function(res) {},
    })
  },
  checkouut:function(e){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      'success':function(e){
        console.log("调用支付成功")
      }
    })
  }
})
