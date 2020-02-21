import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

function Navbar(props){
    console.log(props)
    return(
        <nav>
        <div className="nav-wrapper" style={{background:"#6200ee"}}>
          <a href="#" className="brand-logo">Wishlist</a>
          <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/lifecyclehooks">LifeCycleHooks</NavLink></li>
            <li><NavLink to="/hooks">Hooks</NavLink></li>
            <li><NavLink to="/jokefetching">Joke Fetching</NavLink></li>
            <li><NavLink to="/context">Context API</NavLink></li>
            <li><NavLink to="/context2">Context 2</NavLink></li>
            <li><NavLink to="/reducer">Reducer</NavLink></li>
            <li><NavLink to="/contextandreducer">Context And Reducer</NavLink></li>
            <li><NavLink to="/redux1">Redux 1</NavLink></li>
            <li><NavLink to="/useSelectorAndUseDispatch">Use Selector And Use Dispatch</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Navbar);