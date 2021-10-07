const App ={
  data() {
    return {
      counter: 0,
      title: 'Счетчик'
    }
  }
}
Vue.createApp(App).mount('#app')



const App2 = {
  data() {
    return {
      title: 'List notes', 
      placeholderString: 'Enter a name of the note',
      inputValue: '',
      notes: ['Note 1', 'Note 2']
    }
  },
  methods: {
    /*inputChangeHandler(event) {      
      this.inputValue = event.target.value
    },*/
    addNewNote() {
      if (this.inputValue !== '') {
         this.notes.push(this.inputValue)
        this.inputValue = ''
      }     
    },
    /*inputKeyPress(event) {
      if(event.key === 'Enter') {
        this.addNewNote()
      }
    }*/
    toUpperCase (item) {
      return item.toUpperCase()
    },
    doubleCount() {
      console.log('doubleCount')//call with every input action. To bad for performance
      return this.notes.length *2
    },
    removeNote(idx) {      
      this.notes.splice(idx, 1)
    }
  } ,
  computed: { // not call in html, depends from data, always return value, it's getter and setter
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length *2
    },
  },
  watch: { // react for every change in input; for changing need data or http requests
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
      //console.log('input value changed', value)
    }
  }
}
Vue.createApp(App2).mount('#app-2')