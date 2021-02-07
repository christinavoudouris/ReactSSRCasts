import React from 'react'
import { Route } from 'react-router-dom'
// import App from './App'
import Home from './components/Home'
/*import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'*/

export default () => {
  return <div>
    <Route exact path="/" component={Home} />
  </div>
}

/*export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]*/
