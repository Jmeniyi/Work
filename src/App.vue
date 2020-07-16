<template>
  <div>
    <heade></heade>

  <div id="app">
    <div class="container" id="app">
      <div class="row">
        <div class="col-6">
          <div class="input-group">
           <input type="text" class="form-control" placeholder="FIO" id="Nav">
        </div>
      </div>
          <div class="col-2">
            <select class="form-control" id="Nav">
              <option>Filters</option>
                </select>
                  </div>
                     <div class="col">
                        <select class="form-control" id="Nav">
                           <option >Расстояние</option>
                        </select>
                      </div>
                        <div class="col">
                          <select class="form-control" id="Nav">
                            <option>Цена</option>
                          </select>
                        </div>
                      </div>

<div class="row" id="C1">

        <div 
            v-for="itm in 6"
            :key="itm"
            class="col-lg-6 col-nd-12"
            >

        <div class="col-lg-12" id="C2">
          <div class="card">
            <div class="container">
              <div class="row">
              vbcvb
                <div class="col-lg-6 col-12 icons">
                  <img src="@/assets/png/preview.png" class="">

                  <img src="@/assets/svg/star-img.svg" alt="" class="icon">

                  <img src="@/assets/svg/heart-photo.svg" alt="" class="icon2">
                </div>
                <div class="col-lg-6">
                  <p class="title">Название коворкинга</p>
                  <p class="adress">г. Москва, ул. Моховая, д. 13</p>
                  <p class="gray">Кабинеты</p>
                  <div class="row">
                    <p class="cab">Визажная зона</p>
                    <p class="cab">VIP-SPA</p>
                  </div>
                  <p class="gray">Время работы</p>
                  <div class="row">
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                    <p class="cab">10:00-12:00</p>
                  </div>
                  <b-button variant="dark" class="col-lg-12 btn">Подробнее</b-button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

      

</div>
    </div>
    <router-view/>
    <foot></foot>
    </div>
</template>


<script>
  import Head from "./components/Head";
  import Footer from "./components/Footer";
  import '@/style/style.css';
  export default {
    components: {
      'foot' : Footer,
      'heade' : Head,
      
    },
  }
</script>
