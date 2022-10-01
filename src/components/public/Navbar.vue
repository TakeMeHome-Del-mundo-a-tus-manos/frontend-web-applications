<template>
    <div class="menubar" >
       <Menubar :model="items">
            <template #start>
                <img alt="logo" src="../icons/TKM-favicon.png" height="40" class="mr-2">
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
                    label: 'Login',
                    link: '/'
                },
                {
                    label: 'SignUp',
                    link: '/signup1'
                },
                {
                    label: 'Contact Us',
                    link: ""
                }
            ]
        }
    }
}
</script>
