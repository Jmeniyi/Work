<template>
    <div>
       <footer>
           <div class="d-flex justify-content-center">

              <img src="@/assets/svg/logo-white.svg" id="Lf"> </div>
           <hr  style=" border-top: 1px solid white;">

           <div class="container"> 
               <div class="row">
                   
                   <div class="col-lg-2">
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                   </div>
                   <div class="col-lg-2">
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                   </div>
                   <div class="col-lg-2">
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                       <a  class="text-white" href="/">Меню</a><br/>
                   </div>
                   <div class="ml-auto ">
                       <button variant="outline-light" class="mt-2 mb-2">Контактная информация</button>
                       <br>
                       <span class="d-flex justify-content-center mt-1">+7 (495) 123-45-67</span>
                   </div>
               </div>
               <p class="d-flex justify-content-center mt-3">
                   © Название сайта 2020. Все права защищены.
               </p>
           </div>
       </footer>
    </div>
</template>


<script>
import '@/style/style.css';
//import Logo from './src/assets/Logo.svg';
export default {
  name: 'footer',
  components: {
  },
};

</script>