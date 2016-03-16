(function(ext) {

  ext.b = function(cd, name, callback) {
    $.ajax({
      method: "GET",
      url: " http://www.ekidata.jp/api/p/20.json",
      dataType: "script",
      success: function(data, dataType) {
        alert("ok");
       console.log("ok", xml.data); 
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
    return { status:1, msg:'Ready' };
  };

  var descriptor = {
    blocks: [
       ['R', '駅', 'b', 'c', 'd'],
    ],
  };

  ScratchExtensions.register('駅', descriptor, ext);

})({});
