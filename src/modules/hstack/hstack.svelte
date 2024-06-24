<script lang="ts">
	import { onMount } from 'svelte';
	import { className } from '../../utils/class-name.js';
	import { getElementHtml } from '../../utils/event-dom.js';

	// props
	let _class: string | false | undefined = undefined;
	export { _class as class };
	export let wheelScroll: boolean = false;
	export let mouseScroll: boolean = false;
	export let touchScroll: boolean = false;

	// states
	let container: HTMLElement | null = null;
	let items: any = [];
	let isDragging = false;
	let startX = 0;
	let scrollLeft = 0;

	onMount(() => {
		const ref = container;
		items = [...getElementHtml(ref?.children)];

		if (container) {
			if (wheelScroll) container.addEventListener('wheel', handleWheel);
			if (mouseScroll) {
				container.addEventListener('mousedown', handleMouseDown);
				container.addEventListener('mouseup', handleMouseUp);
				container.addEventListener('mousemove', handleMouseMove);
				container.addEventListener('mouseleave', handleMouseLeave);
			}
			if (touchScroll) {
				container.addEventListener('touchstart', handleTouchStart);
				container.addEventListener('touchmove', handleTouchMove);
				container.addEventListener('touchend', handleTouchEnd);
				container.addEventListener('touchcancel', handleTouchCancel);
			}
		}

		return () => {
			if (container) {
				if (wheelScroll) container.removeEventListener('wheel', handleWheel);
				if (mouseScroll) {
					container.removeEventListener('mousedown', handleMouseDown);
					container.removeEventListener('mouseup', handleMouseUp);
					container.removeEventListener('mousemove', handleMouseMove);
					container.removeEventListener('mouseleave', handleMouseLeave);
				}
				if (touchScroll) {
					container.removeEventListener('touchstart', handleTouchStart);
					container.removeEventListener('touchmove', handleTouchMove);
					container.removeEventListener('touchend', handleTouchEnd);
					container.removeEventListener('touchcancel', handleTouchCancel);
				}
			}
		};
	});

	function handleWheel(event: WheelEvent) {
		if (container) {
			container.scrollLeft += event.deltaY;
			event.preventDefault();
		}
	}

	// mouse
	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		startX = event.clientX - container!?.offsetLeft;
		scrollLeft = container?.scrollLeft || 0;
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		const x = event.clientX - container!?.offsetLeft;
		const walk = (x - startX) * 2;
		container!.scrollLeft = scrollLeft - walk;
	}

	function handleMouseLeave() {
		isDragging = false;
	}

	// touch
	function handleTouchStart(event: TouchEvent) {
		const touch = event.touches[0];
		isDragging = true;
		startX = touch.clientX - container!?.offsetLeft;
		scrollLeft = container?.scrollLeft || 0;
	}

	function handleTouchMove(event: TouchEvent) {
		if (!isDragging) return;
		const touch = event.touches[0];
		const x = touch.clientX - container!?.offsetLeft;
		const walk = (x - startX) * 2;
		container!.scrollLeft = scrollLeft - walk;
	}

	function handleTouchEnd() {
		isDragging = false;
	}

	function handleTouchCancel() {
		isDragging = false;
	}
</script>

<div class={className('mk-hstack', _class)} {...$$restProps}>
	<div class="scroll" bind:this={container}>
		<div class="scroll-content">
			<!-- slot: default -->
			<slot />
			<!-- /slot: default -->
		</div>
	</div>
</div>
