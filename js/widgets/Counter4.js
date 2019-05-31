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
	var Counter4  = function () {

		var counter4 = {

			divCounter4: null,

			init: function () {
				
				
				
					   counter4.divCounter4 = $('#widget-counter4b');
					   counter4.getCounter4Data();
					      },

  			getCounter4Data: function () {
                    		var request = {
					widget: 'Counter4',
					request: 'getCounter4Data'
							};
		
			net.requestWidget(request, counter4.displayCounter4Data);
			
					},
			
			displayCounter4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter4data = result.value.counter4;
					
					
					counter4.renderCounter(JSON.parse(counter4data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter4').remove();
					$('#widget-counter4').append('<canvas id="line-counter4" height="80%"></canvas>');
				    $('#widget-counter4').fadeOut(150, function () {
					$(this).text(counterdata.value).fadeIn(150);
					});	


					counter4.divCounter4.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
					});					
				
						
										
},		
		
			push: function (payload) {
				if (payload.counter4 === undefined) {
					return;
				}
				
		
			counter4.renderCounter(JSON.parse(counter4data));
			}

		}

		$.extend(Counter4.prototype, counter4);
	};
	

	OCA.DashBoard.Counter4 = Counter4;
	OCA.DashBoard.counter4 = new Counter4();

})();
