EmberIntro.PostsRoute = Ember.Route.extend({
  model: function () {
    return EmberIntro.Post.find()
  }
})
