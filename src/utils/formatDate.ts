export function formatDate(timestamp: string) {
  return new Intl
    .DateTimeFormat(["ban", "id"])
    .format(Date.parse(timestamp));
}