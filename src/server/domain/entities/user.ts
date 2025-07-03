class User {
    constructor(
        public id: string,
        public name: string | null,
        public email: string,
        public emailVerified: Date | null,
        public image: string | null,
        public imageCover: string | null,
        public createdAt: Date,
        public deletedAt: Date | null,
    ){}
}

export { User };