<script lang="ts">
  import { onDestroy } from 'svelte';
  import Card from './TimeItem/TimerItem.svelte';
  import { tweened } from 'svelte/motion';
  type $$Props = {
    countdown: number;
    callback?: any;
  };
  export let countdown: number = 5;
  export let callback = () => null;
  let expected = new Date();
  expected.setSeconds(expected.getSeconds() + countdown);
  let now = new Date().getTime();
  let distance = tweened(expected.getTime() - now);
  let interval = setInterval(() => {
    if ($distance > 0) {
      $distance -= 1000;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  $: days = Math.floor($distance / (1000 * 60 * 60 * 24));
  $: hours = Math.floor(($distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  $: minutes = Math.floor(($distance % (1000 * 60 * 60)) / (1000 * 60));
  $: seconds = Math.floor(($distance % (1000 * 60)) / 1000);

  const handleReset = () => {
    expected = new Date();
    expected.setSeconds(expected.getSeconds() + countdown + 1);
    now = new Date().getTime();
    distance = tweened(expected.getTime() - now);
  };
  onDestroy(() => {
    clearInterval(interval);
  });
  $: {
    if ($distance < 1) {
      callback && callback();
      handleReset();
    }
  }
</script>

<div class="container">
  <div class="wrapper">
    <span> End in </span>
    <!-- <Card number="{days}" />: -->
    <Card number="{hours}" />:
    <Card number="{minutes}" />:
    <Card number="{seconds}" />
  </div>
</div>
<slot />

<style lang="scss">
  .reset {
    background-color: #008cba; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 50px;
    height: 35px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: 0.75;
    row-gap: 7rem;
    h1 {
      font-size: 1.5rem;
      color: white;
      letter-spacing: 5px;
    }

    .timer {
      display: flex;
      justify-content: center;
      gap: 0.5r77em;
    }
    div {
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    h1 {
      letter-spacing: 9px;
    }
    .countdown {
      gap: 5rem 2.5rem;
      flex-wrap: wrap;
    }
  }
</style>
