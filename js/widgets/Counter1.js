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
	var Counter1  = function () {

		var counter1 = {

			divCounter1: null,

			init: function () {
				
				
				
					   counter1.divCounter1 = $('#widget-counter1b');
					   counter1.getCounter1Data();
					      },

  			getCounter1Data: function () {
                    		var request = {
					widget: 'Counter1',
					request: 'getCounter1Data'
							};
		
			net.requestWidget(request, counter1.displayCounter1Data);
			
					},
			
			displayCounter1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter1data = result.value.counter1;
					

									
				
					
					
					counter1.renderCounter(JSON.parse(counter1data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-counter1').remove();
				//	$('#widget-counter1').append('<canvas id="line-counter1" height="80%"></canvas>');
				$('#widget-counter1').color = counterdata.color;
				$('#widget-counter1').fontSize = counterdata.size;
				
				$('#widget-counter1').fadeOut(150, function () {
					$(this).text(counterdata.value).fadeIn(150);
					});	

				
				counter1.divCounter1.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
					});			
										
},		
		
			push: function (payload) {
				if (payload.counter1 === undefined) {
					return;
				}

				counter1.renderCounter(JSON.parse(counter1data));
			}

		}

		$.extend(Counter1.prototype, counter1);
	};
	

	OCA.DashBoard.Counter1 = Counter1;
	OCA.DashBoard.counter1 = new Counter1();

})();
