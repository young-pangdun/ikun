<template>
  <div id="app">
    <TypeNav />
    <router-view />
    <Floor />
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import Floor from "@/components/Floor";

export default {
  name: "app",
  components: { TypeNav, Floor },
};
</script>
<style>
</style>
