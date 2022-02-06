import { mount } from '@vue/test-utils'
import CurrencyUnit from '@/components/CurrencyUnit.vue'

describe('Component: CurrencyUnit', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CurrencyUnit)
  })
  
  test('Main Container is visible', () => {
    expect(wrapper.find('[data-test="main-container"]').exists()).toBe(true)
  })
  
  afterEach(() => {
    wrapper.destroy()
  })
})
