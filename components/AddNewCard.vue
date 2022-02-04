<template>
    <div class="flex items-center box-container box-container--responsive">
       <img class="logo" :src="isMobile ? addMobile : add" alt="add-card" />
       <span class="ml-2">New Card</span>
    </div>
</template>
<script>
import add from '~/assets/images/add.svg'
import addMobile from '~/assets/images/addMobile.svg'

export default {
    created () {
        this.add = add;
        this.addMobile = addMobile
    }
}
</script>
<style lang="scss">

    .box-container {
       height: 35px;  
       padding: 10px;
       font-weight: bold;
       font-size: 12px;
    }
    .box-container--responsive {
        height: 35px;
        background-color: #325BAF;
        border-radius: 4px;
        padding: 10px;
        color: white;

    }

    .logo {
        @include square(16px)
    }

    @media only screen and (max-width: 600px) {
    .box-container--responsive {
        background-color: transparent;
        color: #23CEFD;
    }
    }

    
</style>