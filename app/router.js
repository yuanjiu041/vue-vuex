export default [{
  path: '/',
  component: require('./Layout.vue').default,
  children: [
    {
      path: '',
      redirect: '/app'
    },
    {
      path: '/app',
      component: require('pages/page1.vue').default
    }
  ]
}]