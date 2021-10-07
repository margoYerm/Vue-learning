const App ={
  /*/data() {
    return { }
  }*/

  /*data: () => { return {}}*/

  data: () => ({
    title: 'I am Grut',
    myHtml : '<h1>Vue 3 App</h1>',
    person: {
      firstName: 'Marharyta',
      lastName: 'Yermachenko',
      age: 34
    },
    items: [0, 1, 1, 2, 3, 5, 8, 13],
    itemsRendering: [1,2,3,4,5],
    mass: ['azerty', 'qwerty']
   }),
   methods: {
    /*stopPropagation(e) {
      e.stopPropagation()
    },*/
    addItem (event) {
      this.mass.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      //console.log(event.key)
    },
    remove (i) {
      this.mass.splice(i, 1)
    },
    log (item) {
      console.log(item)
    }
   },
   computed: {
     evenItems() {
       return this.itemsRendering.filter(i => i%2 ===0)
     }
   }
}
Vue.createApp(App).mount('#app')



