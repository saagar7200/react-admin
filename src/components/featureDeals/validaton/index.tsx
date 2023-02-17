export const validate = (values: any) => {
  const errors: any = {};
  if (!values.type) {
    errors.type = "Type is required.";
  }
  if (values.type === "offer" && !values.offerId) {
    errors.offerId = "Offer is required.";
  }
  if (values.type === "Category" && !values.categoryId) {
    errors.categoryId = "Category  is required.";
  }
  if (values.type === "subCategory" && !values.subCategoryId) {
    errors.subCategoryId = "Sub Category  is required.";
  }
  if (!values.image) {
    errors.image = "Image is required.";
  }

  return errors;
};
