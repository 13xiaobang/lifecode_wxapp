var fileData = require('../../utils/num_data.js');
Page({
    data: {
        id:'',
        num_data:'',
    },
    onLoad: function (opt) {
        this.setData({
            id: opt.id,
            num_data : fileData.get_num_data(opt.id),
        });
    }
});