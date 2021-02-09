var app = new Vue({
  el : '#app',
  data: {
    film : [],
    search : ''
  },
  methods: {
    cerca : function(){
      const self = this;
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=fe5018503d4af1e28f0fda5806e5e4c8&query=' + self.search).
          then(function(resp){
            const films = resp.data.response;
            this.film = films;
          })
      console.log(self.film);
    }
  }
})

Vue.config.devtools = true
