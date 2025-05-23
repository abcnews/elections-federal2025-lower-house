<script lang="ts">
  import { allocationMap } from '../../../lib/hashConfig/schema';
  import Circle from '../Circle/Circle.svelte';
  import { ContextMenu } from '@abcnews/components-builder';
  import { arrowDataFormatter } from '../../../components/HexMap/HexMapArrows/utils';
  import { hashConfig } from '../../../lib/hashConfig/svelteStore';
  import { tick } from 'svelte';
  // import HexagonRedistribute from './HexagonRedistribute/HexagonRedistribute.svelte';
  let { position = [0, 0], electorate = {}, onClose = () => {} } = $props();
  let allocation = $derived.by(() => $hashConfig.allocations[electorate.id]);
  $effect(() => {
    if (!electorate?.id) {
      alert("This electorate has no ID and can't be modified");
      onClose();
    }
  });
</script>

{#if electorate?.id}
  <div class="hexagon-context-menu">
    <ContextMenu {position} {onClose}>
      <h1 class="section" style="white-space:pre-wrap;">
        <strong>{electorate.name}</strong>
        <small style="opacity:0.5">{electorate.id}</small>
      </h1>
      <hr />
      <!-- <HexagonRedistribute {electorate} />
  <hr /> -->
      {#if typeof $arrowDataFormatter === 'function'}
        <div class="section">
          {$arrowDataFormatter(electorate.id)}
        </div>
        <hr />
      {/if}

      <label class="item">
        <div class="section">
          <input
            type="checkbox"
            checked={$hashConfig.focuses[electorate.id]}
            onchange={e => {
              $hashConfig.focuses = {
                ...$hashConfig.focuses,
                [electorate.id]: (e.target as HTMLInputElement)?.checked
              };
              onClose();
            }}
          /> Focused
        </div>
      </label>
      <label class="item">
        <div class="section">
          <input
            type="checkbox"
            disabled={$hashConfig.showElectorateLabels || $hashConfig.showFocusedElectorateLabels}
            checked={$hashConfig.labelsToShow[electorate.id]}
            onchange={e => {
              $hashConfig.labelsToShow = {
                ...$hashConfig.labelsToShow,
                [electorate.id]: (e.target as HTMLInputElement)?.checked
              };
              onClose();
            }}
          /> Show Label
        </div>
      </label>
      <label class="item">
        <div class="section">
          <input
            type="checkbox"
            checked={$hashConfig.certainties[electorate.id]}
            onchange={e => {
              $hashConfig.certainties = {
                ...$hashConfig.certainties,
                [electorate.id]: (e.target as HTMLInputElement)?.checked
              };
              onClose();
            }}
          /> Is certain
        </div>
      </label>
      <hr />
      <div class="section">
        <ul class="menu menu--double">
          {#each Object.values(allocationMap).filter(item => item !== 'Any') as allocationOption}
            <li>
              <button
                class="item"
                disabled={allocation === allocationOption}
                onclick={e => {
                  e.preventDefault();
                  $hashConfig.allocations = {
                    ...$hashConfig.allocations,
                    [electorate.id]: allocationOption === 'None' ? null : allocationOption
                  };
                  onClose();
                }}
              >
                <Circle allocation={allocationOption} />
                {allocationOption}
              </button>
            </li>
          {/each}
        </ul>
      </div>
      <hr />
      <div class="section">
        Election guide
        <div style="display:flex;gap:.5rem;align-items:center">
          <a
            class="item section"
            href={`https://www.abc.net.au/news/elections/federal/2025/guide/${electorate.id?.toLowerCase()}`}
            target="_blank"
          >
            2025
          </a>

          <a
            class="item section"
            href={`https://www.abc.net.au/news/elections/federal/2022/guide/${electorate.id?.toLowerCase()}`}
            target="_blank"
          >
            2022
          </a>
          <a
            class="item section"
            href={`https://www.abc.net.au/news/elections/federal/2019/guide/${electorate.id?.toLowerCase()}`}
            target="_blank"
          >
            2019
          </a>
        </div>
      </div>
      <hr />
      <button
        class="item"
        onclick={e => {
          e.preventDefault();
          const marker = `#electionresultsVER1V2ELECTORATE${electorate?.id?.toLowerCase()}`;
          navigator.clipboard.writeText(marker).catch(() => {
            alert(`Could not write to clipboard. The marker is:\n${marker}`);
          });
          onClose();
        }}
      >
        <div class="section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-copy"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            >
            </path>
          </svg>
          Copy result card embed
        </div>
      </button>
    </ContextMenu>
  </div>
{/if}

<style lang="scss">
  h1 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  .menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .menu--double {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 0.25rem;
    & li {
      white-space: nowrap;
    }
  }
  .section {
    padding: 0.75rem;
  }

  .item,
  button.item {
    display: block;
    width: 100%;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    margin: 0 !important;
    font-size: 1rem;
    &:focus-visible,
    &:hover {
      background: Highlight;
      color: HighlightText;
    }
  }
  hr {
    border: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--border);
  }
  @keyframes success {
    from {
      outline: 0px solid rgb(114, 191, 114);
    }
    to {
      outline: 10px solid rgb(114, 191, 114, 0);
    }
  }
</style>
