import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Tabbar from './Tabbar'
import store from './store'


class App extends Component {

    render(){
        return(
            <Provider store={store}>
                <Tabbar/>
            </Provider>
        )
    }

}

export default App;