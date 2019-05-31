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
	var D3Chart1  = function () {

		var D3Chart1 = {

			divD3Chart1: null,

			init: function () {
				
				
				
					   D3Chart1.divD3Chart1 = $('#widget-D3Chart1');
					   D3Chart1.getD3Chart1Data();
					      },

  			getD3Chart1Data: function () {
                    		var request = {
					widget: 'D3Chart1',
					request: 'getD3Chart1Data'
							};
		
			net.requestWidget(request, D3Chart1.displayD3Chart1Data);
			
					},
			
			displayD3Chart1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var D3Chart1data = result.value.D3Chart1;
								
				D3Chart1.renderCounter(JSON.parse(D3Chart1data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-D3Chart1').remove();
				//	$('#widget-D3Chart1').append('<canvas id="line-D3Chart1" height="80%"></canvas>');

					D3Chart1.divD3Chart1.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.D3Chart1 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(D3Chart1data);
				D3Chart1.renderCounter(JSON.parse(D3Chart1data));
			}

		}

		$.extend(D3Chart1.prototype, D3Chart1);
	};
	

	OCA.DashBoard.D3Chart1 = D3Chart1;
	OCA.DashBoard.D3Chart1 = new D3Chart1();

})();
