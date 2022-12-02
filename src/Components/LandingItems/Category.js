import React from 'react';

const Category = () => {
    return (
        <div>
            <div class="flex flex-col mx-auto p-4 lg:flex-row">
                <div class="grid flex-grow h-20 card bg-base-200 rounded-box place-items-center text-primary font-bold ">Traditional</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 rounded-box place-items-center text-primary font-bold">Thai</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 rounded-box place-items-center text-primary font-bold">continental</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 rounded-box place-items-center text-primary font-bold">Mexican</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 rounded-box place-items-center text-primary font-bold">Japanese</div>
            </div>
        </div>
    );
};

export default Category;