<script lang="ts">
  /**
   * @file
   * Hexagon map.
   *
   * To make a faster map, SVG hexes are pre-rendered in `npm run build-data`.
   * Styles are applied to the pre-rendered hexes via dom manipulation in <HexMapGroups>
   */
  import { Tween } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import HexMapStateLabels from './HexMapStateLabels/HexMapStateLabels.svelte';
  import { setContext } from 'svelte';
  import HexMapKeyboardNav from './HexMapKeyboardNav/HexMapKeyboardNav.svelte';
  import HexMapFocusIndicator from './HexMapFocusIndicator/HexMapFocusIndicator.svelte';
  import { getInteractionHandlers } from './utils';
  import HexMapGroups from './HexMapGroups/HexMapGroups.svelte';
  import { fade } from 'svelte/transition';
  import HexMapArrowsFirstPreference from './HexMapArrows/HexMapArrowsFirstPreference.svelte';
  import HexMapArrowsSwing from './HexMapArrows/HexMapArrowsSwing.svelte';
  import { applyPaddingToViewbox, makeViewboxPaddingStore, makeSvgElStore } from './store';
  import hashPattern2x from '../../../public/Hash-four@2x.png';
  let {
    config = {},
    layout = {},
    allocations = {},
    focuses = {},
    certainties = {},
    /* A custom list of labels to show */
    labelsToShow = {},
    /** Show state labels */
    showStateLabels = false,
    /** Show all electorate labels */
    showElectorateLabels = false,
    /** When an electorate is focused, show the hex label */
    showFocusedElectorateLabels = false,
    /** Should the map transition between layouts - no for the web component*/
    isStaticLayout = false,
    /** Call back to this function when someone clicks the map*/
    onClick = ({ code }) => {},
    /** Call back to this function when someone hovers a hexagon*/
    onHover = ({ code }) => {},
    /** Call back to this function when someone focuses a hexagon via keyboard navigation*/
    onFocus = ({ code }) => {},
    /** Override the viewbox with your own */
    customViewbox = null,
    /** Receive the current value of the viewbox (excluding animation frames) */
    onViewboxChange = ({ newViewbox }) => {},
    /** Is the map intended to be clicked on? If so, we include HexMapKeyboardNav for accessibility porpoises*/
    isInteractive = false,
    /** Party for whom to show first preference arrows */
    arrowChart = 'None',
    /** Whether to show percent counted on the arrow chart */
    arrowChartPercentCounted = true,
    /** Should we show the caption on the arrow charts? */
    arrowChartCaption,
    /** which electorate is currently focused */
    selectedElectorate = null,
    /** Additional text to add to the alt text version of each electorate, e.g. `{ ADEL: 'ALP retain' }` */
    customElectorateAltText,
    /** An override for News Web*/
    showStateOutlinesOnTop = false,
    /** An inline map never animates */
    isInline = false,
    /** Which hexagon animation should we use? */
    hexFlip = 'None',
    /** optional alt text turns the svg into an img */
    altText = ''
  } = $props();
  let svgEl = $state<SVGElement>();
  let svgElWidth = $state(0);
  let svgRatio = $state(0);
  let userFocusedElectorate = $state<null | string>(null);
  let userHoveredElectorate = $state<null | string>(null);

  const { viewboxPadding } = makeViewboxPaddingStore();
  const { svgElCurrentScale } = makeSvgElStore();
  setContext('svgElCurrentScale', svgElCurrentScale);

  const initial = applyPaddingToViewbox(layout.viewbox, $viewboxPadding);
  const tweenOptions = {
    easing: cubicInOut,
    duration: isInline ? 0 : 1100
  };
  let viewboxX = new Tween(initial[0], tweenOptions);
  let viewboxY = new Tween(initial[1], tweenOptions);
  let viewboxWidth = new Tween(initial[2], tweenOptions);
  let viewboxHeight = new Tween(initial[3], tweenOptions);

  $effect(() => {
    const [newX, newY, newW, newH] = applyPaddingToViewbox(customViewbox || layout.viewbox, $viewboxPadding);
    viewboxX.set(newX);
    viewboxY.set(newY);
    viewboxWidth.set(newW);
    viewboxHeight.set(newH);
  });

  $effect(() => {
    onViewboxChange(layout.viewbox);
  });

  // When the svg el is first found in the page, get the ratio outta it
  $effect(() => {
    if (!svgEl || !!svgRatio) {
      return;
    }
    // calculate the ratio of the SVG on first render. This shouldn't change.
    const style = svgEl.getBoundingClientRect();
    svgRatio = style.height / style.width;
  });

  let interactionHandlers = $derived.by(() =>
    getInteractionHandlers({
      isInteractive,
      onClick,
      onHover: res => {
        userHoveredElectorate = res.code;
        onHover(res);
      }
    })
  );

  /** How much is the SVG scaled? We use the inverse scale to keep the hash
   *  pattern/font sizing consistent with other elements
   */
  $effect(() => {
    let _svgElWidth = svgElWidth;
    let _viewboxWidth = viewboxWidth.current;
    if (!_svgElWidth) {
      $svgElCurrentScale = 1;
      return;
    }
    /**
     * We need an extra 10% to get the hexagon pattern looking the same as the
     * non-scaled patterns.
     */
    const magicBuffer = 0.1;
    $svgElCurrentScale = _viewboxWidth / _svgElWidth + magicBuffer;
  });

  // Add alt text and proper role to the svg in cases where we've set alt text
  let accessibleProperties = $derived.by(() => {
    if (!altText) {
      return {};
    }
    return {
      'aria-label': altText,
      role: 'img'
    };
  });
</script>

<div class="hexmap" transition:fade={{ duration: 750 }}>
  <div
    class="hexmap__viz"
    class:hexmap__viz--vertical={svgRatio <= 1}
    data-svgratio={svgRatio || 'null'}
    style:aspect-ratio={svgRatio ? svgRatio.toFixed(3) : null}
    {...interactionHandlers}
    transition:fade={{ duration: isInline ? 0 : 250 }}
  >
    <svg
      bind:this={svgEl}
      viewBox={[viewboxX.current, viewboxY.current, viewboxWidth.current, viewboxHeight.current].join(' ')}
      bind:clientWidth={svgElWidth}
      {...accessibleProperties}
    >
      <defs id="defs1">
        <pattern
          id="uncertainty-hash"
          patternUnits="userSpaceOnUse"
          width="10.5"
          height="6"
          patternTransform={`scale(${$svgElCurrentScale.toFixed(2)})`}
          preserveAspectRatio="xMidYMid"
        >
          <image
            x="0"
            y="0"
            width="22"
            height="12"
            transform="scale(0.5)"
            transform-origin="top left"
            href={hashPattern2x}
          />
        </pattern>
      </defs>
      <HexMapGroups
        groups={config.groups}
        {isStaticLayout}
        {layout}
        {allocations}
        {focuses}
        {certainties}
        {showElectorateLabels}
        {showFocusedElectorateLabels}
        {labelsToShow}
        {showStateOutlinesOnTop}
        {hexFlip}
        isOutlineOnly={arrowChart !== 'None'}
      />

      <!-- focus/hover hexagon (from props) -->
      <HexMapFocusIndicator groups={config.groups} id={userFocusedElectorate} {layout} type="focus" />

      <!-- selected electorate double hexagon -->
      <HexMapFocusIndicator groups={config.groups} id={selectedElectorate} {layout} type="focus" />

      <!-- focus/hover hexagon (interactive) -->
      <HexMapFocusIndicator groups={config.groups} id={userHoveredElectorate} {layout} type="hover" />

      {#if arrowChart !== 'None'}
        {#if arrowChart === 'Labor/Coalition 2CP Swing'}
          <HexMapArrowsSwing groups={config.groups} {layout} {arrowChartPercentCounted} />
        {:else}
          <HexMapArrowsFirstPreference
            groups={config.groups}
            {layout}
            {arrowChart}
            {arrowChartPercentCounted}
            {arrowChartCaption}
          />
        {/if}
      {/if}
    </svg>

    {#if showStateLabels}
      <div class="hexmap__labels">
        <HexMapStateLabels labels={layout.labels} overlayLabels={layout.overlayLabels} />
      </div>
    {/if}
  </div>

  {#if isInteractive}
    <HexMapKeyboardNav
      {customElectorateAltText}
      groups={config.groups}
      {layout}
      onChange={newValue => {
        userFocusedElectorate = newValue;
      }}
      {onClick}
      {onFocus}
      {isSkippable}
    />
  {/if}
</div>

<style lang="scss">
  .hexmap {
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
    :global(*) {
      box-sizing: border-box;
    }
  }
  .hexmap__labels {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .hexmap svg {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .hexmap__viz {
    position: relative;
    margin: 0 auto;
    max-height: 100%;
  }
</style>
