module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = "";
  var request = require('request');  

  if (userName == 'malmi') {
    botPayload = {
      text : 'Malmi please leave us alone'
    };
    return res.status(200).json(botPayload);
  }

  if (userName == 'slackbot' || userName == 'chathuraratanyake' || userName == 'gavinalex' || userName == 'hiranya'){
    return res.status(200).end();
  }

  var date = new Date().getSeconds();
  if (date<10 || (date>20 && date<30) || (date>40 && date<50)) {
    var quote = "";
    request('http://www.iheartquotes.com/api/v1/random?format=json', function(err, response, body){
      var resJson = JSON.parse(body);
      quote = resJson.quote;
      botPayload = {
        text : quote
        //text : userName + ', please update your tickets with the time spent.\nGavin, no need to chase after these guys'
      };
      return res.status(200).json(botPayload);
    });
  } else {
    return res.status(200).end();
  }

}
