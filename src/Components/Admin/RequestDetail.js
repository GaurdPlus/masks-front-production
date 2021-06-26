import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { API } from '../../Backend'
import AdminNavbar from '../../Navbar/AdminNavbar'
import { token } from '../../store/Cart/actions'
import back from '../../assests/backspace2.svg';
import phone from '../../assests/phoneicon.svg';
import mail from '../../assests/mailicon.svg';
import saved from '../../assests/bookmark_black.svg';
import unsaved from '../../assests/bookmark_border_black.svg';
import {useHistory} from 'react-router-dom'



const RequestDetail = ({match}) => {

    const [request, setRequest] = useState(null)

    const id = match.params.id;
    const history = useHistory();

    useEffect(() => {
        GetRequests()
    }, [])

    useEffect(() => {
        if(request && !request.RequestViewed){
            ReqViewed(true)
        }
    }, [request])

    const GetRequests = async()=>{
        const res =  await axios.get(`${API}/requests/get-request/${id}`,
         { headers: {"Authorization" : `Bearer ${token()}`} })

        if(res.error){
            return console.log(res.error)
         }
         return setRequest(res.data)
    }


    const ReqViewed = async (data) =>{
        // e.preventDefault();
        const RequestViewed = data;
        // console.log(data)
        const res =  await axios.put(`${API}/requests/edit-request/${id}`,{RequestViewed
        }
         ,{ headers: {"Authorization" : `Bearer ${token()}`} })

         console.log(res.data)
        if(res.error){
         return console.log(res.error)
         }
         return setRequest(res.data)
    }


    const MarkSaved = async (data) =>{
        // e.preventDefault();
        const RequestImportant = data;
        // console.log(data)
        const res =  await axios.put(`${API}/requests/edit-request/${id}`,{RequestImportant}
         ,{ headers: {"Authorization" : `Bearer ${token()}`} })

         console.log(res.data)
        if(res.error){
         return console.log(res.error)
         }
         return setRequest(res.data)
    }
    // /edit-request/:id
    


    return (
        < >
            <AdminNavbar/>
            <div className="container mt-5 mb-5 ">
            <img src={back} className='pointer' onClick={()=>history.push('/sdklfhsdfe3klj432hrkljhsdf/admin')} alt="back space" />
            <h3 className='font-900 apple-font text-center'>Request Detail</h3>
            {/* <p>{JSON.stringify(request)}</p> */}

            {request ? 
        <>
        <div className="d-flex justify-content-end">
                <button className='btn btn-outline-dark btn-sm'>
                    {!request.RequestImportant?
                    <div onClick={()=>MarkSaved(true)}> <img src={unsaved} alt="" /> Save Request</div>:
                    <div onClick={()=>MarkSaved(false)}> <img src={saved} alt="" /> Request Saved</div>
                }
                </button>
            </div>

            <div className="mt-5">
                <div className="row">
                    <div className="col col-md-8 offset-md-2 col-sm-12 col-12">
                    {/* <h5 className='font-900 apple-font'>Request from:</h5> */}


                {/* <hr /> */}
                <div className="row">
                <p className='fw-bold text-decoration-underline'>Personal details:</p>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Person Name: </span> <span className=' text-capitalize'>{request.personName}</span></p>
                </div>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Company Name: </span> <span className=' text-capitalize'>{request.companyName}</span></p>
                </div>
                </div>  

                <hr />

                <div className="row">
                    <p className='fw-bold text-decoration-underline'>Contact details:</p>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Email: </span> <span className=''><a href={`mailto:${request.email}`}>{request.email}</a></span></p>
                </div>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Phone: </span> <span className=' text-capitalize'><a href={`tel:${request.phone}`}>{request.phone}</a></span></p>
                </div>
                <div className="col col-md-12 col-sm-12 col-12">
                    <p><span className="fw-bold">Address: </span> <span className=' text-capitalize'>{request.address}</span></p>
                </div>
                </div>  


                <hr />

                <div className="row">
                    <p className='fw-bold text-decoration-underline'>Company details:</p>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Company Age: </span> <span className=''>{request.companyAge}</span></p>
                </div>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Buyer Type: </span> <span className=' text-capitalize'>{request.buyerType}</span></p>
                </div>
                {/* <div className="col col-md-12 col-sm-12 col-12">
                    <p><span className="fw-bold">Address: </span> <span className=' text-capitalize'>{request.address}</span></p>
                </div> */}
                </div> 

                <hr />

                <div className="row">
                    <p className='fw-bold text-decoration-underline'>Interested In:</p>
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Mask types: </span> <span className=''>
                    {request.disposableFaceMasks && '3Ply Disposable FaceMasks,'}
                    {request.n95CupMask && ' N95 Cup Mask,'}
                    {request.n95CupValveMask && ' N95 Cup Valve Mask'}</span></p>
                </div>
                {/* <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Buyer Type: </span> <span className=' text-capitalize'>{request.buyerType}</span></p>
                </div> */}
                <div className="col col-md-6 col-sm-12 col-12">
                    <p><span className="fw-bold">Description: </span> <span className=' text-capitalize'>{request.description}</span></p>
                </div>
                </div> 
                <hr />
                <div className="d-flex justify-content-around">
                <a href={`mailto:${request.email}`}> <button className='btn btn-main btn-sm px-sm-5 px-4'><img src={mail} alt="" /> Mail</button></a>
                <a href={`tel:${request.phone}`}> <button className='btn btn-main btn-sm px-sm-5 px-4'><img src={phone} alt="" /> Phone</button></a>
                </div>





                    </div>    
                </div>
            
            </div>
        
        
        </> : <p>Loading...</p>   
        }

            </div>
        
        </>
    )
}

export default RequestDetail
