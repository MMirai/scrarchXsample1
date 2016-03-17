(function(ext) {

  ext.tokyo = function(callback) {
    $.ajax({
      method: "GET",
      url: "http://www.ekidata.jp/api/s/1130224.json",
      dataType: "json",
      success: function(data) {
        if (data.length > 0) {
          callback(data[0].text);
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

  ext._getStatus = function() {
    return { status:2, msg:'Ready' };
  };

  var descriptor = {
    blocks: [
      ['h', '東京駅詳細', 'tokyo'],
    ],
    url: 'http://www.ekidata.jp/api/s/1130224.json'
  };

  ScratchExtensions.register('tokyo', descriptor, ext);

})({});
