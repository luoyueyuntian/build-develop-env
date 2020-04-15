import { createStore } from 'redux'
import { reduces } from './reduces'
import initData from './data'

export const store = createStore(reduces, initData)
