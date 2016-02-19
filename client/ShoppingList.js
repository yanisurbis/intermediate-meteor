// Meteor.subscribe('recipes')

Template.ShoppingList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes')
  })
})

// console.log(Meteor.settings.public.ga.account)

Template.ShoppingList.helpers({
  shoppingList: ()=> {
    return Recipes.find({inMenu: true})
  }
})
