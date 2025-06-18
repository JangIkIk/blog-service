"use client";
// package
import { forwardRef } from "react";
import TextareaAutosize, { TextareaAutosizeProps} from "react-textarea-autosize";
// slice
import { cn } from "../lib/cn";

/**
 * @Desc
 * textarea 사이즈 자동 인식 UI 컴포넌트
 */
const TextArea = forwardRef<HTMLTextAreaElement, TextareaAutosizeProps>( (props, ref) => {
    const { className, ...defaultOptions } = props;
    return (
      <TextareaAutosize
        ref={ref}
        className={cn(
          "w-full resize-none appearance-none overflow-hidden bg-transparent text-base outline-none theme-text-1",
          className
        )}
        {...defaultOptions}
      />
    );
  }
);

export default TextArea;