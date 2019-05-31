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
	var Counter2  = function () {

		var counter2 = {

			divCounter2: null,

			init: function () {
				
				
				
					   counter2.divCounter2 = $('#widget-counter2b');
					   counter2.getCounter2Data();
					      },

  			getCounter2Data: function () {
                    		var request = {
					widget: 'Counter2',
					request: 'getCounter2Data'
							};
		
			net.requestWidget(request, counter2.displayCounter2Data);
			
					},
			
			displayCounter2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter2data = result.value.counter2;
								
				
					
					
					counter2.renderCounter(JSON.parse(counter2data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter2').remove();
					$('#widget-counter2').append('<canvas id="line-counter2" height="80%"></canvas>');
						
						$('#widget-counter2').fadeOut(150, function () {
					$(this).text(counterdata.value).fadeIn(150);
					});	


					counter2.divCounter2.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
					});			
										
},		
		
			push: function (payload) {
				if (payload.counter2 === undefined) {
					return;
				}

			}

		}

		$.extend(Counter2.prototype, counter2);
	};
	

	OCA.DashBoard.Counter2 = Counter2;
	OCA.DashBoard.counter2 = new Counter2();

})();
