<template lang="pug">
    section(:class="`wrapper final-wrapper final-${final.id}`")
      
      div(class="final-body")
        div(class="final-left")
          a(href="https://www.perekrestok.ru/" class="logo-link" @click="isClickedLogo" target="_blank")
            div(class="final-logo")
              img(src="/assets/img/home/logo.svg" class="logo-svg")        
          img(v-bind:src="final.img" class="final-left-img")
          div(class="final-soc")
            a(v-bind:href="`https://www.facebook.com/sharer.php?u=${publicPath}/share-${final.id}`" dataId="Facebook" @click="isClicked")
                img(src="/assets/img/other/fb.svg" class="soc-item")  
            a(v-bind:href="`https://vk.com/share.php?url=${publicPath}/share-${final.id}/&title=Кулинарный тест от онлайн-супермакета Перекресток&image=https://perekrestok-cook.ru/assets/img/share/r${this.id}.jpg&noparse=true`" dataId="Vkontakte" @click="isClicked") 
                img(src="/assets/img/other/vk.svg" class="soc-item")
            a(v-bind:href="`https://connect.ok.ru/offer?url=${publicPath}/share-${final.id}&title=Кулинарный тест от онлайн-супермакета Перекресток&imageUrl=https://perekrestok-cook.ru/assets/img/share/r${this.id}.jpg`" dataId="Odnoklassniki" @click="isClicked")
                img(src="/assets/img/other/ok.svg" class="soc-item")   
            a(v-bind:href="`https://twitter.com/intent/tweet?text=Кулинарный тест от онлайн-супермакета Перекресток. Пройди и ты!`" dataId="Twitter" @click="isClicked") 
                img(src="/assets/img/other/tw.svg" class="soc-item")
            
        div(class="final-right")           
          p(class="final-title" v-html="final.title")
          p(v-html="final.desc" class="final-desc")
          div(class="form-block" data-popmechanic-embed="12944")
            
              
                
      div(class="final-footer") Все авторские права на текст принадлежат АО «Торговый дом «ПЕРЕКРЕСТОК». Нарушение авторских прав может влечь гражданско-правовую, административную и/или уголовную ответственность. <br>Нажимая кнопку «Получить», я ознакомлен(а) с <a href="https://www.perekrestok.ru/info/politics_personal_data" class="final-link">Политикой обработки персональных данных</a> и даю согласие на <a href="https://www.perekrestok.ru/info/personal_data" class="final-link">обработку моих персональных данных.</a> Условия акции доступы по <a href="https://www.perekrestok.ru/src/upload/full/document/88/48/14888.pdf" class="final-link">ссылке</a>
       
          
</template>


<script>
export default {
  name: 'Final', 
  methods:{    
    isClicked(e){           
          
          dataLayer.push({
            'event':'promocook',
              'eventCategory':'тест', 
              'eventAction':'поделиться', 
              'eventLabel':`{{${e.currentTarget.getAttribute('dataId')}}}` // название выбранной соцсети
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
  },
  beforeMount(){ 
      document.addEventListener("click", function(e) {
      if (e.target.className=="popmechanic-submit") {
            window.dataLayer.push({
        'event':'promocook',
          'eventCategory':'тест', 
          'eventAction':'клик', 
          'eventLabel':'получить' 
      });
      }
});
     
  },
  computed: {    
    getPublicUtm(){
      return window.globalUtm
    },
    id(){
      return this.$store.state.route.params.id
    },
    publicPath(){
      return window.location.origin
    },
    final(){
      return this.$store.getters.getFinallyById(this.id)
    }
  }  
};
</script>