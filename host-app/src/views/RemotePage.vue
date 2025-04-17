<template>
  <div>
    <h2>负责加载远程的组件（我在主站点）</h2>
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
