// Meteor.subscribe('recipes')

Template.RecipeSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id')
    // console.log(id)
    self.subscribe('singleRecipe', id)
  })
})

// console.log(Meteor.settings.public.ga.account)

Template.RecipeSingle.helpers({
  recipe: ()=> {
    var id = FlowRouter.getParam('id')
    // console.log('second id' + id)
    return Recipes.findOne({_id: id})
  }
})
