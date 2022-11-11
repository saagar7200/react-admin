export const validateCategory = (values:any) => {
    const errors:any = {};
    if (!values.name) {
        errors.name = 'Name is required.';
    }
    if (!values.image) {
        errors.image = 'Image is required.';
    }
      
    return errors
};