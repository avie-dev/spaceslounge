import React from "react";
import Link from "next/link";

const AddSpace = () => {
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <form
        action=""
        className="w-full max-w-[585px] bg-[#2F3F50] dark:bg-[#F0F0F0] p-4 rounded-lg flex flex-col gap-5">
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="outline-none w-full p-2 border-b-2 border-white dark:border-[#999] border-opacity-60 bg-transparent focus:border-opacity-100"
        />
        <input
          type="url"
          placeholder="Link"
          name="link"
          className="outline-none w-full p-2 border-b-2 border-white dark:border-[#999] border-opacity-60 bg-transparent focus:border-opacity-100"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          className="outline-none w-full p-2 border-b-2 border-white dark:border-[#999] border-opacity-60 bg-transparent focus:border-opacity-100"
        />
        <input
          type="text"
          placeholder="Schedule: Calendar + Time + GMT "
          name="schedule"
          className="outline-none w-full p-2 border-b-2 border-white dark:border-[#999] border-opacity-60 bg-transparent focus:border-opacity-100"
        />
        <input
          type="text"
          placeholder="Looking for certain speakers"
          name="speaker"
          className="outline-none w-full p-2 border-b-2 border-white dark:border-[#999] border-opacity-60 bg-transparent focus:border-opacity-100"
        />
        <textarea
          name="details"
          rows="4"
          placeholder="Extra details"
          className="outline-none w-full p-2 border-b-2 border-white dark:border-[#999] border-opacity-60 bg-transparent focus:border-opacity-100"></textarea>

        <div className="flex justify-center gap-4">
          <button className="px-8 py-2 rounded-md text-white bg-primary">
            Submit
          </button>
          <Link
            href={"/host"}
            className="px-8 py-2 rounded-md text-white bg-secondary"
            type="button">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddSpace;
