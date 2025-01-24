import { HiCheckCircle, HiXMark } from "react-icons/hi2";
import { LuImagePlus } from "react-icons/lu";

const NewProduct = () => {
  return (
    <div className="">
      <h1 className="text-2xl">New Product</h1>
      <div className="mt-14 flex flex-col md:flex-row gap-4">
        <div className="w-full bg-base-100 border p-8 card">
          <form className="flex flex-col gap-2">
            <p className="mb-4 font-semibold text-lg">Basic Information</p>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Product Name"
            />
            <textarea
              name=""
              id=""
              rows={4}
              className="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
          </form>
        </div>
        <div className="md:w-3/4 bg-base-100 border p-8 card">
          <p className="mb-4 font-semibold text-lg">Product Image</p>
          <div className="card border border-dashed justify-center items-center gap-2 p-10">
            <LuImagePlus className="text-4xl" />
            <h1 className="font-semibold">Upload your product image</h1>
            <p className="text-xs">Only PNG, JPG format allowed.</p>
            <p className="text-xs">500x500 are recommended</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex flex-col md:flex-row gap-4">
        <div className="w-full bg-base-100 border p-8 card">
          <form className="flex flex-col gap-2">
            <p className="mb-4 font-semibold text-lg">Stock & Pricing</p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Stock"
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Price"
              />
            </div>
            <p className="mb-2 font-semibold text-sm flex items-center gap-2 mt-5">
              <input type="checkbox" name="" className="checkbox checkbox-sm" />
              Schedule a discount
            </p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Discount"
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Date"
              />
            </div>
          </form>
        </div>
        <div className="md:w-3/4 bg-base-100 border p-8 card">
          <p className="mb-4 font-semibold text-lg">Visibility</p>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Published</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm"
                  defaultChecked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Schedule</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm"
                  defaultChecked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Hidden</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio radio-sm"
                  defaultChecked
                />
              </label>
            </div>
            <div className="mt-6">
              <input
                type="date"
                className="input input-bordered"
                placeholder="Select a Date"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="btn btn-outline px-8">
          <HiCheckCircle className="text-lg" />
          Save & Continue
        </button>
        <button className="btn btn-neutral px-8 ml-4">
          <HiXMark className="text-lg" />
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewProduct;
