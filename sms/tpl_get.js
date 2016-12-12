var http = require('http')
var qs = require('querystring');
var req = http.request({
    hostname: 'test.emailcar.net',
    port: 80,
    path: '/sms/tpl_get',
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
    api_pwd: '__将此处替换为密码__'
}
req.write(qs.stringify(postData))
req.end()
// 调用成功返回示例
/*
{
    "msg": "获取成功",
    "status": "success",
    "data": {
        "lists": [
            {
                "id": 5,
                "title": "测试2",
                "amount": 1,
                "content": "测试短信【emailcar】",
                "status": "审核通过"
            },
            {
                "id": 11,
                "title": "测试3",
                "amount": 3,
                "content": "上海春雨信息科技有限公司成立于2008年，我们的团队成员都来自互联网及数字营销领域知名公司，具备深厚资历，并且拥有丰富的产品、研发及营销技术经验和专业知识，经营方向是数据营销应用产品的研发和运营。EmailCar系旗下完全自主研发产品，目前在上海、广州设有办公室。【春雨科技】",
                "status": "审核通过"
            },
            {
                "id": 13,
                "title": "模板标题",
                "amount": 1,
                "content": "模板内容【短信签名】",
                "status": "正在审核中"
            },
            {
                "id": 14,
                "title": "模板标题2",
                "amount": 3,
                "content": "离离原上草，一岁一枯荣。 野火烧不尽，春风吹又生。 远芳侵古道，晴翠接荒城。 又送王孙去，萋萋满别情。离离原上草，一岁一枯荣。 野火烧不尽，春风吹又生。 远芳侵古道，晴翠接荒城。 又送王孙去，萋萋满别情。离离原上草，一岁一枯荣。 野火烧不尽，春风吹又生。 远芳侵古道，晴翠接荒城。 又送王孙去，萋萋满别情。离离原上草，一岁一枯荣。【短信签名】",
                "status": "正在审核中"
            },
            {
                "id": 15,
                "title": "模板标题abc",
                "amount": 1,
                "content": "短信内容abc【短信签名abc】",
                "status": "正在审核中"
            }
        ],
        "total_time": "耗时0.012秒"
    }
}
*/
