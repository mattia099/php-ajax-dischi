

const app = new Vue({
  el: '#app',
  data: {
    discs: [],
  },
  methods: {
    fetchData(){
      axios.get('./database.php')
      .then( res =>{
        this.discs = res.data;
      })
    }
  },
  mounted(){
    this.fetchData();
  }
});