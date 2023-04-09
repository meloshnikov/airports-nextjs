class ApiError extends Error {
  status: number;
  errors: any;
  
  constructor(status: number, message: string, erorrs = []) {
    super(message);
    this.status = status;
    this.errors = erorrs;
  }
  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }
  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors);
  }
}

export default ApiError;
