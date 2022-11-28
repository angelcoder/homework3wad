<template>
   <div class="page-footer">
      <footer class='footer'>
        Copyright 2022 Anhelina Lohvina, Nikolay Kozlovskiy, Maanus Harju
        </footer>
    </div>
</template>


<script>
export default {
  name: "footerComponent",
}
</script>

<style scoped>
.page-footer{
  flex: 0 0 auto;
  margin-top: 40px;
  bottom: 0;
}

.footer{
  padding: 25px;
  border-radius: 12px;
  background-color: rgb(197, 195, 195);
  text-align: center;
  display: block;
}

</style>
