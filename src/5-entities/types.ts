type Scope = "PUBLIC" | "PRIVATE" | "FRIENDS";

type StoryForm = {
  title: string;
  content: string;
  aiContent?: string | null;
  thumbnailImage?: string | null;
  scope?: Scope;
} & {};


export type {
    StoryForm,
}