export function getX(
  value: number,
  sizeLeft: number,
  sizeRight: number,
  left: number,
  right: number
) {
  return sizeLeft + (sizeRight - sizeLeft) * ((value - left) / (right - left));
}
