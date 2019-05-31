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
	var Charts1  = function () {

		var charts1 = {

			divCharts1: null,

			init: function () {
					   charts1.divCharts1 = $('#widget-chart1b');
					   charts1.getChart1Data();
					      },

  			getChart1Data: function () {
                    		var request = {
					widget: 'Charts1',
					request: 'getChart1Data'
							};
		
			net.requestWidget(request, charts1.displayChart1Data);
			
					},
			
			displayChart1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var charts1data = result.value.chart1;
					
					
					
					
					charts1.renderChart(JSON.parse(charts1data));
					
					
					},
					
			renderChart: function(chartdata) {
				
				    $('#line-chart1').remove();
					$('#widget-chart1').append('<canvas id="line-chart1" width="100%"></canvas>');
					var ctx = document.getElementById("line-chart1").getContext('2d');
					var myChart = new Chart(ctx, chartdata);
},		
		
			push: function (payload) {
				if (payload.charts1 === undefined) {
					return;
				}
			
				charts1.renderChart(JSON.parse(payload));
			}

		}

		$.extend(Charts1.prototype, charts1);
	};
	

	OCA.DashBoard.Charts1 = Charts1;
	OCA.DashBoard.charts1 = new Charts1();

})();
