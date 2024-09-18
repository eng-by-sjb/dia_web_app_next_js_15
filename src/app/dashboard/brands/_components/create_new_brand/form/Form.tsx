"use client";

import { FormEvent, useContext } from "react";
import Col2 from "./Col2";
import { useFormContext } from "./form_context";
import Col1 from "./Col1";
import { Button } from "@/components/ui/button";
import Col3 from "./Col3";

export default function Form() {
  const { formState, validateForm, errors } = useFormContext();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(formState);
    console.log(errors);
    // console.log(validateForm());
  }

  return (
    <form onSubmit={handleFormSubmit} method="post" encType="multipart/form-data">
      <div className="mt-0 grid grid-cols-[15.25rem,27.125rem,20.125rem] gap-0 border-b">
        <div className="p-6 border-r">
          <Col1></Col1>
        </div>
        <div className="p-6">
          <Col2></Col2>
        </div>

        <Col3></Col3>
      </div>

      <div className="h-[4.5rem] py-4 px-6 flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Button className="font-normal" variant="secondary" disabled={true}>
            Complete later
          </Button>
          <Button className="w-24 font-normal ">Save</Button>
        </div>
      </div>
    </form>
  );
}
