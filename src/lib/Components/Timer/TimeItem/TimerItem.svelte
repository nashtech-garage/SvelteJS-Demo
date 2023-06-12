<script lang="ts">
  import { onInterval } from '../../../../utils';
  export let callback: () => void;
  export let number: number;

  $: numbers = number;

  onInterval(callback, 1000);
</script>

<div class="container">
  <p>{numbers}</p>
</div>

<style scoped>
  .container {
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
