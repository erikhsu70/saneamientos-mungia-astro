// Date of the editorial review of the service directory and service pages.
export const SERVICE_REVIEW_DATE = '2026-11-13';

export function latestContentDate(...dates) {
  return dates
    .filter((date) => typeof date === 'string' && /^\d{4}-\d{2}-\d{2}/.test(date) && Number.isFinite(Date.parse(date)))
    .map((date) => date.slice(0, 10))
    .sort()
    .at(-1);
}

export function blogPostDates(page) {
  const published = latestContentDate(page.date);
  const modified = latestContentDate(page.modified);
  return {
    published,
    modified: modified && (!published || modified > published) ? modified : undefined,
  };
}
