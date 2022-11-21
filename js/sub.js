function abc() {
    // 设置在此处单击#button时要发生的事件
    var arr=['name','number','sex','xq','collage',
        'zhuanye','class','mobie','time11','time22',
        'time33','time44','mdd','lxjtgj','fxjtgj',
        'yjcry','reason','banzhuren','mess']
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
        document.getElementById(arr[i]).innerHTML=document.getElementById(arr[i]+"sub").value
    }
    document.getElementById("shengqingren").innerHTML = document.getElementById("namesub").value;
    document.getElementById('biaodan').style = " display: none;"
    document.getElementById('zzz').style = " display: none;"
    document.getElementById('zz').style = " display: block;"
    document.getElementById('box').style = " display: flex;"
    document.getElementById('box2').style = " display: flex;"
    document.getElementById('box3').style = " display: block;"
    document.getElementById('box4').style = " display: flex;"
    console.log('运行成功');
    return false;
};