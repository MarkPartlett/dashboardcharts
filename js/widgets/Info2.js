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
	var Info2  = function () {

		var info2 = {

			divInfo2: null,

			init: function () {
				
				
				
					   info2.divInfo2 = $('#widget-info2');
					   info2.getInfo2Data();
					      },

  			getInfo2Data: function () {
                    		var request = {
					widget: 'Info2',
					request: 'getInfo2Data'
							};
		
			net.requestWidget(request, info2.displayInfo2Data);
			
					},
			
			displayInfo2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var info2data = result.value.info2;
					

		
				
					$('#widget-header-name').text(info2data);
					
					info2.renderCounter(JSON.parse(info2data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
			//	    $('#line-info2').remove();
			//		$('#widget-info2').append('<canvas id="line-info2" height="80%"></canvas>');
						
					info2.divInfo2.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});					
										
},		
		
			push: function (payload) {
				if (payload.info2 === undefined) {
					return;
				}
				
				info2.divInfo2.fadeOut(150, function () {
						$(this).html(info2data).fadeIn(150);
						
					});
			$('#widget-header-name').text(info2data);
				info2.renderCounter(JSON.parse(info2data));
			}

		}

		$.extend(Info2.prototype, info2);
	};
	

	OCA.DashBoard.Info2 = Info2;
	OCA.DashBoard.info2 = new Info2();

})();
