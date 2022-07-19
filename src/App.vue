<template>
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="locale">{{ locale }}</option>
  </select>
  <p>{{ $t('message.hello') }}</p>
  <p>{{ $d(date, 'long') }}</p>
  <p></p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const date = new Date(2021, 5, 10, 18)
    return { date }
  },
})
</script>
