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
	var iFRAME7  = function () {

		var iframe7 = {

			diviFRAME7: null,

			init: function () {
				
				
				
					   iframe7.diviFRAME7 = $('#widget-iframe7');
					   iframe7.getiFRAME7Data();
					      },

  			getiFRAME7Data: function () {
                    		var request = {
					widget: 'iFRAME7',
					request: 'getiFRAME7Data'
							};
		
			net.requestWidget(request, iframe7.displayiFRAME7Data);
			
					},
			
			displayiFRAME7Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe7data = result.value.iframe7;
								
				iframe7.renderCounter(JSON.parse(iframe7data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe7').remove();
				//	$('#widget-iframe7').append('<canvas id="line-iframe7" height="80%"></canvas>');

				$('#widget-iframe7')[0].src = counterdata.URL;
				
					iframe7.diviFRAME7.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe7 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe7data);
				iframe7.renderCounter(JSON.parse(iframe7data));
			}

		}

		$.extend(iFRAME7.prototype, iframe7);
	};
	

	OCA.DashBoard.iFRAME7 = iFRAME7;
	OCA.DashBoard.iframe7 = new iFRAME7();

})();
