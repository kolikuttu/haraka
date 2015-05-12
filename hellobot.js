module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = "";
 
  // avoid infinite loop
  if (userName == 'malmi') {
    botPayload = {
      text : 'Malmi please stop lying'
    };
    return res.status(200).json();
  }
/* else if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    botPayload = {
      text : 'Hello, ' + userName + '!'
    };
    return res.status(200).end();
  }*/
}
