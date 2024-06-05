/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { translate as t, getLanguage } from '@nextcloud/l10n'
import {
	getFirstDayOfWeekFromMomentLocale,
} from '../../utils/moment.js'

/**
 * Returns localization settings for the FullCalender package.
 *
 * @see https://fullcalendar.io/docs
 * @return {object}
 */
const getFullCalendarLocale = () => {
	return {
		firstDay: getFirstDayOfWeekFromMomentLocale(),
		locale: getLanguage(),
		// TRANSLATORS W is an abbreviation for Week
		weekText: t('calendar', 'W'),
		allDayText: t('calendar', 'All day'),
		moreLinkText: (n) => t('calendar', '%n more', {}, n),
		noEventsText: t('calendar', 'No events to display'),
	}
}

export {
	getFullCalendarLocale,
}
