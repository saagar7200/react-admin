export const validateDeal = (values: any) => {
  const errors: any = {};
  if (!values.type) {
    errors.type = "Type is required.";
  }
  if (values.type === "offer" && !values.offerId) {
    errors.offerId = "Offer is required.";
  }
  if (values.type === "coupon" && !values.coupon) {
    errors.coupon = "Coupon Code is required.";
  }
  if (!values.image) {
    errors.image = "Image is required.";
  }

  return errors;
};
