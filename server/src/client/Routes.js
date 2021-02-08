import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        // component: HomePage,
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        // loadData,
        ...UsersListPage,
        path: '/users',
        // component: UsersListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
