const successResponse = (statusCode: string, message: string, data?: any) => {
  return {
    statusCode,
    message,
    data,
  };
};

export default successResponse;
