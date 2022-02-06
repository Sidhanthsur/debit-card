import { mount } from '@vue/test-utils'
import AddNewCardModal from '@/components/AddNewCardModal.vue'

describe('Add new card modal', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(AddNewCardModal)
  })
  
  test('Main Container is visible', () => {
    expect(wrapper.find('[data-test="main-container"]').exists()).toBe(true)
  })
  
  test('Input Container is visible', () => {
    expect(wrapper.find('[data-test="input-container"]').exists()).toBe(true)
  })
  
  test('Submit button is visible', () => {
    expect(wrapper.find('[data-test="submit-button"]').exists()).toBe(true)
  })
  
  test('Cancel button is visible', () => {
    expect(wrapper.find('[data-test="cancel-button"]').exists()).toBe(true)
  })
  
  test('Submit button with incorrect input shows error message', async () => {
    wrapper.vm.name="first" // incorrect input
    wrapper.find('[data-test="submit-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-test="error-container"]').exists()).toBe(true)
  })
  
  test('Submit button with correct input emits "on-submit"', async () => {
    wrapper.vm.name="first last"
    wrapper.find('[data-test="submit-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('on-submit')).toBeTruthy()
  })
  
  afterEach(() => {
    wrapper.destroy()
  })
})
