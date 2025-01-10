<template>
  <v-container>
    <h1>Mapa de Iluminação Pública</h1>
    <map-view />
  </v-container>
</template>

<script>
import MapView from '@/components/map/map-view.vue'

export default {
  components: {
    MapView,
  },
}
</script>
