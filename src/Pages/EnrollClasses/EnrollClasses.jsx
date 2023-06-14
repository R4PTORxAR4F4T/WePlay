import {useState , useEffect} from 'react';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const EnrollClasses = () => {
    const {user, loading} = useAuth();
    const [enroll, setEnroll] = useState();

    const url = `https://assignment-12-server-jet-iota.vercel.app/payment?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEnroll(data))

    }, [url,loading]);

    return (
        <div>
            <Helmet>
                <title>WePlay | Enroll Class</title>
            </Helmet>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>All Added Class</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Class Name</th>
                        <th>Instractor</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        enroll && enroll.map((enrollItem) => (
                            enrollItem.payment.items.map((item, itemIndex) => (
                            <tr key={item._id} className="bg-base-200">
                                <td>{itemIndex + 1}</td>
                                <td>{item.cName}</td>
                                <td>{item.iName}</td>
                                <td>{item.price}</td>
                                <td>Paid</td>
                            </tr>
                            ))
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClasses;