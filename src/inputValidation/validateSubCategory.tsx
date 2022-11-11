export const validateSubCategory = (values:any) => {
    const errors:any = {};
    if (!values.categoryId) {
        errors.subCategoryId = 'Category Id is required.';
    }
    if (!values.title) {
        errors.title = 'Title is required.';
    }
    if (!values.name) {
        errors.name = 'Name is required.';
    }
    if (!values.image) {
        errors.image = 'Image is required.';
    }
   
    
    return errors
};