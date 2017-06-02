//index.js 
//获取应用实例 
var app = getApp()
Page({
    data: {
        name: '',
        sexs: [
            { name: '男', value: '男', checked: 'true' },
            { name: '女', value: '女' },
        ],
        birthday: '',
        sex_checked: '男'
    },
    radioChange: function (e) {
    },
    onLoad: function () {

    },
    // 点击日期组件确定事件 
    birthdayChange: function (e) {
        this.setData({
            birthday: e.detail.value
        })
    },

    nameChange: function (e) {
        this.setData({
            name: e.detail.value
        })
    },

    sexChange: function (e) {
        this.setData({
            sex_checked: e.detail.value
        })
    },

    goto_result: function (e) {
        var modify_url = '../numres/numres?name=' + this.data.name + "&sex=" + this.data.sex_checked + "&birthday=" + this.data.birthday;
        if (this.data.name == '') {
            wx.showToast({
                title: '姓名不能为空哟',
                image: '../res/icon/error.png',
                duration: 1500
            })
        } else if (this.data.birthday == '') {
            wx.showToast({
                title: '生日不能为空哟',
                image: '../res/icon/error.png',
                duration: 1500
            })
        }
        else
            wx.navigateTo({
                url: modify_url,
                success: function (res) {
                    // success
                },
                fail: function (res) {
                    // fail
                },
                complete: function (res) {
                    // complete
                }
            })
    }
}) 