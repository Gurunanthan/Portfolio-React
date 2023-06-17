import React from 'react'
import './App.css'
import { propTypes } from 'react-bootstrap/esm/Image'
const Navbar = (props) => {
  return (
    <div>
        <div id="navbar"class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom px-5" style={{background:"#3333"}}>
            <a style={{color: '#fff'}} href="./index.html" class="d-flex align-items-center link-body-emphasis text-decoration-none  pt-2">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>E-COMM</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"/>
              </svg>
              <span class="fs-4">{props.name}</span>
            </a>
          <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto pt-2 px-2 ">
            <a style={{color: '#fff'}} class="me-3 py-2 link-body-emphasis text-decoration-none " href="#aboutme">About Me</a>
            <a style={{color: '#fff'}} class="me-3 py-2 link-body-emphasis text-decoration-none " href="#projects">Project</a>
            <a style={{color: '#fff'}} class="py-2 link-body-emphasis text-decoration-none " href="#email">E-Mail</a>
          </nav>
        </div>
        <div>
          
        </div>
    </div>
  )
}
Navbar.propTypes={
  name:propTypes.string,
}

Navbar.default={
  name:'your name',
}


export default Navbar