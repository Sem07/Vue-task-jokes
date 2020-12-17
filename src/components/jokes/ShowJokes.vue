<template>
  <div>
    <b-form-input v-model="search" placeholder="Search joke"></b-form-input>
    <div class="pagination">
      <div class="pagination__left">
        <a href="#" @click="prevPage" v-if="hasPrev()">Previous</a>
      </div>
      <div class="pagination__mid">
        <span>{{pageNumber}} from {{pageCount}}</span>
        </div>
      <div class="pagination__right">
        <a href="#" @click="nextPage" v-if="hasNext()">Next</a>
      </div>
    </div>
    <ul v-if="!search">
      <router-link tag="li" v-for="joke in paginatedData" :key="joke.id" :to="`/joke/` + joke.id">
        {{joke.joke}}
      </router-link>
    </ul>
    <ul v-if="search">
      <router-link tag="li" v-for="joke in searchData" :key="joke.id" :to="`/joke/` + joke.id">
        {{joke.joke}}
      </router-link>
    </ul>
     </div>
</template>

<script>
export default {
  name: "InfoJoke",
  data() {
    return {
      jokes: [],
      pageNumber: 1,
      search: '',
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10,
      search: ''
    },
   },
  computed:{
    pageCount(){
      const l = this.jokes.length;
      const s = this.size;
      return Math.ceil(l/s);

    },
    paginatedData(){
      const start = (this.pageNumber - 1) * this.size;
      const end = start + this.size;
      return  this.jokes.slice(start, end);

    },
    searchData(){
      const word = this.search.toLowerCase();
      return this.jokes.filter(item => item.joke.toLowerCase().indexOf(word) !== -1);
    }
  },
  methods: {
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    },
    hasPrev() {
      return this.pageNumber > 1
    },
    hasNext() {
      return this.pageNumber < this.pageCount
    },
  },

  beforeCreate() {
    this.$http.get('http://api.icndb.com/jokes')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          return this.jokes = res.value
        })
  }
}
</script>

<style>
.pagination {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto 30px;
  padding: 0 15px;
  max-width: 1280px;
}

.pagination__left, .pagination__right {
  width: 20%;
}

.pagination__left {
  float: left;
}

.pagination__right {
  float: right;
}

.pagination__right a {
  float: right;
}

.pagination a, .pagination span {
  display: block;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 42px;
  height: 44px;
  color: #999;
  font-size: 18px;
}

.pagination a {
  padding: 0 20px;
  max-width: 160px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #ccc;
  text-decoration: none;
  margin: 0 6px;
  transition: all .2s ease-in-out;
}

.pagination a:hover {
    border-color: #ea4c89;
    color: #ea4c89;
  }

</style>