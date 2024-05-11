<script lang="ts" setup>
import VPFlyout from '@theme/VPFlyout.vue'
import { computed } from 'vue'
import { resolveRoutePath } from 'vuepress/client'
import type { NavItem, NavItemWithChildren } from '../../shared/index.js'
import { useData } from '../composables/data.js'
import { isActive } from '../utils/index.js'

const props = defineProps<{
  item: NavItemWithChildren
}>()

const { page } = useData()

const isChildActive = (navItem: NavItem): boolean => {
  if ('link' in navItem) {
    return isActive(
      page.value.path,
      resolveRoutePath(navItem.link),
      !!props.item.activeMatch,
    )
  } else {
    return navItem.items.some(isChildActive)
  }
}

const childrenActive = computed(() => isChildActive(props.item))
</script>

<template>
  <VPFlyout
    :class="{
      vpNavBarMenuGroup: true,
      active:
        isActive(page.path, item.activeMatch, !!item.activeMatch) ||
        childrenActive,
    }"
    :button="item.text"
    :items="item.items"
  />
</template>
