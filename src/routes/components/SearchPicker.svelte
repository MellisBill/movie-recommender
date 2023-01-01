<script lang="ts">

    export let icon: string;
    export let heading: string;

</script>

<div class="mx-2 py-4 border-solid border-gray-400 border-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-30">
    <div class="flex justify-center text-7xl py-8">{icon}</div>
    <div class="text-center text-xl text-semibold ">{heading}</div>
</div>