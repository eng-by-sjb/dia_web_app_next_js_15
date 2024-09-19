import Image from "next/image";
import { GoImage, GoPlus } from "react-icons/go";
import { useFormContext } from "./form_context";

export default function Col1() {
  const { formState, validateForm, errors } = useFormContext();

  return (
    <div>
      <div className="mb-10">
        <label htmlFor="coverPhoto" className="h-[12.81rem] cursor-pointer">
          <div className="w-full mb-4 flex items-center justify-between">
            <h3 className="font-medium text-primary">Upload cover photo</h3>
            <GoPlus size={22} />
          </div>
          <div className="bg-zinc-300/30 mb-2 flex items-center justify-center w-full h-[7.62rem] rounded-lg">
            {formState.coverPhoto ? (
              <Image
                src={URL.createObjectURL(formState.coverPhoto)}
                alt="Uploaded"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <span className="text-gray-400/30">
                <GoImage size={42} />
              </span>
            )}
          </div>
          <input
            className="hidden"
            type="file"
            accept="image/*"
            name="coverPhoto"
            id="coverPhoto"
          />
          <p className="text-sm text-gray-500">
            Cover photo should have dimensions of 1920px by 1080px
          </p>
        </label>
      </div>

      <label htmlFor="cover-photo" className="h-[12.81rem] cursor-pointer">
        <div className="w-full mb-4 flex items-center justify-between">
          <h3 className="font-medium text-primary">Upload logo image</h3>
          <GoPlus size={22} />
        </div>
        <div className="w-[6.25rem] h-[6.25rem] bg-zinc-300/30 mb-2 flex items-center justify-center rounded-lg">
          {formState?.logoImage ? (
            <Image
              src={URL.createObjectURL(formState?.logoImage)}
              alt="Uploaded"
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <span className="text-gray-400/30">
              <GoImage size={24} />
            </span>
            // <span className="text-gray-400">Upload Image</span>
          )}
        </div>
        <input className="hidden" type="file" name="cover-photo" id="cover-photo" />
        <p className="text-sm text-gray-500">
          Logo images should have dimensions of 1080px by 1080px
        </p>
      </label>
    </div>
  );
}
