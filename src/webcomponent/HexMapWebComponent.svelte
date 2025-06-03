<svelte:options
  customElement={{
    tag: 'abcnews-hexmap',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import HexMap from '../components/HexMap/HexMap.svelte';
  import StyleRoot from '../components/StyleRoot/StyleRoot.svelte';
  import layouts from '../../data/appdata-layouts.json';
  import config from '../../data/appdata-built.json';
  import { electoratesByCode } from '../lib/hashConfig/schema';
  import { hexToPx } from '../lib/utils';
  let {
    allocations = {},
    certainties = {},
    focuses = {},
    showStateLabels = false,
    showElectorateLabels = false,
    layout = 'COUNTRY',
    selectedElectorate = null,
    customViewbox = null,
    onClick = () => {},
    onHover = () => {},
    onFocus = () => {},
    onApi = () => {},
    onViewboxChange = () => {},
    isStaticLayout = true,
    isInteractive = true,
    isSkippable = true,
    colours,
    customElectorateAltText = {},
    areStateOutlinesOnTop
  } = $props();

  let rootEl = $state<HTMLDivElement>();

  let layoutDefinition = $derived.by(() => layouts[layout]);

  /**
   * Get a screen coordinate from the given SVG coordinate
   */
  function svgToScreenCoord(x, y, svg, screen = true) {
    const matrix = screen ? svg.getScreenCTM() : svg.getCTM(); // Get the transformation matrix
    const point = svg.createSVGPoint();
    point.x = x;
    point.y = y;
    const transform = point.matrixTransform(matrix);
    return [transform.x, transform.y].map(Number);
  }

  /**
   * Get the screen and SVG coords for the given hexagon id
   */
  function getHex(id: string) {
    const hex = electoratesByCode[id];
    const groupOffset = layoutDefinition.positions[hex?.group];
    if (!rootEl) {
      return;
    }
    const svg = rootEl.querySelector('svg');
    if (!hex || !groupOffset || !svg) {
      throw new Error(`Could not find hexagon with id ${id}`);
    }
    /** It's unclear why we need this offset, but the coords come out slightly off without it */
    const mysteryOffset = [-0.5, -1];
    const [offsetX, offsetY] = hexToPx([groupOffset[0] + mysteryOffset[0], groupOffset[1] + mysteryOffset[1]], '').map(
      Number
    );
    const svgX = Number(hex.coordPx[0] + offsetX);
    const svgY = Number(hex.coordPx[1] + offsetY);

    const [screenX, screenY] = svgToScreenCoord(svgX, svgY, svg);
    const [containerX, containerY] = svgToScreenCoord(svgX, svgY, svg, false);
    return {
      code: id,
      screenCoord: [screenX, screenY],
      containerCoord: [containerX, containerY],
      svgCoord: [svgX, svgY]
    };
  }

  function focusHex(id) {
    const buttonElement = rootEl?.querySelector(`.hexmapkeyboardnav button[data-id="${id}"]`);
    if (!(buttonElement instanceof HTMLButtonElement)) {
      return;
    }
    buttonElement.focus();
  }

  $effect(() => {
    if (!onApi) {
      return;
    }
    onApi({ getHex, focusHex });
  });
</script>

<StyleRoot {colours} bind:rootEl={rootEl} />
<div bind:this={rootEl}>
  <HexMap
    {config}
    layout={layoutDefinition}
    {allocations}
    {certainties}
    {focuses}
    {showStateLabels}
    {showElectorateLabels}
    {onClick}
    {onHover}
    {onFocus}
    {selectedElectorate}
    {customViewbox}
    {isStaticLayout}
    {isInteractive}
    {isSkippable}
    {onViewboxChange}
    {customElectorateAltText}
    showStateOutlinesOnTop={areStateOutlinesOnTop}
  />
</div>
