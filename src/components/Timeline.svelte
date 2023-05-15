<script>
  import FaceFrownIcon from "./icons/FaceFrownIcon.svelte";
  import FaceSmileIcon from "./icons/FaceSmileIcon.svelte";
  import FireIcon from "./icons/FireIcon.svelte";
  import HandThumbIcon from "./icons/HandThumbIcon.svelte";
  import HeartIcon from "./icons/HeartIcon.svelte";

  export let type = "text";
  export let connector = "bottom";
  export let icon = null;
  export let date = null;
  export let link = null;
  export let title = null;
  export let description = null;
  let clazz = "";
  export { clazz as class };

  let icons = [
    { name: "fire", color: "bg-red-600", component: FireIcon },
    { name: "face-frown", color: "bg-yellow-600", component: FaceFrownIcon },
    { name: "face-smile", color: "bg-green-600", component: FaceSmileIcon },
    { name: "hand-thumb", color: "bg-blue-600", component: HandThumbIcon },
    { name: "heart", color: "bg-pink-600", component: HeartIcon },
  ];

  let selectedIcon = icons.find((type) => type.name == icon) ?? null;

  const generateConnectorClass = () => {
    let c = [];
    if (connector.includes("bottom")) {
      c.push("-bottom-6");
    }

    if (connector.includes("top")) {
      c.push("-top-6");
    } else {
      c.push("top-0")
    }

    if (c.length >= 1) {
      return c.join(" ")
    } else {
      // return "h-6"
      return ""
    }
  };
</script>

<li class="relative flex gap-x-4 {clazz}">
  <div
    class="absolute left-0 flex w-6 justify-center {generateConnectorClass()}"
  >
    <div class="w-px bg-indigo-200 dark:bg-indigo-800" />
  </div>
  {#if selectedIcon !== null}
    <div
      class="relative flex h-6 w-6 flex-none items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div
        class="flex justify-between items-center {selectedIcon.color} rounded-full p-1.5"
      >
        <svelte:component
          this={selectedIcon.component}
          class="h-4 w-4 flex-shrink-0 text-white"
        />
      </div>
    </div>
  {:else}
    <div
      class="relative flex h-6 w-6 flex-none items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div
        class="h-1.5 w-1.5 rounded-full bg-indigo-100 dark:bg-indigo-800 ring-1 ring-indigo-800 dark:ring-indigo-300"
      />
    </div>
  {/if}

  {#if type === "text"}
    <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500">
      <span class="font-medium text-gray-900 dark:text-gray-100">
        {title ?? ""}
      </span>
      {description ?? ""}
    </p>
    {#if date !== null}
      <time
        datetime={date}
        class="flex-none py-0.5 text-xs leading-5 text-gray-500"
      >
        {date ?? ""}
      </time>
    {/if}
  {:else}
    <div
      class="flex-auto rounded-md p-3 ring-1 ring-inset bg-indigo-100 dark:bg-transparent ring-indigo-800 hover:shadow-xl"
    >
      <div class="flex justify-between gap-x-4">
        <div class="py-0.5 text-xs leading-5 text-gray-500">{date ?? ""}</div>
        <a href={link} class="flex-none py-0.5 text-xs leading-5 text-gray-500">
          Read More
        </a>
      </div>
      <p class="text-sm leading-6 text-gray-900 dark:text-gray-100">
        {title ?? ""}
      </p>
    </div>
  {/if}
</li>
