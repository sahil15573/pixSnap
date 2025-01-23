import React from 'react'

const Navbar = ({setSearch}) => {
  return (
    <>
    <div className='nav mt-3'>
        <div className="button btn btn-outline-primary mx-3"
        onClick={()=>setSearch("nature")}>Nature</div>
        <div className="button btn btn-outline-success mx-3"
        onClick={()=>setSearch("travel")}>Travel</div>
        <div className="button btn btn-outline-warning mx-3"
        onClick={()=>setSearch("city")}>City</div>
        <div className="button btn btn-outline-info mx-3"
        onClick={()=>setSearch("cars")}>Cars</div>
        <div className="button btn btn-outline-primary mx-3"
        onClick={()=>setSearch("fashion")}>Fashion</div>
        <div className="button btn btn-outline-success mx-3"
        onClick={()=>setSearch("animals")}>Animals</div>
        <div className="button btn btn-outline-warning mx-3"
        onClick={()=>setSearch("technology")}>Technology</div>
        <div className="button btn btn-outline-info mx-3"
        onClick={()=>setSearch("business")}>Business & Finance</div>
        <div className="button btn btn-outline-primary mx-3"
        onClick={()=>setSearch("tokyo")}>Tokyo</div>
        <div className="button btn btn-outline-success mx-3"
        onClick={()=>setSearch("dubai")}>Dubai</div>
      
    </div>

    <div className="container my-4" style={{width: '780px'}}>
        <div className='mb-3'>
            <input type="text" className='form-control bg-dark text-light' id='' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    </div>
    </>
  )
}

export default Navbar;