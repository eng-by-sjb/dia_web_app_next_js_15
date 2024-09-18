import { z } from "zod";

const urlRegex = /^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z]{2,}([\/\w .-]*)*\/?$/i;
const instagramRegex = /^(https?:\/\/)?(www\.)?(instagram\.com\/[A-Za-z0-9_.]+)/;
const xRegex = /^(https?:\/\/)?(www\.)?(twitter\.com\/[A-Za-z0-9_]+|x\.com\/[A-Za-z0-9_]+)/;
const snapchatRegex = /^(https?:\/\/)?(www\.)?(snapchat\.com\/add\/[A-Za-z0-9_]+)/;
const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(channel\/[A-Za-z0-9_-]+|user\/[A-Za-z0-9_-]+|watch\?v=[A-Za-z0-9_-]+)|youtu\.be\/[A-Za-z0-9_-]+)/;
const tiktokRegex = /^(https?:\/\/)?(www\.)?(tiktok\.com\/@[A-Za-z0-9_.]+)/;
const facebookRegex = /^(https?:\/\/)?(www\.)?(facebook\.com\/[A-Za-z0-9_.]+)/;

export const formSchema = z.object({
  coverPhoto: z
    .instanceof(File)
    .nullable()
    .refine(
      (file) => {
        return file?.type.startsWith("image/");
      },
      {
        message: "Cover photo must be a image file",
      }
    ),
  logoImage: z
    .instanceof(File)
    .nullable()
    .refine(
      (file) => {
        return file?.type.startsWith("image/");
      },
      {
        message: "Cover photo must be a image file",
      }
    ),
  basicInformation: z.object({
    brandName: z
      .string()
      .min(2, { message: "Brand name must be at least 2 characters" })
      .max(30, { message: "Brand name must be at most 30 characters" }),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters" })
      .max(256, { message: "Description must be at most 256 characters" }),
    website: z
      .string()
      .trim()
      .refine(
        (value) => {
          return urlRegex.test(value);
        },
        {
          message: "Please enter a valid website",
        }
      ),
    industry: z
      .string()
      .trim()
      .min(3, { message: "Industry must be at least 3 characters" })
      .max(20, { message: "Industry must be at most 20 characters" }),
  }),
  socialMediaLinks: z.object({
    instagram: z
      .string()
      .trim()
      .refine((value) => instagramRegex.test(value), {
        message: "Please enter a valid Instagram link",
      }),
    youtube: z
      .string()
      .trim()
      .refine((value) => youtubeRegex.test(value), {
        message: "Please enter a valid Youtube link",
      }),
    tiktok: z
      .string()
      .trim()
      .refine((value) => tiktokRegex.test(value), {
        message: "Please enter a valid Tiktok link",
      }),
    x: z
      .string()
      .trim()
      .refine((value) => xRegex.test(value), {
        message: "Please enter a valid X (formerly Twitter) link",
      }),
    facebook: z
      .string()
      .trim()
      .refine((value) => facebookRegex.test(value), {
        message: "Please enter a valid Facebook link",
      }),
    snapchat: z
      .string()
      .trim()
      .refine((value) => snapchatRegex.test(value), {
        message: "Please enter a valid Snapchat link",
      }),
  }),
  companyDetails: z.object({
    registrationAddress: z
      .string()
      .trim()
      .min(5, { message: "Address must be at least 5 characters long" })
      .max(100, { message: "Address must be at most 100 characters long" }),
    VATNumber: z
      .string()
      .trim()
      .refine(
        (value) => {
          return /^[A-Z]{2}[A-Za-z0-9]{2,15}$/.test(value);
        },
        {
          message: "Must be a valid VAT number format (e.g., 'GB123456789', 'DE123456789', etc.)",
        }
      ),
    companyEmailAddress: z.string().trim().email({ message: "Invalid email address" }),
    telephoneNumber: z
      .string()
      .trim()
      .refine(
        (value) => {
          return /^\+?[1-9]\d{1,14}$/.test(value);
        },
        {
          message: "Invalid phone number format. Use international format (e.g., '+441234567890')",
        }
      ),
  }),
  attachFiles: z.union([
    z.null(),
    z.array(
      z.instanceof(File).refine(
        (file) => {
          file?.type.startsWith("application/pdf");
        },
        {
          message: "Attached files must be PDFs files",
        }
      )
    ),
  ]),
  contactPerson: z.object({
    name: z.string(),
    contactNumber: z.string(),
    contactEmailAddress: z.string().trim().email({ message: "Invalid email address" }),
    linkedIn: z.string(),
  }),
});

// export const formSchema = z.object({
//   coverPhoto: z
//     .instanceof(File)
//     .nullable()
//     .refine(
//       (file) => {
//         return file?.type.startsWith("image/");
//       },
//       {
//         message: "Cover photo must be a image file",
//       }
//     ),
//   logoImage: z
//     .instanceof(File)
//     .nullable()
//     .refine(
//       (file) => {
//         return file?.type.startsWith("image/");
//       },
//       {
//         message: "Cover photo must be a image file",
//       }
//     ),
//   basicInformation: z.object({
//     brandName: z
//       .string()
//       .min(2, { message: "Brand name must be at least 2 characters" })
//       .max(30, { message: "Brand name must be at most 30 characters" }),
//     description: z
//       .string()
//       .min(10, { message: "Description must be at least 10 characters" })
//       .max(256, { message: "Description must be at most 256 characters" }),
//     website: z
//       .string()
//       .trim()
//       .refine(
//         (value) => {
//           return urlRegex.test(value);
//         },
//         {
//           message: "Please enter a valid website",
//         }
//       ),
//     industry: z
//       .string()
//       .trim()
//       .min(3, { message: "Industry must be at least 3 characters" })
//       .max(20, { message: "Industry must be at most 20 characters" }),
//   }),
//   socialMediaLinks: z.object({
//     instagram: z
//       .string()
//       .trim()
//       .refine((value) => instagramRegex.test(value), {
//         message: "Please enter a valid Instagram link",
//       }),
//     youtube: z
//       .string()
//       .trim()
//       .refine((value) => youtubeRegex.test(value), {
//         message: "Please enter a valid Youtube link",
//       }),
//     tiktok: z
//       .string()
//       .trim()
//       .refine((value) => tiktokRegex.test(value), {
//         message: "Please enter a valid Tiktok link",
//       }),
//     x: z
//       .string()
//       .trim()
//       .refine((value) => xRegex.test(value), {
//         message: "Please enter a valid X (formerly Twitter) link",
//       }),
//     facebook: z
//       .string()
//       .trim()
//       .refine((value) => facebookRegex.test(value), {
//         message: "Please enter a valid Facebook link",
//       }),
//     snapchat: z
//       .string()
//       .trim()
//       .refine((value) => snapchatRegex.test(value), {
//         message: "Please enter a valid Snapchat link",
//       }),
//   }),
//   companyDetails: z.object({
//     registrationAddress: z
//       .string()
//       .trim()
//       .min(5, { message: "Address must be at least 5 characters long" })
//       .max(100, { message: "Address must be at most 100 characters long" }),
//     VATNumber: z
//       .string()
//       .trim()
//       .refine(
//         (value) => {
//           return /^[A-Z]{2}[A-Za-z0-9]{2,15}$/.test(value);
//         },
//         {
//           message: "Must be a valid VAT number format (e.g., 'GB123456789', 'DE123456789', etc.)",
//         }
//       ),
//     emailAddress: z.string().trim().email({ message: "Invalid email address" }),
//     telephoneNumber: z
//       .string()
//       .trim()
//       .refine(
//         (value) => {
//           return /^\+?[1-9]\d{1,14}$/.test(value);
//         },
//         {
//           message: "Invalid phone number format. Use international format (e.g., '+441234567890')",
//         }
//       ),
//   }),
//   attachedFiles: z.array(
//     z
//       .instanceof(File)
//       .nullable()
//       .refine(
//         (file) => {
//           file?.type.startsWith("application/pdf");
//         },
//         {
//           message: "Attached files must be PDFs files",
//         }
//       )
//   ),
//   contactPerson: z.object({
//     name: z.string(),
//     contactNumber: z.string(),
//     emailAddress: z.string().trim().email({ message: "Invalid email address" }),
//     linkedIn: z.string(),
//   }),
// });

export type FormState = z.infer<typeof formSchema>;
