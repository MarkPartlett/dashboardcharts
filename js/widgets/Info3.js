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
	var Info3  = function () {

		var info3 = {

			divInfo3: null,

			init: function () {
				
				
				
					   info3.divInfo3 = $('#widget-info3');
					   info3.getInfo3Data();
					      },

  			getInfo3Data: function () {
                    		var request = {
					widget: 'Info3',
					request: 'getInfo3Data'
							};
		
			net.requestWidget(request, info3.displayInfo3Data);
			
					},
			
			displayInfo3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var info3data = result.value.info3;
					

									
				
					$('#widget-header-name').text(info3data);
					
					info3.renderCounter(JSON.parse(info3data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-info3').remove();
					$('#widget-info3').append('<canvas id="line-info3" height="80%"></canvas>');
						
					info3.divInfo3.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.info3 === undefined) {
					return;
				}
				
				info3.divInfo3.fadeOut(150, function () {
						$(this).html(info3data).fadeIn(150);
						
					});
			$('#widget-header-name').text(info3data);
				info3.renderCounter(JSON.parse(info3data));
			}

		}

		$.extend(Info3.prototype, info3);
	};
	

	OCA.DashBoard.Info3 = Info3;
	OCA.DashBoard.info3 = new Info3();

})();
