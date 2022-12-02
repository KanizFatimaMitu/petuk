import React from 'react';

const Category = () => {
    return (
        <div>
            <div class="flex flex-col mx-auto p-4 lg:flex-row">
                <div class="grid flex-grow h-20 card bg-base-200 hover:bg-primary rounded-box place-items-center text-neutral-focus hover:text-base-content font-bold shadow-lg shadow-base-300">Traditional</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 hover:bg-primary rounded-box place-items-center text-neutral-focus font-bold shadow-lg shadow-base-300">continental </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 hover:bg-primary rounded-box place-items-center text-neutral-focus font-bold shadow-lg shadow-base-300">Thai</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 hover:bg-primary rounded-box place-items-center text-neutral-focus font-bold shadow-lg shadow-base-300">Mexican</div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-20 card bg-base-200 hover:bg-primary rounded-box place-items-center text-neutral-focus font-bold shadow-lg shadow-base-300">Japanese</div>
            </div>
        </div>
    );
};

export default Category;