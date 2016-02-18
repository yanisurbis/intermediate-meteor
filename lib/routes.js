FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout')
  }
})

FlowRouter.route('/test', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'})
  }
})
