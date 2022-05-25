import React from 'react';

const MakeSingleAdmin = ({user}) => {
    const {email, name} = user;
    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {
                    user.role === 'admin' ? <p className='text-green-700 text-semibold'>Admin</p>:<button className='btn btn-primary btn-xs'>make admin</button>

                }
            </td>
        </tr>
    );
};

export default MakeSingleAdmin;