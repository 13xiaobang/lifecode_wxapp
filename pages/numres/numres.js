var util = require('../../utils/util.js');
var fileData = require('../../utils/data.js');
var tianfu_fold=false;
Page({
    data: {
        name: '',
        sex: '',
        birthday: '',
        get_ming_data: '',
        xiantian_num:'',
        ming_num:'',
        tianfu_num0:'',
        tianfu_num1:'',
        shengri_num:'',
        xingzuo_num:'',
        kongque_num:'',
        ming_data:'',
        tianfu_data:'',
        shengri_data:'',
        xingzuo_data:'',
        load_pic:'',
    },
    onLoad: function (opt) {
        this.setData({
            birthday: opt.birthday,
            name: opt.name,
            sex: opt.sex,
            xiantian_num : util.get_xiantian_num(opt.birthday),
            ming_num:util.get_series_num(opt.birthday)[0],
            tianfu_num0:util.get_series_num(opt.birthday)[1],
            tianfu_num1:util.get_series_num(opt.birthday)[2],
            shengri_num:util.get_series_num(opt.birthday)[3],
            xingzuo_num:util.get_xingzuo_num(opt.birthday),
            kongque_num:util.get_kongque_num(opt.birthday),
            ming_data:util.get_series_num(opt.birthday)[0],
            shengri_data:util.get_series_num(opt.birthday)[3],
            xingzuo_data:util.get_xingzuo_num(opt.birthday),
            load_pic:"../res/images/num/"+util.get_series_num(opt.birthday)[0]+".jpg",
        });
    },
    extra_line:[],
    clk_ming:function(){
        if(this.data.ming_data == this.data.ming_num)
        {
            this.extra_line = this.data.ming_data +"  "+ fileData.get_ming_data(this.data.ming_num);
        }else{
            this.extra_line = this.data.ming_num
        }
        this.setData({
            ming_data: this.extra_line,
        })
    },
    clk_tianfu:function(){
        if(tianfu_fold == false)
        {
            tianfu_fold = true;
            this.extra_line = '\n';
            this.extra_line += fileData.get_tianfu_data(this.data.tianfu_num0)
            if(this.data.tianfu_num1!='0' && this.data.tianfu_num1!=this.data.tianfu_num0)
            {
                this.extra_line +="\n\n"
                this.extra_line += fileData.get_tianfu_data(this.data.tianfu_num1)
            }
        }else
        {
            tianfu_fold = false;
            this.extra_line = '';
        }
            
        this.setData({
            tianfu_data: this.extra_line,
        })
    },
    clk_shengri:function(){
        if(this.data.shengri_data == this.data.shengri_num)
        {
            this.extra_line = this.data.shengri_data +"  "+ fileData.get_shengri_data(this.data.shengri_num);
        }else{
            this.extra_line = this.data.shengri_num
        }
        this.setData({
            shengri_data: this.extra_line,
        })
    },
    clk_xingzuo:function(){
        if(this.data.xingzuo_data == this.data.xingzuo_num)
        {
            this.extra_line = this.data.xingzuo_data +"  \n\n"+ fileData.get_xingzuo_data(this.data.xingzuo_num);
        }else{
            this.extra_line = this.data.xingzuo_num
        }
        this.setData({
            xingzuo_data: this.extra_line,
        })
    },
})