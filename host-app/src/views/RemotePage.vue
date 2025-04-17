<template>
  <div>
    <h2>Remote Page (Host)</h2>
    <RemoteHello />
    <router-link to="/">Go back Home</router-link>
  </div>
</template>

<script>
import RemoteHello from 'remoteApp/HelloWorld';

export default {
  components: { RemoteHello }
}
</script>
