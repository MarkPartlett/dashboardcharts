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
	var Counter9  = function () {

		var counter9 = {

			divCounter9: null,

			init: function () {
				
				
				
					   counter9.divCounter9 = $('#widget-counter9b');
					   counter9.getCounter9Data();
					      },

  			getCounter9Data: function () {
                    		var request = {
					widget: 'Counter9',
					request: 'getCounter9Data'
							};
		
			net.requestWidget(request, counter9.displayCounter9Data);
			
					},
			
			displayCounter9Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter9data = result.value.counter9;
		
					
					
					counter9.renderCounter(JSON.parse(counter9data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter9').remove();
					$('#widget-counter9').append('<canvas id="line-counter9" height="80%"></canvas>');
				
					$('#widget-counter9').fadeOut(150, function () {
						$(this).text(counterdata.value).fadeIn(150);
					});	

				
					counter9.divCounter9.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
					});					
				
},		
		
			push: function (payload) {
				if (payload.counter9 === undefined) {
					return;
				}

				counter9.renderCounter(JSON.parse(counter9data));
			}

		}

		$.extend(Counter9.prototype, counter9);
	};
	

	OCA.DashBoard.Counter9 = Counter9;
	OCA.DashBoard.counter9 = new Counter9();

})();
