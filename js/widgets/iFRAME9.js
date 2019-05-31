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
	var iFRAME9  = function () {

		var iframe9 = {

			diviFRAME9: null,

			init: function () {
				
				
				
					   iframe9.diviFRAME9 = $('#widget-iframe9');
					   iframe9.getiFRAME9Data();
					      },

  			getiFRAME9Data: function () {
                    		var request = {
					widget: 'iFRAME9',
					request: 'getiFRAME9Data'
							};
		
			net.requestWidget(request, iframe9.displayiFRAME9Data);
			
					},
			
			displayiFRAME9Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe9data = result.value.iframe9;
								
				iframe9.renderCounter(JSON.parse(iframe9data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe9').remove();
				//	$('#widget-iframe9').append('<canvas id="line-iframe9" height="80%"></canvas>');

				$('#widget-iframe9')[0].src = counterdata.URL;
				
					iframe9.diviFRAME9.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe9 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe9data);
				iframe9.renderCounter(JSON.parse(iframe9data));
			}

		}

		$.extend(iFRAME9.prototype, iframe9);
	};
	

	OCA.DashBoard.iFRAME9 = iFRAME9;
	OCA.DashBoard.iframe9 = new iFRAME9();

})();
