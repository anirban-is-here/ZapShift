export const calculateParcelPrice = ({
  type,
  weight,
  senderDistrict,
  receiverDistrict,
}) => {
  if (!type || !weight || !senderDistrict || !receiverDistrict) return 0;

  const withInCity =
    senderDistrict.toLowerCase() === receiverDistrict.toLowerCase();

  let totalPrice = 0;

  if (type === "document") {
    totalPrice = withInCity ? 60 : 80;
  }

  if (type === "not-document") {
    if (withInCity) {
        if (weight <= 3) totalPrice = 110;
      
        else totalPrice = 110 + (40 * (weight-3));
    } else {
        if (weight <= 3) totalPrice = 150;
        else totalPrice = 150 + (40 * (weight-3)) + 40;
     
      
    }
  }

  return totalPrice;
};
