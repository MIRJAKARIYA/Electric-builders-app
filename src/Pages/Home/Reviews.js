import React from 'react';
import { useQuery } from 'react-query';
import SingleReview from './SingleReview';

const Reviews = () => {
    const {data: reviews} = useQuery("reviews", () =>fetch("http://localhost:5000/review").then((res) => res.json()));
    return (
        <>
        <h1 className='text-center mt-10 mb-5 text-2xl text-red-700 font-semibold'>Reviews</h1>
            <div className='grid gap-5 p-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] mx-auto w-[95%]'>
            {
                reviews?.map(review => <SingleReview key={review._id} rev={review}></SingleReview>)
            }
        </div>
        </>
    );
};

export default Reviews;