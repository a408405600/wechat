Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      'images/pic_banner.png',
      'images/pic_banner.png',
      'images/pic_banner.png',
      'images/pic_banner.png'
    ], array: [
      {
        id: 2020202,
        img: 'images/Web.jpg',
        h2: '网页Html',
        h3: 'Web开发宝典'
      }, {
        id: 2020202,
        img: 'images/Html5.jpg',
        h2: '网页Html',
        h3: 'Web开发宝典'
      }, {
        id: 2020202,
        img: 'images/Html5.jpg',
        h2: '网页Html',
        h3: 'Web开发宝典'
      }
    ],
    tabbar:[{
      key: 'homepage',
      img:'../../pages/index/images/bar_icon_homepage_normal.png',
      current_img:'../../pages/index/images/bar_icon_homepage_click.png',
      title:'首页'
    }, {
        key: 'homepage2',
        img: '../../pages/index/images/bar_icon_homepage_normal.png',
        current_img: '../../pages/index/images/bar_icon_homepage_click.png',
        title: '首页'
      }, {
        key: 'homepage3',
        img: '../../pages/index/images/bar_icon_homepage_normal.png',
        current_img: '../../pages/index/images/bar_icon_homepage_click.png',
        title: '首页'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    flag: 0,
    circular: true,
    current: 'homepage'
  },
  swiperChange: function (e) {
    console.log(e.detail.current);
    this.setData({
      flag: e.detail.current
    })

  },


  gotoSwiper: function (e) {
    console.log(e);
    var id = e.target.id;
    console.log(id);
    this.setData({
      flag: id
    })

  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
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
    this.setData({
      autoplay:true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      autoplay: false
    })
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