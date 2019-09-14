<template>
  <div class="aler alert-danger" role="alert">
    {{ message }}
    <br />
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>