import { Button } from "@/components/ui/button";
import { IoCloseOutline } from "react-icons/io5";

import { Dialog, DialogContent, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { AddSquare } from "solar-icon-set";
import Form from "./form/Form";
import { FormWithContext } from "./form/form_context";

export default function CreateNewBrandProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10 w-[15.3rem] font-normal rounded-lg">
          <AddSquare size={24} className="mr-3" />
          Create new brand profile
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto flex flex-col gap-0">
        <div className="h-[4.5rem] p-6 flex items-center justify-between border-b">
          <h3 className="text-xl font-medium tracking-wide">Create new brand profile</h3>
          <DialogClose asChild>
            <Button type="button" variant="ghost" size="icon">
              <IoCloseOutline size={20} className="font-thin" />
            </Button>
          </DialogClose>
        </div>
        <FormWithContext></FormWithContext>
      </DialogContent>
    </Dialog>
  );
}
