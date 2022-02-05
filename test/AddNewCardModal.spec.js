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
})
