// holds the state and takes care of calling your reducer when you dispatch an action

import { createStore } from "redux"
import listApp from "../reducers/reducers"

const store = createStore(todoApp)
