import React from 'react';

const MakeSingleAdmin = ({user,setMakeAdminModal}) => {
    const {email} = user;
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>
                {
                    user.role === 'admin' ? <p className='text-green-700 font-semibold'>Admin</p>:<label htmlFor="my-modal-create-admin" className='btn btn-primary btn-xs' onClick={()=>setMakeAdminModal(user)}>make admin</label>

                }
            </td>
        </tr>
    );
};

export default MakeSingleAdmin;