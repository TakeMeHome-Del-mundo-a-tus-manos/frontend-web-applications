<template>
    <div>
        <!-- <div class="grid pt-8">
            <div class="col-4 font-semibold text-center col-offset-2 ">
                <router-link to="/pay" class="no-underline" >Pay</router-link>
            </div>
            <div class=" col-4 font-semibold text-center hover hover:bg-blue-50">
                <router-link to="/orders-in-progress" class="no-underline">Orders in Process</router-link>
            </div>
        </div>
        <div class="grid">
            <div class="col-8 col-offset-2">
                <hr class=" line">
            </div>
        </div>
        <div class="grid">
            <div class="col-8 col-offset-2">
                <router-view></router-view>
            </div>
        </div> -->

        <TabView>
            <TabPanel>
                <template #header>
                    <RouterLink to="/pay" class="no-underline">
                        <span>Pay</span>
                    </RouterLink>
                </template>
                <RouterView></RouterView>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <RouterLink to="/current-process" class="no-underline">
                        <span>
                            Orders in Progress
                        </span>
                    </RouterLink>
                </template>
                <RouterView></RouterView>

            </TabPanel>
        </TabView>



    </div>
</template>


<style>
.p-tabview {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
}

.p-tabview-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100vh;
    border-bottom: 1px solid #d9d9d9;
    background-color: #f2f2f2;
}

.p-tabview-panels {
    width: 80vw;
}

@media screen and (max-width: 750px) {

    .p-tabview-nav {
        width: 80vw;
    }

}
</style>

<script>


</script>
<!-- 
<style>

.line  hr{
    border-top: 1px solid gray;
}
.menu-indicator {
    position: absolute;
    height: 0.25rem;
    background-color: var(--activa-color);
    bottom: 0;
    left: 0;
    margin: auto;
    width: 3rem;
    transition: all ease 0.5s;

}

</style> -->


