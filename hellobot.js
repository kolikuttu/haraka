module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = "";
  
  if (userName == 'malmi') {
    botPayload = {
      text : 'Malmi please stop lying'
    };
  } else {
    botPayload = {
      text : userName + ', please update your tickets with time spent.\nGavin, let the devs handle it ok?'
    };
  }
  return res.status(200).json(botPayload);
/* else if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    botPayload = {
      text : 'Hello, ' + userName + '!'
    };
    return res.status(200).end();
  }*/
}
