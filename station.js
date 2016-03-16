(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.do_domething = function(str) {
    $.ajax({
    url: 'http://www.ekidata.jp/api/p/20.json',
    type:'GET',
    dataType: 'script',
    timeout:1000,
    success: function(data, dataType) {
        alert("ok");
        console.log("ok", xml.data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("ng");
        console.log("ng", XMLHttpRequest, textStatus, errorThrown);
        }
    }); 
    };  

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', 'do_something %s', 'do_something', 'sample text'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('Simple extension', descriptor, ext);
})({});
