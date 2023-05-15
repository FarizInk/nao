<script>
  import { onMount } from "svelte";
  import ModalSignIn from "./components/ModalSignIn.svelte";
  import Timeline from "./components/Timeline.svelte";
  import CpuChipIcon from "./components/icons/CpuChipIcon.svelte";
  import tinykeys from "tinykeys";
  import { modalCreate, modalSignIn } from "./stores";
  import ModalCreate from "./components/ModalCreate.svelte";

  const stickyDateClass = "sticky top-0 py-2 bg-gray-900 z-10";

  onMount(() => {
    tinykeys(window, {
      "$mod+KeyK": () => {
        alert("Either 'Control+u' or 'Meta+u' were pressed");
      },
    });
  });

  const create = () => {
    modalCreate.set(true)
  }
</script>

<ModalSignIn />
<ModalCreate />
<div
  class="bg-gray-50 dark:bg-gray-900 min-w-screen min-h-screen text-dark dark:text-white"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="mx-auto max-w-3xl">
      <!-- Content goes here -->
      <div class="mb-10 text-center">
        <div class="flex justify-center items-center mb-5">
          <button type="button" on:click={() => create()}>
            <CpuChipIcon class="h-14" />
          </button>
        </div>
        <p class="text-xs">An atomic movement from my 🧠 and 🫀</p>
      </div>

      <ul class="space-y-6 pb-10">
        <Timeline description="SpellsHand created Nao" connector="" />
      </ul>
    </div>
  </div>
</div>
