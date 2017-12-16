import Layout from './Layout'

const page1 = r => require.ensure([], () => r(require('pages/page1')), 'page1')
const page2 = r => require.ensure([], () => r(require('pages/page2')), 'page2')

export default [{
  path: '/',
  component: Layout,
  children: [
    {
      path: '',
      redirect: '/app'
    },
    {
      path: '/app',
      component: page1
    },
    {
      path: '/app2',
      component: page2
    }
  ]
}]
