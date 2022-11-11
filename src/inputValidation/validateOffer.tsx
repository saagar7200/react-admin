export const validateOffer = (values:any) => {
    const errors:any = {};
    if (!values.subCategoryId) {
        errors.subCategoryId = 'Sub Category Id is required.';
    }
    if (!values.title) {
        errors.title = 'Title is required.';
    }
    if (!values.profit) {
        errors.profit = 'Profit is required.';
    }
    if (!values.baseReferalLink) {
        errors.baseReferalLink = 'Base Referal Link is required.';
    }
    if (!values.rating) {
        errors.rating = 'Rating is required.';
    }
    if (!values.network) {
        errors.network = 'Network is required.';
    }
    if (!values.image) {
        errors.image = 'Image is required.';
    }
   
    
    return errors
};