<script lang="ts">
  let { name, allocation, certainty: _certainty } = $props();
  let LINES_D =
    'M16.2254 -20.035L-24.9347 2.78718M17.9764 -17.6977L-23.1837 5.12446M19.4262 -15.188L-21.7338 7.63415M21.0402 -12.7723L-20.1199 10.0499M22.3308 -10.1714L-18.8293 12.6507M23.5377 -7.67775L-17.6224 15.1444M25.2887 -5.34047L-15.8713 17.4817M26.7386 -2.83078L-14.4215 19.9914M28.3525 -0.415056L-12.8076 22.4071M29.6431 2.18581L-11.517 25.008';

  // We can't be uncertain when there's no allocation
  const certainty = $derived.by(() => (!allocation ? true : _certainty));
</script>

<span class="inline-highlight" class:inline-highlight--uncertain={certainty !== true} data-allocation={allocation}>
  {name}
  {#if !certainty}
    <span class="inline-highlight__uncertain">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="26" viewBox="0 0 12 33" fill="none">
        <path d={LINES_D} stroke="inherit" />
        <path transform="translate(0, 33)" d={LINES_D} stroke="inherit" />
      </svg>
    </span>
  {/if}
</span>

<style lang="scss">
  .inline-highlight {
    display: inline-flex;
    padding: 0rem 0.375rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0.25rem;
    background: white;
    color: black;
    stroke: black;
    border: 1px solid black;
    font-family: ABCSans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%; /* 1.5625rem */
    overflow: hidden;
    position: relative;
  }
  .inline-highlight--uncertain {
    padding-right: calc(15px + 0.37rem);
  }
  $parties: Any, ALP, CLP, GRN, IND, KAP, LIB, LNP, NAT, ONP, OTH, PUP, Teal, CA;
  @each $code in $parties {
    .inline-highlight:global([data-allocation='#{""+$code}']) {
      border: none;
      background: var(--a-#{$code});
      color: white;
      &.inline-highlight--uncertain {
        background: var(--u-#{$code});
        color: black;
        stroke: var(--a-#{$code});
      }
    }
  }
  .inline-highlight__uncertain {
    position: absolute;
    right: 0;
    top: 0;
    border-left: 2px solid white;
  }
</style>
