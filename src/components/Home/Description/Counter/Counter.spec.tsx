import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { Counter } from './Counter.component'
import { counterReducer } from './Counter.slice'

describe('Counter component', () => {
  it('renders the corrrect styling', () => {
    const store = createStore(combineReducers({ counter: counterReducer }))
    const wrapper = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    expect(wrapper.childAt(0)).toMatchSnapshot()
    wrapper.unmount()
  })

  it('increments the counter when button is clicked', () => {
    const store = createStore(combineReducers({ counter: counterReducer }))
    const wrapper = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    wrapper.find("[data-testid='increment']").simulate('click')
    expect(wrapper.find('p').text()).toBe('Count: 1')
    wrapper.unmount()
  })

  it('decrements the counter when button is clicked', () => {
    const store = createStore(combineReducers({ counter: counterReducer }))
    const wrapper = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    wrapper.find("[data-testid='decrement']").simulate('click')
    expect(wrapper.find('p').text()).toBe('Count: -1')
    wrapper.unmount()
  })
})
