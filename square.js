new (function() {
    var ext = this;
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.a = function(base) {
        return Math.pow(base,2);
    //var n = Number(str);
    //var z = Math.pow(n,2);
    //console.log(z);
    //window.setTimeout(function() {
    //        callback();
    //    }, wait*1000);
    //return Math.pow(n,2);
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            ['r', '%n' , 'a', '1'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('Simple extension', descriptor, ext);
})({});
