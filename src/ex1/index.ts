export interface DateRange {
  start: Date;
  end: Date;
}

export function isRangeAvailable(
  requestedRange: DateRange,
  availableRange: DateRange
): boolean {
  return (
    requestedRange.start >= availableRange.start &&
    requestedRange.end <= availableRange.end
  );
}
