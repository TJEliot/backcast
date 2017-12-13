var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('DuckTales');
    this.videos.on('select');
    this.render();
  },
  
  selectFirst: function(){
    if (this.videos.length){
      this.videos.at(0).select();
      //this.videos is like an array but not actually
      //so instead of this.videos[0]
      //we have to do this.videos.at(0)
    }
  },


  render: function() {
    this.$el.html(this.template());
    
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();
    
    return this;
  },
  
  

  template: templateURL('src/templates/app.html')

});
