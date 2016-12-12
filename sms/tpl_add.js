var http = require('http')
var qs = require('querystring');
var req = http.request({
    hostname: 'test.emailcar.net',
    port: 80,
    path: '/sms/tpl_add',
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
    content: '短信内容abc',
    sign: '短信签名abc',
    title: '模板标题abc'
}
req.write(qs.stringify(postData))
req.end()
// 调用成功返回示例
/*
{
    "msg": "模板保存成功，正在审核中",
    "status": "success",
    "data": {
        "id": "15",
        "total_time": "耗时0.024秒"
    }
}
*/
