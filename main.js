var app = new Vue({
  el : '#app',
  data: {
    all : [],
    film : [],
    serie: [],
    search : '',
    languages : ['en', 'it', 'es', 'gr', 'cn', 'de', 'fr', 'ja']
  },
  methods: {
    searchAll : function(){
      this.all = [];
      this.cercaFilm();
      this.cercaSerie();
    },
    cercaFilm : function(){
      const self = this;
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=fe5018503d4af1e28f0fda5806e5e4c8&query=' + self.search).
          then(function(resp){
            const films = resp.data.results;
            self.film = films;
            self.all = [...self.all, ...self.film];
          })
      console.log(self.film);
    },
    cercaSerie : function(){
      const self = this;
          axios.get('https://api.themoviedb.org/3/search/tv?api_key=fe5018503d4af1e28f0fda5806e5e4c8&query=' + self.search).
            then(function(resp){
              const serie = resp.data.results;
              self.serie = serie;
              self.all = [...self.all, ...self.serie];
            })
      console.log(self.serie);
    },
    getVote: function(vote){
      return parseInt(vote / 2);
    },
    generateImageLink: function(element) {
      const uri = 'https://image.tmdb.org/t/p/';
      let size = 'w342';
      let imageLink = uri + size + element.poster_path;
      if(element.poster_path === null){
        imageLink = 'https://www.altavod.com/assets/images/poster-placeholder.png';
      }
      return imageLink;
    }
  }
})

Vue.config.devtools = true;
