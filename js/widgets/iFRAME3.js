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
	var iFRAME3  = function () {

		var iframe3 = {

			diviFRAME3: null,

			init: function () {
				
				
				
					   iframe3.diviFRAME3 = $('#widget-iframe3');
					   iframe3.getiFRAME3Data();
					      },

  			getiFRAME3Data: function () {
                    		var request = {
					widget: 'iFRAME3',
					request: 'getiFRAME3Data'
							};
		
			net.requestWidget(request, iframe3.displayiFRAME3Data);
			
					},
			
			displayiFRAME3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe3data = result.value.iframe3;
								
				iframe3.renderCounter(JSON.parse(iframe3data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe3').remove();
				//	$('#widget-iframe3').append('<canvas id="line-iframe3" height="80%"></canvas>');

				$('#widget-iframe3')[0].src = counterdata.URL;
				
					iframe3.diviFRAME3.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe3 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe3data);
				iframe3.renderCounter(JSON.parse(iframe3data));
			}

		}

		$.extend(iFRAME3.prototype, iframe3);
	};
	

	OCA.DashBoard.iFRAME3 = iFRAME3;
	OCA.DashBoard.iframe3 = new iFRAME3();

})();
