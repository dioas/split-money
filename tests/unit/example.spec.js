import { mount } from '@vue/test-utils'
import Home from '@/App.vue'
import HomeIndex from '@/views/Home'
import Button from '@/components/ButtonSplit'
import InputSplit from '@/components/InputSplit'
import TagSplit from '@/components/InputSplit'

test('renders correctly', () => {
  const wrapper = mount(Home)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeIndex)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
test('renders correctly', () => {
  const wrapper = mount(Button)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Button)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

test('renders correctly', () => {
  const wrapper = mount(Button)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Button)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
test('renders correctly', () => {
  const wrapper = mount(InputSplit)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputSplit)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

test('renders correctly', () => {
  const wrapper = mount(InputSplit)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputSplit)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
test('renders correctly', () => {
  const wrapper = mount(TagSplit)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TagSplit)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

test('renders correctly', () => {
  const wrapper = mount(TagSplit)
  expect(wrapper.element).toMatchSnapshot()
})
describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TagSplit)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})