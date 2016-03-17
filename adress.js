(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.adress = function(str, callback) {
         $.ajax({
            method:"GET",  
            url:"http://zipcloud.ibsnet.co.jp/api/search",
            data:{
                zipcode: encodeURIComponent(str),
                count: 1
            },
            
        success: function(data) {
            if (data.statuses.length > 0){
            callback(data.results[0]);
             return;
            } 
            callback("No found");
         },
        error: function(xhr, textStatus, error) {
            console.log(error);
            callback();
        }
        });
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            ['R', '住所は %s', 'adress', '郵便番号'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('adress', descriptor, ext);
})({});
