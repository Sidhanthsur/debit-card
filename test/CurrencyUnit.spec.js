import { mount } from '@vue/test-utils'
import CurrencyUnit from '@/components/CurrencyUnit.vue'

describe('Component: CurrencyUnit', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CurrencyUnit, {
      propsData: {
        currencyValue: 5000
      }
    })
  })
  
  test('Main Container is visible', () => {
    expect(wrapper.find('[data-test="main-container"]').exists()).toBe(true)
  })

  test('Computed property: currencyValueFormatted returns the correct value', () => {
    expect(wrapper.vm.currencyValueFormatted).toBe('5,000')
  })
  
  afterEach(() => {
    wrapper.destroy()
  })
})
