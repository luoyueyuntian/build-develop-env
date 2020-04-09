import { createStore } from 'redux'
import { reduce } from './reduces'

export const store = createStore(reduce)