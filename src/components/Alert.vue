<template>
  <div class="aler alert-success" role="alert">
    {{ message }}
    <br />
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>