import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './Counter/Counter.slice'
import { Description } from './Description.component'

describe('Description component', () => {
  it('renders the correct styling', () => {
    const store = createStore(combineReducers({ counter: counterReducer }))
    const wrapper = mount(
      <Provider store={store}>
        <Description />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
