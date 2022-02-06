import { mount } from '@vue/test-utils'
import CancelCard from '@/components/CancelCard.vue'

describe('Component: CancelCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CancelCard)
  })
  
  test('Main Container is visible', () => {
    expect(wrapper.find('[data-test="main-container"]').exists()).toBe(true)
  })

  test('"Yes" button emits "remove-card" event', async () => {
    wrapper.find('[data-test="yes-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('remove-card')).toBeTruthy()
  })

  test('"No" button emits "cancel" event', async () => {
    wrapper.find('[data-test="no-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('cancel')).toBeTruthy()
  })
  
  afterEach(() => {
    wrapper.destroy()
  })
})
