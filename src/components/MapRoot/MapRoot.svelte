<script lang="ts">
  /**
   * A root component that swaps between the geo and hex maps
   */
  import GeoMap from '../GeoMap/index.svelte';
  import HexMap from '../HexMap/HexMap.svelte';
  import StyleRoot from '../StyleRoot/StyleRoot.svelte';
  import Totals from '../Totals/Totals.svelte';

  let { vizType = 'hex', totals, allocations, certainties, showTotals, ...componentProps } = $props();
</script>

<StyleRoot>
  <div class="interactive">
    <div class="interactive__map">
      <div class="interactive__map-inner">
        {#if vizType === 'geo'}
          <GeoMap {allocations} {certainties} {...componentProps} />
        {/if}

        {#if vizType === 'hex'}
          <HexMap {allocations} {certainties} {...componentProps} />
        {/if}
      </div>
    </div>
    <div class="interactive__totals">
      <Totals {allocations} {certainties} {totals} {showTotals} {...componentProps} />
    </div>
  </div>
</StyleRoot>

<style lang="scss">
  .interactive {
    position: relative;
    height: 100%;
    max-height: min(100%, 100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: stretch;
  }
  .interactive__map {
    flex: 1;
    position: relative;
  }
  .interactive__map-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
