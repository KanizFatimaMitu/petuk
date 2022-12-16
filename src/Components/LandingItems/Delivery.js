import { faArrowAltCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Delivery = () => {
    return (
        <div>
            <div class="hero min-h-[40vh] my-4  bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold ">Order & Delivery process</h1>
                        <p class="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <div className='flex justify-start'>
                            <ul class="steps steps-vertical lg:steps-horizontal">
                                <li class="step step-primary">Register</li>
                                <li class="step step-primary">Choose plan</li>
                                <li class="step">Purchase</li>
                                <li class="step">Receive Product</li>
                            </ul>

                        </div>
                        <div className='flex item-center my-4 justify-center'>
                            <button class="btn btn-primary">
                                <span className='mr-2'>start process</span>
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Delivery;