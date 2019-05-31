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
	var iFRAME1  = function () {

		var iframe1 = {

			diviFRAME1: null,

			init: function () {
				
				
				
					   iframe1.diviFRAME1 = $('#widget-iframe1');
					   iframe1.getiFRAME1Data();
					      },

  			getiFRAME1Data: function () {
                    		var request = {
					widget: 'iFRAME1',
					request: 'getiFRAME1Data'
							};
		
			net.requestWidget(request, iframe1.displayiFRAME1Data);
			
					},
			
			displayiFRAME1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe1data = result.value.iframe1;
								
				iframe1.renderCounter(JSON.parse(iframe1data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe1').remove();
				//	$('#widget-iframe1').append('<canvas id="line-iframe1" height="80%"></canvas>');

				$('#widget-iframe1')[0].src = counterdata.URL;
				
					iframe1.diviFRAME1.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe1 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe1data);
				iframe1.renderCounter(JSON.parse(iframe1data));
			}

		}

		$.extend(iFRAME1.prototype, iframe1);
	};
	

	OCA.DashBoard.iFRAME1 = iFRAME1;
	OCA.DashBoard.iframe1 = new iFRAME1();

})();
