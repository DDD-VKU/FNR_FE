export function formatPrice(amount: number): string {
  if (amount === undefined) {
    return "";
  }
  return amount.toLocaleString("en-US");
}
