import React, { useEffect,useState } from 'react'
import AdminNavbar from '../../Navbar/AdminNavbar'
import {API} from '../../Backend';
import axios from 'axios';
import { token } from '../../store/Cart/actions';
import {Link} from 'react-router-dom'
import saved from '../../assests/bookmark_black.svg';
import Moment from 'react-moment';


const Home = () => {

    const [requests, setRequests] = useState()
    const [viewOrder, setViewOrder] = useState(true)
    const [filter, setFilter] = useState('all')
    const regg = 'sdklfhsdfe3klj432hrkljhsdf';

    useEffect(() => {
        GetRequests()
    }, [])

    const GetRequests = async()=>{
        const res =  await axios.get(`${API}/requests/get-all-request`,
         { headers: {"Authorization" : `Bearer ${token()}`} })

        if(res.error){
            return console.log(res.error)
         }
         return setRequests(res.data)
    }

     

    return (
        <div>
    <AdminNavbar/>
    <h3 className='mt-2 mb-3 text-center font-600 apple-font'>Bulk Form-Requests</h3>

    {requests && requests.length > 0 &&
        <div className='container d-flex justify-content-end'>
            <div className="btn-group">
            <button className="btn btn-sm btn-outline-dark
             dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">View order</button>
              <ul className="dropdown-menu">
                <li><span className="dropdown-item pointer"
                onClick={()=>setViewOrder(true)}>Newest to oldest</span></li>
                <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer"
                onClick={()=>setViewOrder(false)}>Oldest to newest</span></li>
                
            </ul>
            </div>
            

            <div className="btn-group">
            <button className="btn btn-sm btn-outline-dark
             dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">Filter</button>
              <ul className="dropdown-menu">
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('all')}>All</span></li>
                <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('unread')}>Unread</span></li>
                <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer"
                onClick={()=>setFilter('saved')}>Saved</span></li>
                {/* <li><hr className="dropdown-divider mt-1 mb-2"/></li>
                <li><span className="dropdown-item pointer" href="#">Separated link</a></li> */}
            </ul>
            </div>
        </div>
    }


    {requests && requests.length === 0 &&
    <h5 className='mt-5 mb-3 text-center font-500 text-secondary apple-font'>No Requests to show</h5>
    }
    <div className='container mt-5'>
        <div className="row">
    {requests && requests.length > 0 &&
    requests
    .sort((a,b)=>{var c = new Date(a.createdAt);
        var d = new Date(b.createdAt);
        if(viewOrder){
            return d-c
        }else{
           return c-d
        }
    })
    .filter(r => {
        if(filter === 'all'){
            return r
        }else if(filter === 'unread'){
            return r.RequestViewed === false;
        }else if(filter === 'saved'){
            return r.RequestImportant === true;
        }
    })
    .map(r => 
    
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12 mt-3" key={r._id}>
            <div className="card p-3">
            <div className="d-flex justify-content-end">
                {r.RequestImportant &&
                <div>
                <img src={saved}  title='Saved Request' alt="" />
                </div>
                }
                {!r.RequestViewed  && <div><span 
                 title='Request Unread' className="badge bg-dark">Unread</span></div> }

                { !r.RequestViewed && !r.RequestViewed && <div className='invisible'><span 
                className="badge bg-dark">Unread</span></div> }
                </div>

                
        <p className='mb-1 text-capitalize'>
        From: <Link to={`/${regg}/admin/req/${r._id}`}>{r.personName}</Link>,
           <span className='text-capitalize'> Company: {r.companyName}</span></p>
        <hr className='mb-1 mt-1'/>
        <p className='mb-1 small'>Intrested In:
         {r.disposableFaceMasks && '3Ply Disposable FaceMasks,'}
         {r.n95CupMask && ' N95 Cup Mask,'}
         {r.n95CupValveMask && ' N95 Cup Valve Mask'}
        </p>
        <p className="small mb-1 text-secondary">
            <Moment format="DD MMM YYYY">{r.createdAt}</Moment></p>
    </div>
            </div>
        
    )

    }
    </div>
    
    </div>
        </div>
    )
}

export default Home
