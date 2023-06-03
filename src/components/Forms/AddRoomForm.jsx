import React from 'react';
import { DateRange } from 'react-date-range';
import { TbFidgetSpinner } from 'react-icons/tb';
import categories from '../Categories/categoriesData';
const AddRoomForm = ({
  handleSubmit,
  dates,
  handleDates,
  loading,
  handleImageChange,
  uploadButtonText,
}) => {
  return (
    <div className="flex min-h-[calc(100vh-40px)] w-full flex-col items-center justify-center rounded-xl bg-gray-50 text-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full rounded-md border border-rose-300 px-4 py-3 text-gray-800 focus:outline-rose-500 "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full rounded-md border-rose-300 px-4 py-3 focus:outline-rose-500"
                name="category"
              >
                {categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability Range
              </label>
              <DateRange rangeColors={['#F43F5E']} />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full rounded-md border border-rose-300 px-4 py-3 text-gray-800 focus:outline-rose-500 "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className=" m-auto w-full rounded-lg  bg-white p-4">
              <div className="file_upload relative rounded-lg border-4 border-dotted border-gray-300 px-5 py-3">
                <div className="mx-auto flex w-max flex-col text-center">
                  <label>
                    <input
                      onChange={(e) => handleImageChange(e.target.files[0])}
                      className="hidden w-36 cursor-pointer text-sm"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="cursor-pointer rounded border border-gray-300 bg-rose-500 p-1 px-3 font-semibold text-white hover:bg-rose-500">
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full rounded-md border border-rose-300 px-4 py-3 text-gray-800 focus:outline-rose-500 "
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full rounded-md border border-rose-300 px-4 py-3 text-gray-800 focus:outline-rose-500 "
                  name="total_guest"
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full rounded-md border border-rose-300 px-4 py-3 text-gray-800 focus:outline-rose-500 "
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full rounded-md border border-rose-300 px-4 py-3 text-gray-800 focus:outline-rose-500 "
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="focus:rose-300 block h-32 w-full rounded-md border border-rose-300 px-4  py-3 text-gray-800 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded bg-rose-500 p-3 text-center font-medium text-white shadow-md transition duration-200"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
