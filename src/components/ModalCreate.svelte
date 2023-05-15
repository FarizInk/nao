<script>
  import Modal from "../lib/Modal.svelte";
  import LoadingIcon from "./icons/LoadingIcon.svelte";
  import { modalCreate } from "../stores";

  let isLoading = false;
  let title = null;
  let activeTab = 0;
  const tabs = ["Simple", "Article"];
  const classTab = "rounded-md px-3 py-2 text-sm font-medium";

  const create = () => {
    isLoading = true;
    console.log("create action");
  };

  let titleInput = null
</script>

<Modal
  bind:isOpen={$modalCreate}
  maxW="max-w-lg"
  wrapperClass="flex items-end sm:items-center justify-center min-h-full p-4"
  initialFocus={titleInput}
>
  <div class="mx-6 mb-6 mt-5">
    <div class="mb-4">
      <div class="block">
        <nav class="flex space-x-4" aria-label="Tabs">
          <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
          {#each tabs as tab, i}
            <button
              type="button"
              class="{classTab} {activeTab === i
                ? 'bg-indigo-700 text-indigo-100'
                : 'text-gray-500 hover:text-gray-700'}"
              on:click={() => activeTab = i}
            >
              {tab}
            </button>
          {/each}
        </nav>
      </div>
    </div>

    <form class="space-y-6" on:submit|preventDefault={create}>
      <input
        id="create-title"
        type="text"
        class="input input-sm"
        placeholder="write text here..."
        bind:value={$title}
        bind:this={titleInput}
        disabled={isLoading}
      />

      <div class="flex justify-between items-center">
        <div />

        <button
          type="submit"
          class="btn-primary btn-md primary-color w-full"
          disabled={isLoading}
        >
          {#if isLoading}
            <LoadingIcon class="-ml-1 mr-2 h-4 w-4" />
          {/if}
          <span>Submit</span>
        </button>
      </div>
    </form>
  </div>
</Modal>
