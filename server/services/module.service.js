const knex = require("../database").knex;

async function getAll(langID) {
  let result = await knex("module")
    .join("content_module", "content_module.module_id", "=", "module.id")
    .join(
      "i18n_content_module",
      "i18n_content_module.content_module_id",
      "=",
      "content_module.id"
    )
    .select(
      "module.id as id",
      "content_module.display_order as order",
      "content_module.media_path",
      "i18n_content_module.label"
    )
    .where("i18n_content_module.language_id", langID);

  return result;
}

module.exports = {
  getAll,
};
