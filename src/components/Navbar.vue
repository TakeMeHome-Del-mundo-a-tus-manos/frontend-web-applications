<template>
    <div class="menubar" >
       <Menubar :model="items">
            <template #start>
                <img alt="logo" src="./icons/TKM-favicon.png" height="40" class="mr-2">
                <span> <strong>TakeMeHome</strong></span>
            </template>
            <template #item="{item}" class="nav-buttons">
                <RouterLink :to="item.link">
                    <Button :label="item.label"  iconPos="right" class="p-button-text"/>
                </RouterLink>
            </template>
        </Menubar>
    </div>
      
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    link: '/'
                },
                {
                    label: 'Us',
                    link: '/about'

                },
                {
                    label: 'Contact Us',
                    link: '/home'

                },

            ]
        }
    }
}
</script>
