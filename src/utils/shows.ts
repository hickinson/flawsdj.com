import { artistProfile } from '@data/artistProfile';
import type { Show, ShowStatus } from '@data/types';

const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;

const eventStatusUrls: Record<ShowStatus, string> = {
  scheduled: 'https://schema.org/EventScheduled',
  'sold-out': 'https://schema.org/EventScheduled',
  cancelled: 'https://schema.org/EventCancelled',
  postponed: 'https://schema.org/EventPostponed',
};

const showStatusLabels: Record<ShowStatus, string> = {
  scheduled: 'Scheduled',
  'sold-out': 'Sold out',
  cancelled: 'Cancelled',
  postponed: 'Postponed',
};

export function parseShowDate(value: string) {
  const match = datePattern.exec(value);

  if (!match) {
    throw new Error(`[shows] Invalid date "${value}". Use the YYYY-MM-DD format.`);
  }

  const [, yearValue, monthValue, dayValue] = match;
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw new Error(`[shows] Invalid calendar date "${value}".`);
  }

  return date;
}

export function formatShowDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parseShowDate(value));
}

export function isShowPast(show: Show, referenceDate = new Date()) {
  const effectiveDate = parseShowDate(show.endDate ?? show.startDate);
  effectiveDate.setUTCHours(23, 59, 59, 999);

  return effectiveDate.getTime() < referenceDate.getTime();
}

export function getUpcomingShows(showRecords: Show[], referenceDate = new Date()) {
  return [...showRecords]
    .filter((show) => !isShowPast(show, referenceDate))
    .sort((left, right) => parseShowDate(left.startDate).getTime() - parseShowDate(right.startDate).getTime());
}

export function getPastShows(showRecords: Show[], referenceDate = new Date()) {
  return [...showRecords]
    .filter((show) => isShowPast(show, referenceDate))
    .sort((left, right) => parseShowDate(right.startDate).getTime() - parseShowDate(left.startDate).getTime());
}

export function getShowStatusLabel(status: ShowStatus = 'scheduled') {
  return showStatusLabels[status];
}

export function getShowAction(show: Show) {
  const status = show.status ?? 'scheduled';
  const shouldSuppressTickets = status === 'sold-out' || status === 'cancelled' || status === 'postponed';

  if (!shouldSuppressTickets && show.ticketUrl) {
    return { href: show.ticketUrl, label: 'Tickets' };
  }

  if (show.eventUrl) {
    return { href: show.eventUrl, label: 'Event details' };
  }

  if (show.raUrl) {
    return { href: show.raUrl, label: 'Resident Advisor' };
  }

  return undefined;
}

export function buildShowStructuredData(showRecords: Show[]) {
  return showRecords.map((show) => {
    const destination = show.eventUrl ?? show.raUrl ?? show.ticketUrl;
    const fallbackUrl = new URL(`/shows/#show-${show.id}`, artistProfile.siteUrl).toString();

    return {
      '@context': 'https://schema.org',
      '@type': 'MusicEvent',
      '@id': fallbackUrl,
      name: show.title,
      startDate: show.startDate,
      ...(show.endDate ? { endDate: show.endDate } : {}),
      eventStatus: eventStatusUrls[show.status ?? 'scheduled'],
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: destination ?? fallbackUrl,
      location: {
        '@type': 'Place',
        name: show.venue,
        address: {
          '@type': 'PostalAddress',
          addressLocality: show.city,
          ...(show.country ? { addressCountry: show.country } : {}),
        },
      },
      performer: {
        '@type': 'MusicGroup',
        name: artistProfile.name,
        url: artistProfile.siteUrl,
      },
    };
  });
}
