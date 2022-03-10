<template>
  <q-page class="flex flex-center">
    <div v-for="item in todo" :key="item.id">
      {{item.title}}
    </div>
  </q-page>
</template>

<script>
import { defineComponent,computed } from "vue";
import {useStore} from "vuex"
export default defineComponent({
  name: "PageIndex",
  setup(){
    const store=useStore()
    store.dispatch('todo/getTodo')
    const todo=computed(()=>store.state.todo.todo)
    return{
      todo
    }
  }
});
</script>
