var obj = JSON.parse($response.body);

obj = {
   "errcode": 0,
   "errmsg": "OK",
   "data": {
     "allow_album": 1
 }
}
$done({body: JSON.stringify(obj)});
