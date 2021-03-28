<template>
  <label class="filter">
    {{ name }}: <select :value="value" @change="$emit('update:value', $event.target.value)">
    <option value="">-------</option>
    <option :key="n.id" v-for="n in items">{{ n }}</option>
  </select>
  </label>
</template>

<script>
export default {
  props: ['name', 'items', 'value'],
  mounted () {
    console.log(this.value)
  }
}
</script>

<style lang="scss"></style>
