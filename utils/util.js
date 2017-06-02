function array_remove_same(res) {
  var arr = new Array();    //定义一个临时数组  
  for (var i = 0; i < res.length; i++) {
    if (arr.indexOf(res[i]) == -1) {
      arr.push(res[i]);
    }
  }
  return arr;
}

function get_xiantian_num(birthday) {
  var date = new Array();
  date = birthday.split("-");
  var res = new Array();
  var count = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < date[i].length; j++) {
      if (date[i][j] != '0') {
        res[count] = date[i][j];
        count++;
      }
    }
  }
  //res = array_remove_same(res);
  //res.sort();
  return res;
}
function remove_zero(data)
{
  if(data[0]=='0')
  {
    return data[1];
  }
  return data;
}
function get_ind_num(data) {
  var res = 0;
  while (data.length > 1) {
    for (var i = 0; i < data.length; i++) {
      res += parseInt(data[i]);
    }
    data = res.toString();
    res = 0;
  }
  return data;
}
function get_tianfu_num(data) {
  var res = 0;
  for (var i = 0; i < data.length; i++) {
    res += parseInt(data[i]);
  }
  return res.toString();
}
function get_series_num(birthday) {
  var res = 0;
  var data = new Array();
  data = birthday.split("-");
  var out = new Array(); // 命数，天赋数1，天赋数2，生日数
  var tianfu = get_tianfu_num(data[0] + data[1] + data[2]);
  if (tianfu.length == 1) {
    out[1] = tianfu[0];
    out[2] = '0';
  } else {
    out[1] = tianfu[0];
    out[2] = tianfu[1];
  }
  out[3] = get_ind_num(data[2]);
  out[0] = get_ind_num(data[0] + data[1] + data[2]);
  return out;
}
function get_xingzuo_num(birthday) {
  var data = new Array();
  data = birthday.split("-");
  var month = parseInt(data[1]);
  var day = parseInt(data[2]);
  //var s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
  var s = "10111201020304050607080910"
  var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return remove_zero(s.substr(month * 2 - (day < arr[month - 1] ? 2 : 0), 2));
}
function check_list_contain(list, data) {
  var i;
  for (i in list) {
    if (list[i] == data) return true;
  }
  return false;
}
function get_kongque_num(birthday) {
  var xingzuo_num = get_xingzuo_num(birthday);
  var series_num = get_series_num(birthday);
  var xiantian_num = get_xiantian_num(birthday);
  var data = new Array();
  for (var i = 1; i < 10; i++) {
    if (i == xingzuo_num)
      continue;
    if (check_list_contain(series_num, i))
      continue;
    if (check_list_contain(xiantian_num, i))
      continue;
    data.push(i);
  }
  return data;
}
module.exports = {
  get_xiantian_num: get_xiantian_num,
  get_series_num: get_series_num,
  get_xingzuo_num: get_xingzuo_num,
  get_kongque_num: get_kongque_num,
}
