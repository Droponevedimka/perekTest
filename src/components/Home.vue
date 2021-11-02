<template lang="pug">
    section(class="wrapper")      
      div(class="home-main")   
        a(href="https://www.perekrestok.ru/" target="_blank" class="logo-link" @click="isClickedLogo")     
          div(class="home-logo")
            img(src="/assets/img/home/logo.svg" class="logo-svg")
        div(class="home-div")
          div(class="home-txt") Легко найти человека, который любит вкусно поесть. А вот того, кто безупречно готовит — сложнее. Давайте проверим, сможете ли вы соперничать с Гордоном Рамзи? <br><br><span class="txt-b">Начнем с простого. Где купите продукты для будущего шедевра?</span>
          div(class="home-all-btns")
            div(class="home-btn" @click="isClicked") Онлайн со скидкой
            div(class="home-btn" @click="isClicked") У поставщиков
            div(class="home-btn" @click="isClicked") В магазине

      transition(name="fade")
      div(v-if="isOpen" class="overlay")          
          div(class="modal")
            p(class="modal-text") Достойно! А вообще зачем усложнять себе жизнь? <br><br>К счастью, на дворе 21 век и можно купить все необходимое онлайн, да еще и приятную скидку отхватить.   
            div(class="modal-btn" @click="isClickedNow") Продолжить 
        
</template>


<script>
export default {
  name: 'Home',
  data(){
      return {
          isOpen: false,
          isTimer: null
      }
  },
  beforeMount(){ 
      //this.nextRound()
     
  },
  computed: {    
    getPublicUtm(){
      return window.globalUtm
    }
  },
  methods:{    
    nextRound:function(){
     this.isTimer = setTimeout(() => {this.$router.push({path: `/testFirst${window.globalUtm}`})}, 15000);
    },

    isClickedNow(e){
        clearTimeout(this.isTimer)
        globalNameOfItog[Number(e.currentTarget.getAttribute('dataId'))-1]++
        this.isOpen = false
        this.$router.push({path: `/testFirst${this.getPublicUtm}`}) 
              
      },
      isClicked(e){   
        let nmbrAnswer = e.currentTarget.getAttribute('dataId')

        globalNameOfItog[Number(nmbrAnswer)-1]++
        this.isOpen = true   


        let wh = ''
        if(nmbrAnswer == '1') {
          wh = 'Онлайн со скидкой'
        } else if (nmbrAnswer == '2') {
          wh = 'У поставщиков'
        } else {
          wh = 'В магазине'
        }
        
        window.dataLayer.push({
          'event':'promocook',
            'eventCategory':'тест', 
            'eventAction':'общий вопрос',  // номер вопроса в рамках теста 
            'eventLabel':`{{${wh}}}` // текст выбранного пользователем ответа
        });
          
      },
      isClickedLogo(){
        dataLayer.push({
        'event':'promocook',
          'eventCategory':'тест', 
          'eventAction':'клик', 
          'eventLabel':'логотип' 
        });
      }
  }
}

</script>
