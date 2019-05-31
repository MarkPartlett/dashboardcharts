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
	var iFRAME8  = function () {

		var iframe8 = {

			diviFRAME8: null,

			init: function () {
				
				
				
					   iframe8.diviFRAME8 = $('#widget-iframe8');
					   iframe8.getiFRAME8Data();
					      },

  			getiFRAME8Data: function () {
                    		var request = {
					widget: 'iFRAME8',
					request: 'getiFRAME8Data'
							};
		
			net.requestWidget(request, iframe8.displayiFRAME8Data);
			
					},
			
			displayiFRAME8Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe8data = result.value.iframe8;
								
				iframe8.renderCounter(JSON.parse(iframe8data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe8').remove();
				//	$('#widget-iframe8').append('<canvas id="line-iframe8" height="80%"></canvas>');

				$('#widget-iframe8')[0].src = counterdata.URL;
				
					iframe8.diviFRAME8.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe8 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe8data);
				iframe8.renderCounter(JSON.parse(iframe8data));
			}

		}

		$.extend(iFRAME8.prototype, iframe8);
	};
	

	OCA.DashBoard.iFRAME8 = iFRAME8;
	OCA.DashBoard.iframe8 = new iFRAME8();

})();
