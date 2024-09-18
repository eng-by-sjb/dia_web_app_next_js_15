import { ChangeEvent, useContext } from "react";
import { Button } from "@/components/ui/button";
import { GoPlus, GoDotFill, GoTrash } from "react-icons/go";
import { HiDotsHorizontal, HiTrash } from "react-icons/hi";
import { FormContext, useFormContext } from "./form_context";
import { nanoid } from "nanoid";
import Input from "@/components/Input";

function formatFileSize(size: number): string {
  if (size < 1024) return `${size} Bytes`;
  else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
  else if (size < 1073741824) return `${(size / 1048576).toFixed(2)} MB`;
  else return `${(size / 1073741824).toFixed(2)} GB`;
}

function truncateFilename(fileName: string): string {
  const charCount = 10;
  const [fileTitle, fileExtension] = fileName.split(".");

  if (fileTitle.length > charCount) {
    return `${fileTitle.slice(0, charCount)}...${fileExtension} `;
  }
  return fileName;
}

export default function Col3() {
  const {
    formState: {
      attachFiles,
      contactPerson: { name, contactNumber, contactEmailAddress, linkedIn },
    },
    validateForm,
    updateFormState,
    errors,
  } = useFormContext();

  function handleDeleteFile(file: File) {
    if (attachFiles === null) {
      return;
    }
    const updatedFiles = attachFiles.filter((f) => f !== file);
    updateFormState("attachFiles", updatedFiles);
  }
  return (
    <div className="border-l">
      <div className="p-6 border-b">
        <label htmlFor="attachFiles" className="cursor-pointer">
          <div className=" w-full mb-4 flex items-center justify-between">
            <h3 className="font-medium text-primary">Attach files</h3>
            <GoPlus size={22} />
          </div>
          <div className="h-[2.875rem] mb-[1.75rem] w-full bg-zinc-300/15 flex items-center justify-center rounded-lg border-2 border-dashed">
            <span className="font-normal text-xs text-black/30">
              Click here to <span className="underline">upload</span> files
            </span>
          </div>
          <input
            className="hidden"
            id="attachFiles"
            name="attachFiles"
            type="file"
            accept="application/pdf"
            multiple
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("attachFiles", Array.from(e.target.files || []));
              validateForm();
            }}
          />
        </label>

        {attachFiles !== null && attachFiles.length > 0 ? (
          <>
            <ul
              className={`h-[5.5rem] py-1 bg-gray-200/10 flex flex-col ${
                attachFiles.length > 2 ? "overflow-y-scroll" : ""
              }`}>
              {attachFiles?.map((file) => {
                return (
                  <li key={nanoid()} className="h-10 pr-2 mb-2 flex items-center justify-between ">
                    <div>
                      <h3 className="text-primary text-[0.75rem] mb-[0.15rem]">
                        {truncateFilename(file.name)}
                      </h3>
                      <div className="w-full text-gray-500/90 flex items-center gap-[0.125rem] ">
                        <span className="text-[0.625rem]">{formatFileSize(file.size)}</span>
                        <GoDotFill className="text-gray-500" size={7} />
                        <span className="text-[0.625rem]">Complete</span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteFile(file)}>
                      <GoTrash className="text-destructive" size={16} />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div className="h-[5.5rem] py-1 bg-gray-200/10 flex items-center justify-center border rounded-lg">
            <span className="text-sm text-black/40">No files added</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className=" w-full mb-6 flex items-center justify-between">
          <h3 className="font-medium text-primary">Contact person</h3>
          {/* <GoPlus size={22} /> */}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            label="Name"
            name="name"
            inputClassName="h-[3.625rem]"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("name", e.target.value);
            }}></Input>
          <Input
            label="Contact number"
            name="contactName"
            inputClassName="h-[3.625rem]"
            value={contactNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("contactNumber", e.target.value);
            }}></Input>
          <Input
            label="Email address"
            name="contactEmailAddress"
            inputClassName="h-[3.625rem]"
            value={contactEmailAddress}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("contactEmailAddress", e.target.value);
            }}></Input>
          <Input
            label="LinkedIn"
            name="linkedIn"
            inputClassName="h-[3.625rem]"
            value={linkedIn}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateFormState("linkedIn", e.target.value);
            }}></Input>
        </div>
      </div>
    </div>
  );
}
