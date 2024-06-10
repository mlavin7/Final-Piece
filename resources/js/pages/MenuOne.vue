<script setup>
    import { useAuthStore } from '../stores/AuthStore';
    import LogoutButton from '@/components/LogoutButton.vue';
    import MobileDiv from '@/components/DivMobile.vue';
    const store = useAuthStore();

</script>

<template>
    <MobileDiv >
        <header>
        <LogoutButton/>
    </header>
    <span>Dashboard</span>
    <h1>Hallo {{ store.authUser.name }}</h1>
    </MobileDiv>
    
</template>