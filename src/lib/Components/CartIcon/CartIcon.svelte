<script lang="ts">
  type $$Props = {
    href: string;
    iconName: string;
    className?: string;
    itemQuantity: number;
  };
  export let className = '';
  export let href = '#';
  export let iconName = '';
  export let itemQuantity = '' || 0;
</script>

<a href="{href}"><i class="{`${iconName} ${className}`}"></i> <span>{itemQuantity}</span></a>

<style lang="scss">
  a {
    position: relative;
    i {
      font-size: 18px;
      color: #1c1c1c;
    }
    span {
      height: 13px;
      width: 13px;
      background: #833030;
      font-size: 10px;
      color: #ffffff;
      line-height: 13px;
      text-align: center;
      font-weight: 700;
      display: inline-block;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: -12px;
    }
  }
</style>
