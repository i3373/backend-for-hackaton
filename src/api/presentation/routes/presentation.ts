/**
 * presentation router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/presentations',
      handler: 'presentation.findAll',
    },
    {
      method: 'GET',
      path: '/presentations/:id',
      handler: 'presentation.findOne',
    },
  ],
};