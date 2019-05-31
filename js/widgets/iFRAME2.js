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
	var iFRAME2  = function () {

		var iframe2 = {

			diviFRAME2: null,

			init: function () {
				
				
				
					   iframe2.diviFRAME2 = $('#widget-iframe2');
					   iframe2.getiFRAME2Data();
					      },

  			getiFRAME2Data: function () {
                    		var request = {
					widget: 'iFRAME2',
					request: 'getiFRAME2Data'
							};
		
			net.requestWidget(request, iframe2.displayiFRAME2Data);
			
					},
			
			displayiFRAME2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe2data = result.value.iframe2;
								
				iframe2.renderCounter(JSON.parse(iframe2data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe2').remove();
				//	$('#widget-iframe2').append('<canvas id="line-iframe2" height="80%"></canvas>');

				$('#widget-iframe2')[0].src = counterdata.URL;
				
					iframe2.diviFRAME2.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe2 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe2data);
				iframe2.renderCounter(JSON.parse(iframe2data));
			}

		}

		$.extend(iFRAME2.prototype, iframe2);
	};
	

	OCA.DashBoard.iFRAME2 = iFRAME2;
	OCA.DashBoard.iframe2 = new iFRAME2();

})();
