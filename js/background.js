function systemConsole() {
	var myDate = new Date();
    var hour = myDate.getHours();
    if( hour >= 19){
        return;
    }
    chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'img/icon.jpeg',
        title: '是时候去喝水了~',
        message: '可爱盯！傻瓜机器人提醒你哦，现在需要去喝水了，热水！优化后的我更加智能哦！'
    });
}

var t = setInterval(systemConsole,1000 * 60 * 90);

/**
 * 启动一个chrome.extension.onRequest事件监听器用来处理消息
 */
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.status == 'off'){
            clearInterval(t);
        }else if(request.status == 'on'){
            setInterval(systemConsole,1000* 60 * 90);
        }
    }
);
