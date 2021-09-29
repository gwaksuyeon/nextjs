export const numberFormat = (num: number) => {
  if (num) {
    return num.toLocaleString("en-US");
  }
  return "0";
};

export const idMasking = (id: string) => {
  if (id) {
    return id.replace(/.{4}$/, "****");
  }
  return "";
};
