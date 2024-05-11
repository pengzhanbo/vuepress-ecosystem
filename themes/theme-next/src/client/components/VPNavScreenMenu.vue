<script lang="ts" setup>
import VPNavScreenMenuGroup from '@theme/VPNavScreenMenuGroup.vue'
import VPNavScreenMenuLink from '@theme/VPNavScreenMenuLink.vue'
import { useData } from '../composables/data.js'

const { theme } = useData()
</script>

<template>
  <nav v-if="theme.navbar" class="vpNavScreenMenu">
    <template v-for="item in theme.navbar" :key="item.text">
      <VPNavScreenMenuLink v-if="'link' in item" :item="item" />
      <VPNavScreenMenuGroup
        v-else
        :text="item.text || ''"
        :items="item.items"
      />
    </template>
  </nav>
</template>
