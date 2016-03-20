
(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.do_domething = function(int) {
    int b = a*a;
    return b;
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', 'do_something %s', ' ', 'a'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('Simple extension', descriptor, ext);
})({});
