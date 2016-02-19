// Meteor.subscribe('recipes')

Template.Menu.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes')
  })
})

// console.log(Meteor.settings.public.ga.account)

Template.Menu.helpers({
  recipes: ()=> {
    return Recipes.find({inMenu: true})
  }
})
