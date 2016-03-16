(function(ext) {

  ext.latestUserTweet = function(name, callback) {
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

  ext.getTopTweet = function(sort, str, callback) {
    //If searching popluar, remove # and @ symbols from query
    if (sort == "popular") {
      str = str.replace('#','').replace('@','');
    }
    $.ajax({
      method: "GET",
      url: "http://www.ekidata.jp/api/l/11302.json",
      data: {
        q: encodeURIComponent(str),
        result_type: sort,
        count: 1
      },
      dataType: "json",
      success: function(data) {
        if (data.statuses.length > 0) {
          callback(data.statuses[0].text);
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
      ['R', 'a', 'b', 'スクラッチ'],
      ['R', 'c', 'd', 'e', 'f'],
    ],
    menus: {
      sort: ["人気", "最近"]
    },
    url: 'https://dev.twitter.com/overview/documentation'
  };

  ScratchExtensions.register('Twitter', descriptor, ext);

})({});
