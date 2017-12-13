var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    // this.videos = new Videos(window.exampleVideoData);
    // this.videoList = new VideoListView(this.videos);
    // this.set('id', video.id.videoId);
    // console.log(this);
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  
  }

});
