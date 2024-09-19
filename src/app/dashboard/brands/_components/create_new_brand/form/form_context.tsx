"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { FormState, formSchema } from "./form_zod";
import { z } from "zod";
import Form from "./Form";

// type NestedKeys<T> = T extends object
//   ? {
//       [K in keyof T]: K extends string ? (T[K] extends object ? NestedKeys<T[K]> : K) : never;
//     }[keyof T]
//   : never;

// type NestedKeys<T> = T extends object
//   ? {
//       [K in keyof T]-?: K extends string
//         ? T[K] extends object
//           ? `${K}` | NestedKeys<T[K]> // Use template literal types to ensure string keys
//           : `${K}`
//         : never;
//     }[keyof T]
//   : never;

// type BasicInformationKeys = keyof FormState["basicInformation"];
// type SocialMediaLinksKeys = keyof FormState["socialMediaLinks"];
// type CompanyDetailsKeys = keyof FormState["companyDetails"];
// type ContactPersonKeys = keyof FormState["contactPerson"];

// type NestedKeys<T> = T extends object
//   ? {
//       [K in keyof T]-?: K extends string
//         ? T[K] extends object
//           ? K | NestedKeys<T[K]> // Include the key itself and recurse into nested objects
//           : K
//         : never;
//     }[keyof T]
//   : never;

type TopLevelKeys<T> = {
  [K in keyof T]: T[K] extends object ? never : K;
}[keyof T];
type FormStateKeys =
  | TopLevelKeys<FormState>
  | keyof FormState["basicInformation"]
  | keyof FormState["socialMediaLinks"]
  | keyof FormState["companyDetails"]
  | keyof FormState["contactPerson"];

type FormContextProps = {
  formState: FormState;
  updateFormState: (key: FormStateKeys, value: string | File[] | File) => void;
  validateForm: () => { isValid: boolean; errors: z.ZodError | null };
  errors: Record<string, string>;
};

export const FormContext = createContext<FormContextProps | undefined>(undefined);

function FormProvider({ children }: { children: ReactNode }) {
  const [formState, setFormState] = useState<FormState>({
    coverPhoto: null,
    logoImage: null,
    basicInformation: {
      brandName: "",
      description: "",
      website: "",
      industry: "",
    },
    socialMediaLinks: {
      instagram: "",
      youtube: "",
      tiktok: "",
      x: "",
      facebook: "",
      snapchat: "",
    },
    companyDetails: {
      registrationAddress: "",
      VATNumber: "",
      companyEmailAddress: "",
      telephoneNumber: "",
    },
    attachFiles: null,
    contactPerson: {
      name: "",
      contactNumber: "",
      contactEmailAddress: "",
      linkedIn: "",
    },
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateFormState(key: FormStateKeys, value: string | File[] | File): void {
    setFormState((prevState) => {
      if (key in prevState) {
        return { ...prevState, [key]: value };
      } else if (key in prevState.basicInformation) {
        return { ...prevState, basicInformation: { ...prevState.basicInformation, [key]: value } };
      } else if (key in prevState.socialMediaLinks) {
        return { ...prevState, socialMediaLinks: { ...prevState.socialMediaLinks, [key]: value } };
      } else if (key in prevState.companyDetails) {
        return { ...prevState, companyDetails: { ...prevState.companyDetails, [key]: value } };
      } else if (key in prevState.contactPerson) {
        return { ...prevState, contactPerson: { ...prevState.contactPerson, [key]: value } };
      }

      return prevState;
    });
  }

  function validateForm(): { isValid: boolean; errors: z.ZodError | null } {
    const validationResult = formSchema.safeParse(formState);
    if (!validationResult.success) {
      const ZodErrors = validationResult.error.errors.reduce((acc, err) => {
        if (err.path.length > 0) {
          const field = err.path[0] as string;
          acc[field] = err.message;
        }
        return acc;
      }, {} as Record<string, string>);

      setErrors(ZodErrors);
      return { isValid: false, errors: validationResult.error };
    }

    setErrors({});
    return { isValid: false, errors: null };
  }

  const value = {
    formState,
    updateFormState,
    validateForm,
    errors,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function FormWithContext() {
  return (
    <FormProvider>
      <Form></Form>
    </FormProvider>
  );
}

export function useFormContext() {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return formContext;
}
