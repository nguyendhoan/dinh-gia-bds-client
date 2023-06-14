import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'assets/styles/tailwind.css'

// layouts

import Admin from 'layouts/Admin.js'
import Auth from 'layouts/Auth.js'

// views without layouts

import Index from 'views/Index.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/admin' component={Admin} />

      <Route path='/auth' component={Auth} />
      {/* add routes with layouts */}

      <Route path='/admin/settings' exact component={Index} />

      {/* add redirect for first page */}
      <Redirect from='*' to='/admin' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
