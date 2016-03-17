(function(ext) {

  ext.latestUserTweet = function(callback) {
  $.ajax({
      type: "GET",
      url: "https://github.com/MMirai/scrarchXsample1/blob/gh-pages/sampledata1.json",
      dataType:"json",
      success: function (data) {
    	  for (var i = 0 - 1; i < data.length; i++;) {
    		  $('li').append(data[i].name + ' - ' + data[i].age);
    	  };
      },
      error: function (jqXHR, textStatus, errorThrown) {
  
      	// 通信エラー時のダイアログ表示
		  console.log(jqXHR + '-' + textStatus + '-' + errorThrown);
	  }
  });
  
   ext._getStatus = function() {
    return { status:2, msg:'Ready' };
  };
  
  var descriptor = {
    blocks: [
      ['R', '最新ツイート', 'latestUserTweet'],
    ],
    url: 'https://dev.twitter.com/overview/documentation'
  };

  ScratchExtensions.register('Twitter', descriptor, ext);

})({});
