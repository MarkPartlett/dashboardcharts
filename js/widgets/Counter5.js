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
	var Counter5  = function () {

		var counter5 = {

			divCounter5: null,

			init: function () {
				
				
				
					   counter5.divCounter5 = $('#widget-counter5b');
					   counter5.getCounter5Data();
					      },

  			getCounter5Data: function () {
                    		var request = {
					widget: 'Counter5',
					request: 'getCounter5Data'
							};
		
			net.requestWidget(request, counter5.displayCounter5Data);
			
					},
			
			displayCounter5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var counter5data = result.value.counter5;
							
								
					
					counter5.renderCounter(JSON.parse(counter5data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-counter5').remove();
					$('#widget-counter5').append('<canvas id="line-counter5" height="80%"></canvas>');
					$('#widget-counter5').fadeOut(150, function () {
						$(this).text(counterdata.value).fadeIn(150);
					});	


					counter5.divCounter5.fadeOut(150, function () {
						$(this).text(counterdata.text).fadeIn(150);
						
					});		
										
},		
		
			push: function (payload) {
				if (payload.counter5 === undefined) {
					return;
				}
					
				counter5.renderCounter(JSON.parse(counter5data));
			}

		}

		$.extend(Counter5.prototype, counter5);
	};
	

	OCA.DashBoard.Counter5 = Counter5;
	OCA.DashBoard.counter5 = new Counter5();

})();
