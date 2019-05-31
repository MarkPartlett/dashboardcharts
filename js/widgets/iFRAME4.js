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
	var iFRAME4  = function () {

		var iframe4 = {

			diviFRAME4: null,

			init: function () {
				
				
				
					   iframe4.diviFRAME4 = $('#widget-iframe4');
					   iframe4.getiFRAME4Data();
					      },

  			getiFRAME4Data: function () {
                    		var request = {
					widget: 'iFRAME4',
					request: 'getiFRAME4Data'
							};
		
			net.requestWidget(request, iframe4.displayiFRAME4Data);
			
					},
			
			displayiFRAME4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var iframe4data = result.value.iframe4;
								
				iframe4.renderCounter(JSON.parse(iframe4data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-iframe4').remove();
				//	$('#widget-iframe4').append('<canvas id="line-iframe4" height="80%"></canvas>');

				$('#widget-iframe4')[0].src = counterdata.URL;
				
					iframe4.diviFRAME4.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.iframe4 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(iframe4data);
				iframe4.renderCounter(JSON.parse(iframe4data));
			}

		}

		$.extend(iFRAME4.prototype, iframe4);
	};
	

	OCA.DashBoard.iFRAME4 = iFRAME4;
	OCA.DashBoard.iframe4 = new iFRAME4();

})();
