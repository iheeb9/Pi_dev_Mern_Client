import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


export default function SideBar() {
  return (
    <div className="app-sidebar sidebar-shadow">
    <div className="app-header__logo">
      <div className="logo-src" />
      <div className="header__pane ml-auto">
        <div>
          <button
            type="button"
            className="hamburger close-sidebar-btn hamburger--elastic"
            data-class="closed-sidebar"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div className="app-header__mobile-menu">
      <div>
        <button
          type="button"
          className="hamburger hamburger--elastic mobile-toggle-nav"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </div>
    <div className="app-header__menu">
      <span>
        <button
          type="button"
          className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
        >
          <span className="btn-icon-wrapper">
            <i className="fa fa-ellipsis-v fa-w-6" />
          </span>
        </button>
      </span>
    </div>
    <div className="scrollbar-sidebar">
      <div className="app-sidebar__inner">
        <ul className="vertical-nav-menu">
          <li className="app-sidebar__heading">Admin</li>
          <li>
            <a href="/ListUsers" className="mm-active">
              <i className="metismenu-icon pe-7s-rocket" />
             List Users
            </a>
          </li>
          <li className="app-sidebar__heading">Product Management</li>
          
         
          <li>
            <a href="/listp">
              <i className="metismenu-icon pe-7s-display2" />
              Products List
            </a>
            <a href="/addp">
              <i className="metismenu-icon pe-7s-display2" />
             Add Product
            </a>
          </li>
          <li className="app-sidebar__heading">Annonces</li>
          <li>
            <a href="dashboard-boxes.html">
              <i className="metismenu-icon pe-7s-display2" />
            List Annonces
            </a>
          </li>
          <li className="app-sidebar__heading">Auctions</li>
          <li>
            <a href="forms-controls.html">
              <i className="metismenu-icon pe-7s-mouse"> </i>List Auctions
            </a>
          </li>
       
          
          
         
        </ul>
      </div>
    </div>
  </div>
  )
}

