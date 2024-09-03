import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is something important</p>
            <div className='container w-180'>
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(5), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-100  bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div classNmae='d-inline h-100 fs-5'>
                Total Price</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
