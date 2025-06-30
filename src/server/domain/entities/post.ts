class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public aiContent: string | null,
    public thumbnailImage: string | null,
    public createdAt: Date,
    public updatedAt: Date | null,
    public deletedAt: Date | null,
    public scope: "PUBLIC" | "PRIVATE" | "FRIENDS",
    public userId: string,
    public categoryId: number | null,
  ) {};
}

export { Post };