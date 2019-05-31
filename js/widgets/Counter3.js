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
	var Counter3  = function () {

		var counter3 = {

			divCounter3: null,

			init: function () {
				
				
				
					   counter3.divCounter3 = $('#widget-counter3b');
					   counter3.getCounter3Data();
					      },

  			getCounter3Data: function () {
                    		var request = {
					widget: 'Counter3',
					request: 'getCounter3Data'
							};
		
			net.requestWidget(request, counter3.displayCounter3Data);
			
					},
			
			displayCounter3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter3data = result.value.counter3;
					

					
					
					counter3.renderCounter(JSON.parse(counter3data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter3').remove();
					$('#widget-counter3').append('<canvas id="line-counter3" height="80%"></canvas>');
					$('#widget-counter3').fadeOut(150, function () {
						$(this).text(counterdata.value).fadeIn(150);
					});	
;
					counter3.divCounter3.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
					});					
				
										
},		
		
			push: function (payload) {
				if (payload.counter3 === undefined) {
					return;
				}

				counter3.renderCounter(JSON.parse(counter3data));
			}

		}

		$.extend(Counter3.prototype, counter3);
	};
	

	OCA.DashBoard.Counter3 = Counter3;
	OCA.DashBoard.counter3 = new Counter3();

})();
