/**
 * presentation controller
 */

export default {
  async findAll(ctx) {
    const entry = await strapi.entityService.findMany('api::presentation.presentation', 
{ populate: { speakers: true } });
    ctx.body = entry;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const presentation = await strapi.entityService.findOne('api::presentation.presentation', id, 
{ populate: { speakers: true } });

    ctx.body = presentation;
  },
};