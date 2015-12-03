app.factory('Content', function(){
  return {
    entries: [
      {title: 'Entry1', date: '12/2/2015', categories: ['Style', 'Home'], img: 'http://stylebyalina.com/wp-content/uploads/2014/10/styling-trench-coat-petite-fashion-style-by-alina-fashion-blog-1.jpg', summary: 'I love fall', comments: ['awesome', 'wow', 'yay']},
      {title: 'Entry2', date: '12/2/2015', categories: ['Style', 'Travel'], img: 'https://s-media-cache-ak0.pinimg.com/736x/04/c7/e1/04c7e1a2d05a34642a000581d4ff9934.jpg', summary: 'Wooo', comments: ['awesome', 'wow', 'yay']},
      {title: 'Entry3', date: '12/2/2015', categories: ['Home', 'Workout'], img: 'https://s-media-cache-ak0.pinimg.com/736x/5f/d8/1d/5fd81d6a11534b5f8c450920cfa30a88.jpg', summary: 'I love trove', comments: ['awesome', 'wow', 'yay']}
    ],
    entry: {},
    updateEntry: function(entry){
      this.entry = entry;
      return this.entry;
    },
    index: 0,
    updateIndex: function(newIndex){
      this.index = newIndex;
      return this.index;
    }
  }
})