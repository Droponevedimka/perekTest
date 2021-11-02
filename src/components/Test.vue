<template lang="pug">
    section(class="wrapper")        
        div(:class="`test-main test-${test.id}`")         
          div(class="block-test")            
            div(class="test")
              div(class="round-all")
                div(v-for="item in 5" class="round-item" :class="{'active-item' : item < test.id}")
              div(class="test-left") 
                div
                  p(class="test-ask" v-html="test.ask")
                  div(class="test-answer")
                    p(class="answers-item" v-for="item in test.answers" v-bind:dataId="item.answerId" @click="isClicked") <span class="krug"></span> {{item.item}} 
              img(:class="`test-right item-img-${test.id}`" ref="testImg" :src="test.image")                
               
        transition(name="fade")
        app-child(v-if="isOpen" class="overlay")          
          div(class="modal")
            p(class="modal-text" v-html="test.popUp")   
            div(class="modal-btn" @click="isClickedNow") Продолжить                          
</template>
                        
<script>
export default {
  name: 'test',
  data(){
      return {
          isOpen: false
      }
  },
  methods: {     
      isClickedNow(e){        
        globalNameOfItog[Number(e.currentTarget.getAttribute('dataId'))-1]++
        this.isOpen = false
        let nextId = Number(this.id)+1
        if(!this.test.btnFinally){
                    this.isOpen = false
                    this.$router.push({path: `/test/${nextId}/${this.getPublicUtm}`}) 
               } else {
                    let gg = globalNameOfItog.indexOf(Math.max.apply(Math, globalNameOfItog))+1
                    this.isOpen = false                    
                    this.$router.push({path: `/final/${gg}/${this.getPublicUtm}`}) 
               }
      },
      isClicked(e){
          globalNameOfItog[Number(e.currentTarget.getAttribute('dataId'))-1]++
          this.$refs.testImg.src = ''
          this.isOpen = true   
         
          window.dataLayer.push({
            'event':'promocook',
              'eventCategory':'тест', 
              'eventAction':`{{${Number(this.id)-1}}}`, // номер вопроса в рамках теста 
              'eventLabel':`{{${e.currentTarget.getAttribute('dataId')}}}` // текст выбранного пользователем ответа
          });
      }
  },
  computed: {
    id(){   
       return this.$store.state.route.params.id
    },
    test(){      
      return this.$store.getters.getTestById(window.whatTest, this.id)
    },
    getPublicUtm(){
      return window.globalUtm
    }
  }
}
</script>
