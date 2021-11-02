<template lang="pug">
    section(class="wrapper")
        
        div(class="test-main test-2")         
          div(class="block-test")            
            div(class="all-var")
              div(class="round-all testFirst")
                div(v-for="item in 5" class="round-item" :class="{'active-item' : item < '2'}")
              div(class="var-txt") Настало долгожданное время выбрать блюдо. Что приготовите?
              div(class="all-item")
                img(class="var-1 var-item" dataId="1" src="/assets/img/other/pizza.png" @click="isClicked")
                img(class="var-2 var-item" dataId="2" src="/assets/img/other/talaytele.png" @click="isClicked")
                img(class="var-3 var-item" dataId="3" src="/assets/img/other/falafel.png" @click="isClicked")
          
        transition(name="fade")
        div(v-if="isOpen" class="overlay")          
          div(class="modal")
            p(class="modal-text") Отличный выбор! <br>Давайте поскорее узнаем, справитесь ли вы с рецептом.   
            div(class="modal-btn" @click="isClickedNow") Продолжить                         
</template>
                        
<script>
export default {
  name: 'testFirst',
  data(){
      return {
          isOpen: false
      }
  },
  methods: {     
      isClickedNow(e){
        this.isOpen = false
        this.$router.push({path: `/test/3${this.getPublicUtm}`}) 
              
      },
      isClicked(e){
          window.whatTest = Number(e.currentTarget.getAttribute('dataId'))
          this.isOpen = true  
          
          dataLayer.push({
          'event':'promocook',
            'eventCategory':'тест', 
            'eventAction':`{{1}}`, // номер вопроса в рамках теста 
            'eventLabel':`{{${e.currentTarget.getAttribute('dataId')}}}` // текст выбранного пользователем ответа
        });
      }
  },
  computed: {    
    getPublicUtm(){
      return window.globalUtm
    }
  }
}
</script>
