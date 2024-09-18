import Input from "@/components/Input";
import { useFormContext } from "./form_context";
import { ChangeEvent, useState } from "react";

export default function Col2() {
  const [isFocused, setIsFocused] = useState(false);

  const {
    formState: {
      basicInformation: { brandName, description, industry, website },
      socialMediaLinks: { facebook, instagram, x, snapchat, tiktok, youtube },
      companyDetails: { registrationAddress, VATNumber, companyEmailAddress, telephoneNumber },
    },
    validateForm,
    updateFormState,
    errors,
  } = useFormContext();

  return (
    <div>
      <div>
        <h3 className="mb-4 font-medium text-primary/80">Basic Information</h3>
        <Input
          label="Brand name"
          name="brandName"
          inputClassName="h-[3.625rem] mb-2"
          value={brandName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            updateFormState("brandName", e.target.value);
          }}></Input>

        {/* <TextArea
          label="Description"
          name="description"
          maxLength={256}
          rows={4}
          cols={50}
          textareaClassName="h-[6.3125rem]"
          value={description}
          updateFormState={updateFormState}></TextArea> */}

        <div className={`relative w-full`}>
          <div className="bg-white/95 w-full h-[2.1rem] py-2 px-3 absolute left-0 top-0 flex items-center border-t border-x backdrop-blur-sm rounded-t-lg">
            <label
              htmlFor="description"
              className={`text-black/50 text-sm transition-all delay-800 transform  ${
                isFocused || description ? "text-zinc-500 animate-pulse -translate-y-0" : ""
              }`}>
              Description
            </label>
          </div>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              updateFormState("description", e.target.value);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={4}
            cols={50}
            maxLength={256}
            className={`h-[6.3125rem] w-full px-3 pt-7 border resize-none border-gray-300 rounded-lg outline-none transition-all ${
              isFocused ? "ring-gray-500 ring-1" : ""
            }`}
          />
          <span className="block w-full px-[0.875rem] text-xs text-gray-500/50 text-right">{`${
            description?.length
          }/${256}`}</span>
        </div>

        <div className="h-[3.625rem] mt-[0.3125rem] mb-6 flex gap-2">
          <Input
            label="Industry"
            name="industry"
            inputClassName="h-[3.625rem]"
            value={industry}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("industry", e.target.value);
            }}></Input>
          <Input
            label="Website"
            name="website"
            value={website}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("website", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-primary/80">Social media links</h3>

        <div className="mb-6 grid grid-cols-2 gap-2">
          <Input
            label="Instagram"
            name="instagram"
            value={instagram}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("instagram", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="Youtube"
            name="youtube"
            value={youtube}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("youtube", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="TikTok"
            name="TikTok"
            value={tiktok}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("tiktok", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="X (formerly Twitter)"
            name="x"
            value={x}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("x", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="Facebook"
            name="Facebook"
            value={facebook}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("facebook", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="Snapchat"
            name="Snapchat"
            value={snapchat}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("snapchat", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
        </div>
      </div>

      <div className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-primary/80">Company details</h3>
          <button className="h-[0.875rem] font-normal text-sm text-zinc-500 border-none transition  hover:text-zinc-600">
            Add later
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Input
            label="Registered address"
            name="registeredAddress"
            value={registrationAddress}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("registrationAddress", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="VAT number"
            name="VATNumber"
            value={VATNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("VATNumber", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="Email address"
            name="emailAddress"
            value={companyEmailAddress}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("companyEmailAddress", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
          <Input
            label="Telephone number"
            name="telephoneNumber"
            value={telephoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("telephoneNumber", e.target.value);
            }}
            inputClassName="h-[3.625rem]"></Input>
        </div>
      </div>
    </div>
  );
}
