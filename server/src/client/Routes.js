import React from 'react'
// import App from './App'
import Home from './components/Home'
import UsersList, { loadData } from './components/UsersList'
// import UsersListPage from './pages/UsersListPage'
// import NotFoundPage from './pages/NotFoundPage'
// import AdminsListPage from './pages/AdminsListPage'

export default [
  /*{
    ...App,
    routes: [*/
      {
        // ...Home,
        path: '/',
        component: Home,
        exact: true
      },
      /*{
        ...AdminsListPage,
        path: '/admins'
      },*/
      {
        loadData,
        // ...UsersListPage,
        path: '/users',
        component: UsersList
      },
      /*{
        ...NotFoundPage
      }
    ]
  }*/
]
