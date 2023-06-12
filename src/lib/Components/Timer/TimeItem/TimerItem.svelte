<script lang="ts">
  export let number: number;
  $: formatNumber = number.toLocaleString('en-US', { minimumIntegerDigits: 2 });
</script>

<div class="container">
  <span>{formatNumber}</span>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    font-weight: 500;
    margin: 12px 6px;
    font-size: 16px;
    color: #fff;
    background-color: #d3232a;
    text-align: center;
    width: 40px;
    height: 35px;
    line-height: 35px;
  }
</style>
