/**
 * resume router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/resume/:id',
      handler: 'resume.getResume',
    },
  ],
};