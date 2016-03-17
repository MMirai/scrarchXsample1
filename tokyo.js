(function(ext) {

  ext.tokyo = function() {
    $.ajax({
      method: "GET",
      url: "http://www.ekidata.jp/api/s/1130224.json",
      dataType: "json",
      data:{name: 'pref_cd'},
      success: function(data) {
          var dataArray = data.station;
          return dataArray[0].pref_cd;
        }
      },
    );
  };

  ext._getStatus = function() {
    return { status:2, msg:'Ready' };
  };

  var descriptor = {
    blocks: [
      ['R', '東京駅詳細', 'tokyo'],
      [' ', '東京駅', 'tokyo'],
      ['w', '東京', 'tokyo'],
    ],
    url: 'http://www.ekidata.jp/api/s/1130224.json'
  };

  ScratchExtensions.register('tokyo', descriptor, ext);

})({});
