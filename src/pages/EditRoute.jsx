import React from 'react';

export default function EditRoute() {
  return (
    <div className='w-full flex items-center justify-center flex-col min-h-screen mb-10'>
      <div className='bg-white px-10 py-20 rounded w-2/3 overflow-auto' style={{ maxHeight: '90vh' }}>
        <h3 className='font-semibold text-green-600 text-3xl text-center'>UPDATE ROUTE</h3>

        <div className='mt-8'>
          <label className='text-lg font-medium'>Contact Name</label>
          <input
            type='text'
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
            placeholder='Enter Path'
          />
        </div>

        <div className='mt-8'>
          <label className='text-lg font-medium'>Contact Number</label>
          <input
            type='text'
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
            placeholder='Enter Path'
          />
        </div>

        <div className='mt-8'>
          <a
            href="https://www.google.com/maps/@6.0168462,80.510502,14z?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='border-2 text-black font-bold py-4 rounded border-collapse hover:bg-sky-400 hover:text-white w-1/2'>
              Select New Route Pin From Google Map
            </button>
          </a>
        </div>
        
        <div className='mt-8'>
          <label className='text-lg font-medium'>Pickup Path Pin</label>
          <input
            type='text'
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
            placeholder='Enter Path'
          />
        </div>

        <div className='mt-4'>
          <label className='text-lg font-medium'>Arrive Date</label>
          <input
            type='date'
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
          />
        </div>

        <div className='mt-4'>
          <label className='text-lg font-medium'>Arrive Time</label>
          <input
            type='time'
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1'
          />
        </div>

        <div className='mt-4'>
          <label className='text-lg font-medium'>Vehicle</label>
          <select
            className='w-full border-2 border-gray-50 rounded-xl p-3 mt-1'
          >
            <option value=''>Select Vehicle</option>
            <option value='Car'>Car</option>
            <option value='Bus'>Bus</option>
            <option value='Bike'>Bike</option>
            <option value='Truck'>Truck</option>
          </select>
        </div>

        <div className='mt-4'>
          <button className='bg-green-500 text-white font-bold py-4 rounded w-full hover:bg-green-700'>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
