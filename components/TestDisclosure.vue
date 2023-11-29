<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
  setup () {
    const items = ref([
      // Your items here
      { id: 1, title: 'Item 1', content: 'Content for item 1' },
      { id: 2, title: 'Item 2', content: 'Content for item 2' }
      // Add more items as needed
    ])

    const elements = ref([])

    const hideOther = (id) => {
      const items = elements.value.filter((elm) => {
        return elm.getAttribute('data-id') !== id.toString()
      })
      items.forEach(elm => elm.click())
    }

    const doClose = (close) => {
      close()
    }

    return { items, hideOther, elements, doClose }
  }
}
</script>

<template>
  <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
    <Disclosure
      v-for="(item, idx) in items"
      :key="item.id"
      v-slot="{ open, close }"
      :default-open="idx === 0"
    >
      <DisclosureButton
        class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      >
        <span>{{ item.title }}</span>
        <i
          :class="open ? 'duration-200' : 'duration-200 rotate-180'"
          class="w-5 h-5 text-purple-500 i-mdi-chevron-down-circle-outline"
        />
      </DisclosureButton>
      <DisclosurePanel
        class="panel transition-all opacity-0 duration-200 max-h-0 overflow-hidden"
        :class="open && 'max-h-16 opacity-100'"
        static
      >
        <div class="px-4 pt-4 pb-4 text-sm text-gray-500">
          {{ item.content }}
        </div>
      </DisclosurePanel>

      <button
        v-show="false"
        :ref="(el) => (elements[idx] = el)"
        :data-id="item.id"
        @click="doClose(close)"
      />
      <DisclosureStateEmitter :show="open" @show="hideOther(item.id)" />
    </Disclosure>
  </div>
</template>
