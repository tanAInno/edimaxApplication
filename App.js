import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Tabbar from './Tabbar'
import UserDetail from './tabs/userdetail'
import UserEdit from './tabs/useredit'
import CallService from './tabs/callservice'
import Login from './tabs/login'
import Register from './tabs/register'
import Shopping from './tabs/shopping'
import store from './store'
import { Router, Scene, Drawer, ActionConst } from 'react-native-router-flux'
import MainScreen from './MainScreen';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="MainScreen" component={MainScreen} hideNavBar={1} />
                        <Scene key="UserDetail" component={UserDetail} hideNavBar={1} />
                        <Scene key="UserEdit" component={UserEdit} hideNavBar={1} />
                        <Scene key="Shopping" component={Shopping} hideNavBar={1} />
                        <Scene key="CallService" component={CallService} hideNavBar={1} />
                        <Scene key="Login" component={Login} hideNavBar={1} initial />
                        <Scene key="Register" component={Register} hideNavBar={1} />
                    </Scene>
                </Router>
            </Provider>
        )
    }

}

export default App;