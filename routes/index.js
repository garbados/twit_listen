
/*
 * GET home page.
 */

exports.index = function(req, res){ 
  res.render('index', {
    title: "Twit Listen",
    description: "Public Tweet DB, from your friends at Cloudant",
    db_name: process.env.CLOUDANT_DB,
    db_url: "https://" + process.env.CLOUDANT_URL + "/" + process.env.CLOUDANT_DB
  }); 
};