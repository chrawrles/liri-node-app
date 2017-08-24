var keys = require('./keys.js');

var Twitter = require('twitter');
 
var client = new Twitter(keys.twitterKeys);

var spotify = require('spotify');

var params = {screen_name: 'Liri Bot Hey'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    for (var i = 0; i < tweets.length; i++) {
    	console.log(tweets[i].created_at);
    	console.log(' ');
    	console.log(tweets[i].text);
    }
  }
});

var pick = function(caseData, functionData)	{
	switch(caseData) {
	case 'my-tweets' :
		getMyTweets();
		break;
	default:
		console.log('I do not know that');
	}
}

 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
});

var runThis = function(argOne, argTwo)	{
	pick(argOne, argTwo);
}

runThis(process.argv[2], process.argv[3]);