import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ChefCard = () => {
    return (
        <div className='my-2'>
            <div class="hero min-h-[30vh] bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="rounded-lg shadow-2xl" />
                    <div className='w-auto mx-auto'>
                        <div className='flex space-x-6 justify-center my-4'>
                            <div>
                                <FontAwesomeIcon className='text-5xl' icon={faBookmark} />
                            </div>
                            <div>
                                <h1 class="text-3xl font-bold text-center ">I am Chef Kaniz</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 '>
                            <div class="card bg-base-100 shadow-xl max-w-sm m-4 g-6 p-2">
                                <div class="card-body ">
                                    <h2 class="card-title justify-center">Card title!</h2>
                                    <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-center">
                                        <button class="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-base-100 shadow-xl max-w-sm m-4 g-6 p-2">
                                <div class="card-body ">
                                    <h2 class="card-title justify-center">Card title!</h2>
                                    <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-center">
                                        <button class="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-base-100 shadow-xl max-w-sm m-4 g-6 p-2">
                                <div class="card-body ">
                                    <h2 class="card-title justify-center">Card title!</h2>
                                    <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-center">
                                        <button class="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;