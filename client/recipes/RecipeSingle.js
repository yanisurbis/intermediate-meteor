// Meteor.subscribe('recipes')

Template.RecipeSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes')
  })
})

// console.log(Meteor.settings.public.ga.account)

Template.RecipeSingle.helpers({
  recipes: ()=> {
    var id = FlowRouter.getParam('id')
    return Recipes.findOne({_id: id})
  }
})
