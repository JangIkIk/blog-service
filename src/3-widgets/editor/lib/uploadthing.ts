"use client"

import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
// https://docs.uploadthing.com/concepts/theming
const { uploadFiles } = generateReactHelpers<OurFileRouter>();
const UploadButton = generateUploadButton<OurFileRouter>();
const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export { uploadFiles, UploadButton, UploadDropzone };


