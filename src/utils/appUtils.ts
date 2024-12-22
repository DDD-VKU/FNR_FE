export function formatPrice(amount: number): string {
  if (amount === undefined) {
    return "";
  }
  return amount.toLocaleString("en-US");
}

export function rerdirectTo(url: string) {
  window.location.href = url;
}
