(function(ext) {

  ext.b = function(name, callback) {
    $.ajax({
      method: "GET",
      url: "http://www.ekidata.jp/api/l/11302.json",
      data: {
        screen_name: name,
        count: 1
      },
      dataType: "json",
      success: function(data) {
        if (data.length > 0) {
          callback(data[0].text);
          return;
        }
        callback("No tweets found");
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
      ['R', 'a', 'b', 'c'],
    ],
  };

  ScratchExtensions.register('yamanote', descriptor, ext);

})({});
