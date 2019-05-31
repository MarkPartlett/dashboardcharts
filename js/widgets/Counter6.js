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
	var Counter6  = function () {

		var counter6 = {

			divCounter6: null,

			init: function () {
				
				
				
					   counter6.divCounter6 = $('#widget-counter6b');
					   counter6.getCounter6Data();
					      },

  			getCounter6Data: function () {
                    		var request = {
					widget: 'Counter6',
					request: 'getCounter6Data'
							};
		
			net.requestWidget(request, counter6.displayCounter6Data);
			
					},
			
			displayCounter6Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter6data = result.value.counter6;
					

					counter6.renderCounter(JSON.parse(counter6data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter6').remove();
					$('#widget-counter6').append('<canvas id="line-counter6" height="80%"></canvas>');
				
				$('#widget-counter6').fadeOut(150, function () {
					$(this).text(counterdata.value).fadeIn(150);
					});	

				
				counter6.divCounter6.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
						
					});			
										
},		
		
			push: function (payload) {
				if (payload.counter6 === undefined) {
					return;
				}
				
					counter6.renderCounter(JSON.parse(counter6data));
			}

		}

		$.extend(Counter6.prototype, counter6);
	};
	

	OCA.DashBoard.Counter6 = Counter6;
	OCA.DashBoard.counter6 = new Counter6();

})();
