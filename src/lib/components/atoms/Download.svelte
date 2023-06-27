<script lang="ts">
	export let mediaItemUrl: string
	export let title: string
	export let fileSize: number
  export let mimeType: string

	// function to convert file size in bytes to human-readable format
	const formatFileSize = (bytes: number): string => {
		if (bytes < 1024) return `${bytes} B`
		const kilobytes = bytes / 1024
		if (kilobytes < 1024) return `${kilobytes.toFixed(2)} KB`
		const megabytes = kilobytes / 1024
		if (megabytes < 1024) return `${megabytes.toFixed(2)} MB`
		const gigabytes = megabytes / 1024
		return `${gigabytes.toFixed(2)} GB`
	}
</script>

<div class="flex content-center">
<div class="mt-12 p-[0.1rem] mx-auto border rounded bg-gradient-to-r from-salmon to-blue-parrot hover:bg-gradient-to-l hover:[&>*]:bg-salmon inline-flex transition-colors duration-300">
	<a href={mediaItemUrl} class="p-3 px-24 bg-white flex flex-col gap-1 items-center align-center" target="_blank">
		<span class="leading-[0.7] text-5xl font-arsonist ">↓</span>
		<p class="text-center !m-0">
			{title}
		</p>
		<p class="text-center !m-0">[{formatFileSize(fileSize)}]</p>
	</a>
</div>
</div>

