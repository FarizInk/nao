<script>
  import Modal from "../lib/Modal.svelte";
  import LoadingIcon from "./icons/LoadingIcon.svelte";
  import { modalSignIn } from "../stores";

  let isLoading = false;
  let password = null;
  const login = () => {
    isLoading = true;
    console.log('login action');
  };
</script>


<Modal bind:isOpen={$modalSignIn} maxW="max-w-sm" wrapperClass="flex items-end justify-center min-h-full p-4">
  <div class="mx-6 mb-6 mt-5">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <form class="space-y-6" on:submit|preventDefault={login}>
        <div>
          <label for="login-password" class="block text-md font-medium text-2"> Password </label>
          <div class="mt-1">
            <input
              id="login-password"
              type="password"
              placeholder="enter password here..."
              class="input input-sm"
              bind:value={$password}
              disabled={isLoading}
            />
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div></div>

          <button type="submit" class="btn-primary btn-md primary-color w-full" disabled={isLoading}>
            {#if isLoading}
              <LoadingIcon class="-ml-1 mr-2 h-4 w-4"/>
            {/if}
            <span>Enter</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</Modal>
