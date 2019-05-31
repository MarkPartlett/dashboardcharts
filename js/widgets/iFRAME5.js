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
	var iFRAME5  = function () {

		var iframe5 = {

			diviFRAME5: null,

			init: function () {
				
				
				
					   iframe5.diviFRAME5 = $('#widget-iframe5');
					   iframe5.getiFRAME5Data();
					      },

  			getiFRAME5Data: function () {
                    		var request = {
					widget: 'iFRAME5',
					request: 'getiFRAME5Data'
							};
		
			net.requestWidget(request, iframe5.displayiFRAME5Data);
			
					},
			
			displayiFRAME5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe5data = result.value.iframe5;
								
				iframe5.renderCounter(JSON.parse(iframe5data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe5').remove();
				//	$('#widget-iframe5').append('<canvas id="line-iframe5" height="80%"></canvas>');

				$('#widget-iframe5')[0].src = counterdata.URL;
				
					iframe5.diviFRAME5.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe5 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe5data);
				iframe5.renderCounter(JSON.parse(iframe5data));
			}

		}

		$.extend(iFRAME5.prototype, iframe5);
	};
	

	OCA.DashBoard.iFRAME5 = iFRAME5;
	OCA.DashBoard.iframe5 = new iFRAME5();

})();
