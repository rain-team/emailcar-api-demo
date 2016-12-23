var http = require('http')
var qs = require('querystring');
var req = http.request({
    hostname: 'test.emailcar.net',
    port: 80,
    path: '/sms/send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
}, function (res) {
    console.log('STATUS: \n' + res.statusCode);
    console.log('HEADERS: \n' + JSON.stringify(res.headers));
    console.log('\n')
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
       console.log('BODY: \n' + chunk);
    })
})
req.on('error', function (e) {
    console.log(e.message)
})
var postData = {
    api_user: '__将此处替换为用户名__',
    api_pwd: '__将此处替换为密码__',
    // 通过 tpl_get 获取模板 id
    template_id: '11',
    // 多个手机号码以逗号分隔
    // 15800645469
    // 13611111111,13622222222
    mobiles: '15800645469'
}
req.write(qs.stringify(postData))
req.end()
// 调用成功返回示例
/*
{
    "msg": "发送成功",
    "status": "success",
    "data": {
        "id": "17",
        "total_time": "耗时0.37秒"
    }
}
*/
