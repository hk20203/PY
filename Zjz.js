/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
zzz
脚本名称:zzz
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/apis.icaiji.com.cn\/v6\/photo\/album.+$ url script-response-body icaiji.js
[mitm] 
hostname = *.icaiji.*
*******************************
Surge

[Script]
^http[s]?:\/\/apis.icaiji.com.cn\/v6\/photo\/album.+$ requires-body=1,max-size=0,script-path=icaiji.js

[MITM]
hostname = *.icaiji.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.{
  errcode=  1
  }
};
    $done({body: JSON.stringify(obj)});
