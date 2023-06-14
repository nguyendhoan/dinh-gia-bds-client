export const AddUserValidator = (form) => {
  let isValid = true;
  let errorMessage = '';

  if (!form.username) {
    isValid = false;
    errorMessage += 'Vui lòng nhập tên người dùng. ';
  }

  if (!form.password) {
    isValid = false;
    errorMessage += 'Vui lòng nhập mật khẩu. ';
  }

  if (!form.repassword) {
    isValid = false;
    errorMessage += 'Vui lòng nhập lại mật khẩu. ';
  }

  if (!form.role) {
    isValid = false;
    errorMessage += 'Vui lòng chọn chức vụ. ';
  }

  return {
    isValidate: isValid,
    errMess: errorMessage.trim(),
  };
};