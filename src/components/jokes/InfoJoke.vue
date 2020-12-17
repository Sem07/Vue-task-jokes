<template>
  <div>
   <h2>
     {{joke.id}}
   </h2>
    <h4>
      {{joke.joke}}
    </h4>

    <p v-if="joke.categories.length > 0">Categories - {{joke.categories[0]}}</p>

  </div>
</template>

<script>
export default {
  name: "InfoJoke",
  data() {
    return {
     joke: {}
    }
  },
  beforeCreate() {
    this.$http.get(`http://api.icndb.com/jokes/${this.$route.params.id}`)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          return this.joke = res.value
        })
  }
}
</script>

<style scoped>

</style>