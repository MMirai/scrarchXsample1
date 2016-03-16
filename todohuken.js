(function(ext) {

  ext.b = function(cd, name, callback) {
    $.ajax({
      method: "GET",
      url: " http://www.ekidata.jp/api/p/20.json",
      data: {
        line_cd: cd,
        line_name: name,
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
       ['R', '都道府県', 'b', 'c', 'd'],
    ],
  };

  ScratchExtensions.register('都道府県', descriptor, ext);

})({});
