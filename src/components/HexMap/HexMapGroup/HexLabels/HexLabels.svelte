<script lang="ts">
  let { hexes, allocations, labelsToShow = {}, showElectorateLabels = false } = $props();

  let labels = $derived.by(() => {
    if (showElectorateLabels) {
      return hexes;
    }
    return hexes.filter(({ id }) => labelsToShow[id]);
  });
</script>

<g class="hexlabels">
  {#each labels as { id, coordPx, shortName }}
    <g transform={`translate(${coordPx.join(' ')})`}>
      <text class="hexlabels__text" class:hexlabels__text--allocation={allocations[id]}>
        <!-- {multiLineLabel
      ? multiLineLabel.map((line, index) => (
          <tspan key={index} x="0" y="-0.6em" dy={`${index * 1.2}em`}>
            {line}
          </tspan>
        ))
      : label} -->
        {shortName}
      </text>
    </g>
  {/each}
</g>

<style lang="scss">
  .hexlabels {
    pointer-events: none;
  }
  .hexlabels__text {
    transform: rotate(30deg) translate(0, 0.3em);
    fill: black;
    font-size: 9px;
    font-family: sans-serif;
    text-anchor: middle;
  }
  .hexlabels__text--allocation {
    fill: white;
  }
</style>
