import React from 'react'

const Toast = ({msg, handleShow, bgColor}) => {
    return (
        <div className={`toast show position-fixed text-light ${bgColor}`}
        style={{top: '5px', right: '5px', minWidth: '300px', zIndex: 10000000, opacity:"0.9"}}>
            <div className={`toast-header text-light ${bgColor}`}>
                {/* <img/> */}
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button className="ms-5"
                data-dismiss="toast" style={{outline: 'none'}}
                onClick={handleShow}>
                    &times;
                </button>
            </div>
            <div className="toast-body  " style={{textAlign:"start"}}>
                {msg.body }
            </div>
            {msg.spinner=="wait"&&<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
        </div>
    )
}

export default Toast