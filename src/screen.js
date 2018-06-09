var casper = require('casper').create({
    pageSettings: {
        // 冒充浏览器
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53'
    },

    // 浏览器窗口大小
    viewportSize: {
        width: 320,
        height: 568
    }
});

casper.start("http://casperjs.org/");

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
    casper.captureSelector('casperjs.png', 'html');
});

casper.thenOpen('http://www.baidu.com/', function () {
    casper.captureSelector('baidu.png', 'html');
});

casper.run();
