<template>
    <header>
        <div class="menu-top">
            <div class="prueba">
            <img src="./icons/TKM-favicon.png" height="40" >
            <h2> Take Me Home</h2>
        </div>
        <nav class="menu-left">

            
            <button class="button-user">
                <i class="pi pi-user"></i>
                <a id="name-user"> Oscar </a>
                <i id="angle-icon" class="pi pi-angle-down"></i>
            </button>
    
        </nav>
        </div>
        
        <ul class="menu">
            <div class="menu-indicator" :style="{left:positionToMove, width:sliderWidth}"></div>
            <li class="menu-item" v-for="link in links" :key="link.id" @click="sliderIndicator(link.id)" :ref="'menu-item_' + link.id">
            <a href="#" class="menu-link" :class="link.id === selectedIndex ? 'active': null">
                <i class="menu-icon" :class="link.icon"></i>
                <span>{{link.text }}</span>
                    
            </a>
                
            </li>
        
        </ul>
        
    </header>
    
</template>

<script>

export default {
    data () {
        return {
            sliderPosition:0,
            selectedElementWidth:0,
            selectedIndex:0,
            links:[
            {
                id:1,
                icon:"",
                text: "Home",
            },
            {
                id:2,
                text: "My Messages",
            },
            {
                id:3,
                text: "My Orders",
            },
            {
                id:4,
                text: "Order Request",
            },
            {
                id:5,
                text: "Resume",
            },
            {
                id:6,
                text: "Support",
            },
            {
                id:7,
                icon: "pi pi-bell",
            },

            ],

        };
        
    },
    methods:{
        sliderIndicator(id){
            let el = this.$refs[`menu-item_${id}`][0];
            this.sliderPosition = el.offsetLeft;
            this.selectedElementWidth = el.offsetWidth;
            this.selectedIndex = id;

        },
    },
    computed:{
        positionToMove(){
            return this.sliderPosition+"px";
        },
        sliderWidth(){
            return this.selectedElementWidth + "px";

        },
    },
};
</script>

<style>
body{
    margin:0;
    
}
:root{
  --activa-color:#ffffff;
  --link-text-color:#f1faee;
  --menu-background-color:#264986;
  --active-background-color:#264986;

}
header{
    margin:0;
    
    
}
.button-user{
    
    background-color: var(--menu-background-color);
    margin:0;
    padding:0;
    color:white;
    border:none;
    display: inline-flex;
    justify-items: center;
    font-size:15px;
    

}
#name-user{
    margin-top: 15px;
    width: 150px;
    margin-inline: 2px;
}
#angle-icon{
    font-size: 15px;
    
    
}
i{
    margin-top: 15px;
    ;
    font-size: 20px;
    
}
.prueba{
    font-family: "Poppins";
    width: 1440px;
    height: 49px;
    background-color:var(--menu-background-color);
    align-items: center;
    display: flex;
    margin-inline-start:71px;
    color:white;
    font-size: 20px;
    width: 70%;
    margin-left: 60px;
    margin-right: 0;
    
}
.prueba img{
    height: 40px;
    width: 40px;
    display: flex;
    
}
.menu-left{
    display: flex;
    margin-inline-end:150px;
    

}
.menu-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    
}
/* ul */
.menu{
    /*
    top:49.68px;
    top:7.52%;*/
    margin:0;
    left: 12%;
    bottom:86%;
    width: 75%;
    height: 80.32px;
    position: relative;
    background-color: var(--menu-background-color);
    display: inline-flex;
    
    list-style: none;
    
}
/* li */

.menu-item{
    display: inline-flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    
}
/* a */

.menu-link{
    
   
    /*margin-left: 10px;
    margin-right: 0;*/
    
    padding:21px;
    width: 142px;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--link-text-color);
    text-decoration: none;
    


}

.menu-link:hover, .menu-link.active{
    color: var(--activa-color);
    background-color: var(--active-background-color);
}

/* icon */
.menu-icon{
    
   /* height: 1.5rem;
    width: 1.5rem;*/
   
    justify-content: center;
    align-items: center;
    display: inline-flex;
    /*margin-right: 0.2rem;*/

}

/* slider */
.menu-indicator{
    position: absolute;
    height: 0.25rem;
    background-color: var(--activa-color);
    bottom:0;
    left: 0;
    margin: auto;
    width: 3rem;
    transition: all ease 0.5s;

}
</style>
