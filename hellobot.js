module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = "";

  if (userName == 'malmi') {
    botPayload = {
      text : 'Malmi please leave us alone'
    };
    return res.status(200).json(botPayload);
  }

  if (userName == 'chathuraratanyake' || userName == 'gavinalex' || userName == 'hiranya'){
    return res.status(200).end();
  }

  var date = new Date().getSeconds();
  if (date<10 || (date>20 && date<30) || (date>40 && date<50)) {
    botPayload = {
      text : userName + ', please update your tickets with the time spent.\nGavin, no need to chase after these guys'
    };
    return res.status(200).json(botPayload);
  }

  return res.status(200).end();

}
