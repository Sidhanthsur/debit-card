import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('Component: AppHeader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(AppHeader)
  })
  
  test('Main Container is visible', () => {
    expect(wrapper.find('[data-test="main-container"]').exists()).toBe(true)
  })
  
  afterEach(() => {
    wrapper.destroy()
  })
})
