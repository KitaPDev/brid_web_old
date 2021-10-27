const moduleService = require("../services/module.service");
const httpStatusCodes = require("http-status-codes").StatusCodes;

async function getAll(req, res) {
  try {
    let langID = req.params.lang_id;

    let result = await moduleService.getAll(langID);

    return res.status(httpStatusCodes.OK).send(result);
  } catch (err) {
    console.log(err);
    return res.sendStatus(httpStatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = { getAll };
