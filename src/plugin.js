import vueLegend from './vue-legend/index.vue'

export default {
  install (Vue) {
    Vue.component(vueLegend.name, vueLegend)
  }
}
export { vueLegend }
