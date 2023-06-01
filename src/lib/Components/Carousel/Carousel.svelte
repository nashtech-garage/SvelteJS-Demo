<script lang="ts">
  import Siema from 'siema';
  import { onMount, createEventDispatcher } from 'svelte';

  type $$Props = Partial<{
    perPage: number;
    loop: boolean;
    autoplay: number;
    duration: number;
    easing: string;
    startIndex: number;
    draggable: boolean;
    multipleDrag: boolean;
    dots: boolean;
    controls: boolean;
    threshold: number;
    rtl: boolean;
  }>;
  export let perPage = 3;
  export let loop = true;
  export let autoplay = 0;
  export let duration = 200;
  export let easing = 'ease-out';
  export let startIndex = 0;
  export let draggable = true;
  export let multipleDrag = true;
  export let dots = true;
  export let controls = true;
  export let threshold = 20;
  export let rtl = false;

  let currentIndex: number = startIndex;

  let siema: HTMLDivElement;
  let controller: Siema;
  let timer: ReturnType<typeof setInterval> | undefined;
  const dispatch = createEventDispatcher();

  $: pips = controller ? controller.innerElements : [];
  $: currentPerPage = controller ? controller.perPage : perPage;
  $: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : 0;

  onMount(() => {
    controller = new Siema({
      selector: siema,
      perPage: typeof perPage === 'object' ? perPage : Number(perPage),
      loop,
      duration,
      easing,
      startIndex,
      draggable,
      multipleDrag,
      threshold,
      rtl,
      onChange: handleChange
    });

    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
    return () => {
      autoplay && clearInterval(timer);
      controller.destroy();
    };
  });

  const isDotActive = (currentIndex: number, dotIndex: number): boolean => {
    if (currentIndex < 0) currentIndex = pips.length + currentIndex;
    return (
      currentIndex >= dotIndex * currentPerPage &&
      currentIndex < dotIndex * currentPerPage + currentPerPage
    );
  };

  const left = (): void => {
    controller.prev();
  };

  const right = (): void => {
    controller.next();
  };

  const go = (index: number): void => {
    controller.goTo(index);
  };

  const pause = (): void => {
    clearInterval(timer);
  };

  const resume = (): void => {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  };

  const handleChange = (): void => {
    currentIndex = controller.currentSlide;
    dispatch('change', {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length
    });
  };

  const resetInterval = (node: HTMLElement, condition: string): { destroy: () => void } => {
    const handleReset = (): void => {
      pause();
      resume();
    };

    if (condition) {
      node.addEventListener('click', handleReset);
    }

    return {
      destroy(): void {
        node.removeEventListener('click', handleReset);
      }
    };
  };
</script>

<div class="carousel">
  <div class="slides" bind:this="{siema}">
    <slot />
  </div>
  {#if controls}
    <button class="left" on:click="{left}" use:resetInterval="{String(autoplay)}" aria-label="left">
      <i class="fa fa-angle-left"></i>
    </button>
    <button
      class="right"
      on:click="{right}"
      use:resetInterval="{String(autoplay)}"
      aria-label="right"
    >
      <i class="fa fa-angle-right"></i>
    </button>
  {/if}
  {#if dots}
    <ul>
      {#each { length: totalDots } as _, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          on:click="{() => go(i * currentPerPage)}"
          class="{isDotActive(currentIndex, i) ? 'active' : ''}"
        ></li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .carousel {
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    ul {
      list-style-type: none;
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: -30px;
      padding: 0;
      li {
        margin: 6px;
        border-radius: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        height: 8px;
        width: 8px;
      }
    }
    button {
      position: absolute;
      font-size: 18px;
      color: #1c1c1c;
      height: 70px;
      width: 30px;
      line-height: 70px;
      text-align: center;
      border: 1px solid #ebebeb;
      position: absolute;
      left: -35px;
      top: 50%;
      transform: translateY(-35px);
      background: #ffffff;
      &:focus {
        outline: none;
      }
    }

    .left {
      font-size: 18px;
    }

    .right {
      left: auto;
      right: -35px;
    }
  }
</style>
