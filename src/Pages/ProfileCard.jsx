import React, { useContext } from 'react'
import { AuthProviderContext } from '../provider/AuthProvider';


const ProfileCard = () => {
    const { user } = useContext(AuthProviderContext);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className="card col-12 mt-5 p-4 text-center">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={user.image} alt='profile' style={{ width: "100px", height: "100px" }} />
                                    <div className='p-2'>
                                        <h4> {user.username}'s  profile Center </h4>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p><b>Full Name : </b> {user.firstName} {user.lastName}  </p>
                                    <p><b>Gender : </b> {user.gender}  </p>
                                    <p><b>Email : </b> {user.email} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard