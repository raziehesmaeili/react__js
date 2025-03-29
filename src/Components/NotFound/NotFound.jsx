import React from 'react';

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">صفحه مورد نظر یافت نشد.</p>
        <a href="/" className="btn btn-primary">بازگشت به صفحه اصلی</a>
      </div>
    </div>
  );
};

export default NotFound;
