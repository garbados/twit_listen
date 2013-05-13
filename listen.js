var Twit = require('twit')
  , nano = require('nano')("https://"
            + process.env.CLOUDANT_USERNAME
            + ":"
            + process.env.CLOUDANT_PASSWORD
            + "@"
            + process.env.CLOUDANT_URL
    )
  , db = nano.use(process.env.CLOUDANT_DB)
  ;

var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY
  , consumer_secret: process.env.TWITTER_CONSUMER_SECRET
  , access_token: process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = T.stream('statuses/sample');

stream.on('tweet', function(tweet){
  tweet._id = tweet.id_str;
  db.insert(tweet, tweet._id, function(err, body){
    if(err || (body && !body.ok)){
      console.log(err);
    }else{
      // console.log(body.id, body.ok);
    }
  });
});