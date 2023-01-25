class ErrorHelper
{
    validationError(err)
    {   
        if (err.name === "ValidationError") {
            let errors = {};
            Object.keys(err.errors).forEach((key) => {
              errors[key] = err.errors[key].message;
            });      
            return errors;
        }      
    }
}
export default new ErrorHelper();