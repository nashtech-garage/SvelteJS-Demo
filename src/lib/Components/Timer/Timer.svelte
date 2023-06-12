<script lang="ts">
  import { onMount } from 'svelte';
  import Card from './TimeItem/TimerItem.svelte';

  let time = {
    hours: 0,
    minutes: 5,
    seconds: 0
  };
  // Set the target 1 days from the current time
  const start = new Date(new Date().setMinutes(new Date().getMinutes() + 5));

  const handleTimerChange = () => {
    const current = new Date();
    const counter = start.getTime() - current.getTime();

    const getDays = Math.floor(counter / (1000 * 60 * 60 * 24));
    const getHours = Math.floor((counter / (1000 * 60 * 60)) % 24);
    const getMinutes = Math.floor((counter / 1000 / 60) % 60);
    const getSeconds = Math.floor((counter / 1000) % 60);

    time.hours = getHours;
    time.minutes = getMinutes;
    time.seconds = getSeconds;
  };

  onMount(() => {
    handleTimerChange();
  });
</script>

<section>
  <div>End in</div>
  <div class="timer">
    <Card callback="{handleTimerChange}" number="{time.hours}" />
    <div>:</div>
    <Card callback="{handleTimerChange}" number="{time.minutes}" />
    <div>:</div>
    <Card callback="{handleTimerChange}" number="{time.seconds}" />
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
      gap: 0.5rem;
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
