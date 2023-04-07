export function formatNumberAsCurrency(number: number) {
  return number.toFixed(2).replace('.', ',')
}
