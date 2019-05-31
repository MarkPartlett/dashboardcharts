/**
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 * @copyright 2018, Maxence Lange <maxence@artificial-owl.com>
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** global: OCA */
/** global: net */


(function () {

	/**
	 * @constructs Cards
	 */
	var DueCards = function () {

		var duecards = {

			init: function () {
				cards.getDueCards();
			},


			getDueCards: function () {
				var request = {
					widget: 'deck-due-cards',
					request: 'getDueCards'
				};

				net.requestWidget(request, duecards.displayDueCards);
			},


			displayDueCards: function (result) {
				if (result.result === 'fail') {
					return;
				}

				var cards = result.value.cards;
				console.log('cards:' + JSON.stringify(cards));
			},


			push: function (payload) {
				if (payload.cards === undefined) {
					return;
				}

				console.log('push: ' + JSON.stringify(payload));
			}

		};

		$.extend(DueCards.prototype, cards);
	};

	if (OCA.Deck === undefined)
	{
		OCA.Deck = {};
	}

	OCA.Dashboard.DueCards = DueCards;
	OCA.Dashboard.dueCards = new DueCards();

})();

