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
	var Info1  = function () {

		var info1 = {

			divInfo1: null,

			init: function () {
				
				
				
					   info1.divInfo1 = $('#widget-info1');
					   info1.getInfo1Data();
					      },

  			getInfo1Data: function () {
                    		var request = {
					widget: 'Info1',
					request: 'getInfo1Data'
							};
		
			net.requestWidget(request, info1.displayInfo1Data);
			
					},
			
			displayInfo1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var info1data = result.value.info1;
								
				info1.renderCounter(JSON.parse(info1data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-info1').remove();
				//	$('#widget-info1').append('<canvas id="line-info1" height="80%"></canvas>');

					info1.divInfo1.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.info1 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(info1data);
				info1.renderCounter(JSON.parse(info1data));
			}

		}

		$.extend(Info1.prototype, info1);
	};
	

	OCA.DashBoard.Info1 = Info1;
	OCA.DashBoard.info1 = new Info1();

})();
