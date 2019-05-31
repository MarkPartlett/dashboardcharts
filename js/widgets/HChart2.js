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
	var HChart2  = function () {

		var hchart2 = {

			divHChart2: null,

			init: function () {
					   hchart2.divHChart2 = $('#widget-hchart2');
					   hchart2.getHChart2Data();
					      },

  			getHChart2Data: function () {
                    		var request = {
					widget: 'HChart2',
					request: 'getHChart2Data'
							};
		
			net.requestWidget(request, hchart2.displayHChart2Data);
			
					},
			
			displayHChart2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var hchart2data = result.value.hchart2;
					
					
					
				//	hchart2.renderChart(hchart2data);
					hchart2.renderChart(JSON.parse(hchart2data));
					
					
					},
					
			renderChart: function(hchartdata) {
			//	console.log(hchartdata);
				//    $('#line-hchart2').remove();
				//	$('#widget-hchart2').append('<canvas id="line-hchart2" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-hchart2").getContext('2d');
		Highcharts.chart('widget-hchart2',hchartdata);
		//console.log(hchartdata);
},		
			push: function (payload) {
				if (payload.hchart2 === undefined) {
					return;
				}
			//hchart2.renderChart(JSON.parse(payload));
				hchart2.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HChart2.prototype, hchart2);
	};
	

	OCA.DashBoard.HChart2 = HChart2;
	OCA.DashBoard.hchart2 = new HChart2();

})();
