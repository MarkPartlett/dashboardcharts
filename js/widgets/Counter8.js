/**
 * Nextcloud - Dashboard Charting app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Mark Partlett <mark@partlettconsulting.com.au>
 * @copyright 2019, Mark Partlett <mark@partlettconsulting.com.au>
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
	 * @constructs Charts
	 */
	var Counter8  = function () {

		var counter8 = {

			divCounter8: null,

			init: function () {
				
				
				
					   counter8.divCounter8 = $('#widget-counter8b');
					   counter8.getCounter8Data();
					      },

  			getCounter8Data: function () {
                    		var request = {
					widget: 'Counter8',
					request: 'getCounter8Data'
							};
		
			net.requestWidget(request, counter8.displayCounter8Data);
			
					},
			
			displayCounter8Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter8data = result.value.counter8;
					
					
					counter8.renderCounter(JSON.parse(counter8data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter8').remove();
					$('#widget-counter8').append('<canvas id="line-counter8" height="80%"></canvas>');
					$('#widget-counter8').fadeOut(150, function () {
						$(this).text(counterdata.value).fadeIn(150);
					});	
					
					counter8.divCounter8.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
					});					
				
},		
		
			push: function (payload) {
				if (payload.counter8 === undefined) {
					return;
				}
	
				counter8.renderCounter(JSON.parse(counter8data));
			}

		}

		$.extend(Counter8.prototype, counter8);
	};
	

	OCA.DashBoard.Counter8 = Counter8;
	OCA.DashBoard.counter8 = new Counter8();

})();
