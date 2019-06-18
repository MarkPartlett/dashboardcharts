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
	var HChart4  = function () {

		var hchart4 = {

			divHChart4: null,

			init: function () {
					   hchart4.divHChart4 = $('#widget-hchart4');
					   hchart4.getHChart4Data();
					      },

  			getHChart4Data: function () {
                    		var request = {
					widget: 'HChart4',
					request: 'getHChart4Data'
							};
		
			net.requestWidget(request, hchart4.displayHChart4Data);
			
					},
			
			displayHChart4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var hchart4data = result.value.hchart4;
					
					
					
				//	hchart4.renderChart(hchart4data);
					hchart4.renderChart(JSON.parse(hchart4data));
					
					
					},
					
			renderChart: function(hchartdata) {
			//	console.log(hchartdata);
				//    $('#line-hchart4').remove();
				//	$('#widget-hchart4').append('<canvas id="line-hchart4" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-hchart4").getContext('2d');
		Highcharts.chart('widget-hchart4',hchartdata);
		//console.log(hchartdata);
},		
			push: function (payload) {
				if (payload.hchart4 === undefined) {
					return;
				}
			//hchart4.renderChart(JSON.parse(payload));
				hchart4.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HChart4.prototype, hchart4);
	};
	

	OCA.DashBoard.HChart4 = HChart4;
	OCA.DashBoard.hchart4 = new HChart4();

})();
