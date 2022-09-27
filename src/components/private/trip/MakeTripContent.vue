<script>

export default {
  data() {
    return {
      selectedOrigin: null,
      originCities: [
        {name: 'United States', code: 'US'},
        {name: 'China', code: 'CN'},
        {name: 'France', code: 'FR'},
        {name: 'Japan', code: 'JP'},
        {name: 'United Kingdom', code: 'GB'}
      ],
      selectedDestination: null,
      destinationCities: [
        {name: 'Peru', code: 'PE'},
        {name: 'Brazil', code: 'BR'},
        {name: 'Chile', code: 'CL'},
        {name: 'Argentina', code: 'AR'},
        {name: 'Mexico', code: 'MX'}
      ],
      date: null,
    }
  }
}

</script>

<template class="make-trip" >
      <div class="flex mt-5">
        <label class="text-4xl font-bold" >Make a Trip</label>
        <i class="trip-box ml-6" style="font-size: 2.5rem"></i>
      </div>
  <!--3 rows-->

  <div class="grid mt-5" >
    <div class="col-6 flex ">
        <i class="trip-origin ml-3 "></i>
        <label class="text-2xl ml-5" >Trip Origin</label>
    </div>
    <div class="col-6 flex justify-content-start" >
      <pv-dropdown class="drop-down" v-model="selectedOrigin" :options="originCities" optionLabel="name" placeholder="Select a City" >
        <template #value="slotProps">
          <div class="country-item" v-if="slotProps.value">
            <img :src="'https://countryflagsapi.com/png/' + slotProps.value.code" />
            <span>{{slotProps.value.name}}</span>
          </div>
          <span v-else>
            {{slotProps.placeholder}}
          </span>
        </template>

        <template #option="slotProps">
          <div class="country-item">
            <img :src="'https://countryflagsapi.com/png/'+slotProps.option.code" />
            <span>{{slotProps.option.name}}</span>
          </div>
        </template>
      </pv-dropdown>
    </div>
  </div>

  <div class="grid mt-5"  >
    <div class="col-6 flex">
        <i class="trip-destination ml-8"></i>
        <label class="text-2xl ml-5 " >Trip Destination</label>
    </div>
    <div class="col-6 flex justify-content-start" >
      <pv-dropdown  class="drop-down" v-model="selectedDestination" :options="destinationCities" optionLabel="name" placeholder="Select a City" >
        <template #value="slotProps">
          <div class="country-item" v-if="slotProps.value">
            <img :src="'https://countryflagsapi.com/png/' + slotProps.value.code" />
            <span>{{slotProps.value.name}}</span>
          </div>
          <span v-else>
            {{slotProps.placeholder}}
          </span>
        </template>

        <template #option="slotProps">
          <div class="country-item">
            <img :src="'https://countryflagsapi.com/png/'+slotProps.option.code" />
            <span>{{slotProps.option.name}}</span>
          </div>
        </template>
      </pv-dropdown>
    </div>
  </div>

  <div class="grid mt-5"  >
    <div class="col-6 flex">
        <i class="trip-arrival-date ml-6"></i>
        <label class="text-2xl ml-6 again" >Arrival Date</label>
    </div>
    <div class="col-6 flex justify-content-start" >
          <pv-calendar class="drop-down" id="date"  v-model="date" :showIcon="true" />
    </div>
  </div>

    <!--Continue Button-->
    <div class=" flex mt-6 trip login">
      <Button label="Continue" class="w-18rem h-3rem text-white text-lg font-bold justify-content-center" >Continue</Button>
    </div>

</template>

<style>

.flex{
  align-items: center;
  justify-content: center;
}

.flex .drop-down{
  margin-left: 2rem;
  width: 12rem;
}

.country-item img {
  width: 19px;
  margin-right: 0.5rem;
}

.trip-origin {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='58' height='43' fill='none' viewBox='0 0 58 43'%3e%3cpath fill='%23264986' d='M56.55 37.267H1.45c-.8 0-1.45.641-1.45 1.433v2.867C0 42.359.65 43 1.45 43h55.1c.8 0 1.45-.641 1.45-1.433V38.7c0-.792-.65-1.433-1.45-1.433ZM7.3 27.706c.57.612 1.368.96 2.205.96l11.83-.017a6.004 6.004 0 0 0 2.686-.638l26.368-13.227c2.423-1.215 4.595-2.95 6.073-5.223 1.66-2.551 1.84-4.398 1.185-5.702-.654-1.305-2.242-2.264-5.28-2.46-2.704-.173-5.395.531-7.818 1.746l-8.927 4.478-19.82-7.35a1.625 1.625 0 0 0-1.631-.1L8.213 3.162a1.627 1.627 0 0 0-.469 2.556l14.157 8.788-9.353 4.692-6.557-3.267a1.629 1.629 0 0 0-1.456.002L.898 17.758a1.627 1.627 0 0 0-.504 2.515L7.3 27.706Z'/%3e%3c/svg%3e");
  width: 58px;
  height: 43px;
&--Vector {
   background-position: 0 0;
 }
}

.trip-destination{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='58' height='46' fill='none' viewBox='0 0 58 46'%3e%3cpath fill='%23264986' d='M56.55 40.25H1.45c-.801 0-1.45.643-1.45 1.438v2.874C0 45.358.649 46 1.45 46h55.1c.801 0 1.45-.643 1.45-1.438v-2.874c0-.795-.649-1.438-1.45-1.438ZM4.06 18.477l8.043 7.188a5.68 5.68 0 0 0 2.308 1.251l26.064 7.04c2.4.647 4.944.783 7.34.122 2.69-.743 3.937-1.906 4.283-3.209.347-1.302-.157-2.938-2.118-4.937-1.748-1.781-4.02-2.946-6.42-3.594l-8.836-2.386-9.095-17.237a1.5 1.5 0 0 0-1.057-1.07L18.673.052a1.493 1.493 0 0 0-1.877 1.477l4.343 14.753-9.262-2.5-2.5-6.1a1.494 1.494 0 0 0-.999-.892l-3.6-.973A1.495 1.495 0 0 0 2.9 7.244l.02 9.144c.018.8.547 1.558 1.14 2.09Z'/%3e%3c/svg%3e");
  width: 58px;
  height: 46px;

&--Vector {
   background-position: 0 0;
 }
}

.trip-arrival-date {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='42' height='50' fill='none' viewBox='0 0 42 50'%3e%3cpath fill='%23264986' d='M1.125 18.75h39.75c.619 0 1.125.527 1.125 1.172v25.39C42 47.9 39.984 50 37.5 50h-33C2.016 50 0 47.9 0 45.312v-25.39c0-.645.506-1.172 1.125-1.172ZM42 14.453v-3.515c0-2.588-2.016-4.688-4.5-4.688H33V1.172C33 .527 32.494 0 31.875 0h-3.75C27.506 0 27 .527 27 1.172V6.25H15V1.172C15 .527 14.494 0 13.875 0h-3.75C9.506 0 9 .527 9 1.172V6.25H4.5c-2.484 0-4.5 2.1-4.5 4.688v3.515c0 .645.506 1.172 1.125 1.172h39.75c.619 0 1.125-.527 1.125-1.172Z'/%3e%3c/svg%3e");
  width: 42px;
  height: 50px;
&--Vector {
   background-position: 0 0;
 }
}

.trip-box{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='35' fill='none' viewBox='0 0 50 35'%3e%3cpath fill='%23264986' d='M33.259 17.502a3.787 3.787 0 0 1-3.234-1.828l-5.023-8.328-5.016 8.328a3.8 3.8 0 0 1-3.242 1.836c-.351 0-.703-.047-1.039-.148L5.003 14.299v13.906c0 1.149.781 2.149 1.89 2.422l16.89 4.226a5.078 5.078 0 0 0 2.422 0l16.905-4.226A2.505 2.505 0 0 0 45 28.205V14.3l-10.702 3.055a3.595 3.595 0 0 1-1.039.148Zm16.608-8.765L45.844.706A1.276 1.276 0 0 0 44.54.011L25.002 2.503l7.163 11.882c.297.492.89.727 1.446.57l15.46-4.413a1.287 1.287 0 0 0 .796-1.805ZM4.16.706.136 8.737c-.36.719.024 1.578.79 1.797l15.46 4.414a1.284 1.284 0 0 0 1.444-.57l7.172-11.875L5.456.01A1.277 1.277 0 0 0 4.16.706Z'/%3e%3c/svg%3e");
  width: 50px;
  height: 35px;
&--Vector {
   background-position: 0 0;
 }
}


</style>