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
	var iFRAME6  = function () {

		var iframe6 = {

			diviFRAME6: null,

			init: function () {
				
				
				
					   iframe6.diviFRAME6 = $('#widget-iframe6');
					   iframe6.getiFRAME6Data();
					      },

  			getiFRAME6Data: function () {
                    		var request = {
					widget: 'iFRAME6',
					request: 'getiFRAME6Data'
							};
		
			net.requestWidget(request, iframe6.displayiFRAME6Data);
			
					},
			
			displayiFRAME6Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe6data = result.value.iframe6;
								
				iframe6.renderCounter(JSON.parse(iframe6data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe6').remove();
				//	$('#widget-iframe6').append('<canvas id="line-iframe6" height="80%"></canvas>');

				$('#widget-iframe6')[0].src = counterdata.URL;
				
					iframe6.diviFRAME6.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe6 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe6data);
				iframe6.renderCounter(JSON.parse(iframe6data));
			}

		}

		$.extend(iFRAME6.prototype, iframe6);
	};
	

	OCA.DashBoard.iFRAME6 = iFRAME6;
	OCA.DashBoard.iframe6 = new iFRAME6();

})();
