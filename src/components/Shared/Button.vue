<script setup lang="ts">
interface Props {
  type?: any;
  onClick: Function;
  kind?:
    | 'normal'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  fullWidth?: boolean;
  rounded?: string;
}

const emit = defineEmits(['click']);

withDefaults(defineProps<Props>(), {
  onClick: () => {},
  type: 'button',
  kind: 'normal',
  fullWidth: true,
  rounded: '5px',
});

async function onClick(event: MouseEvent) {
  emit('click', event);
}
</script>

<template>
  <button
    :type="type"
    :class="[`btn`, { 'full-width': fullWidth }, kind]"
    :style="{ borderRadius: rounded }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style>
.btn {
  background-color: var(--color-background-soft);
  border: 0;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.full-width {
  width: 100%;
}

.primary {
  background-color: var(--vt-c-primary);
  color: var(--vt-c-white);
}
</style>
