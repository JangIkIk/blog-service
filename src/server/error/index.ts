class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    code: string,
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
  }
}

class ValidationError extends AppError {
  constructor(
    message: string = "잘못된 요청",
    code: string = "VALIDATION_FAILED"
  ) {
    super(message, code, 400);
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string = "인증 필요", code: string = "UNAUTHORIZED") {
    super(message, code, 401);
  }
}

class ForbiddenError extends AppError {
  constructor(message: string = "권한 없음", code: string = "FORBIDDEN") {
    super(message, code, 403);
  }
}

class NotFoundError extends AppError {
  constructor(message: string = "존재하지 않음", code: string = "NOT_FOUND") {
    super(message, code, 404);
  }
}

class ConflictError extends AppError {
  constructor(message: string = "중복 요청", code: string = "CONFLICT") {
    super(message, code, 409);
  }
}

class InternalServerError extends AppError {
  constructor(
    message: string = "서버 오류",
    code: string = "INTERNAL_SERVER_ERROR"
  ) {
    super(message, code, 500, false);
  }
}

class DatabaseError extends AppError {
  constructor(
    message: string = "데이터베이스 오류",
    code: string = "DATABASE_ERROR"
  ) {
    super(message, code, 500, false);
  }
}

export {
  AppError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  InternalServerError,
  DatabaseError,
};
