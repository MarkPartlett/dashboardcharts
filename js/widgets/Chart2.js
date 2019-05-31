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
	var Charts2  = function () {

		var charts2 = {

			divCharts2: null,

			init: function () {
					   charts2.divCharts2 = $('#widget-chart2b');
					   charts2.getChart2Data();
					      },

  			getChart2Data: function () {
                    		var request = {
					widget: 'Charts2',
					request: 'getChart2Data'
				};
		
			net.requestWidget(request, charts2.displayChart2Data);
			
				},
			
			displayChart2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var charts2data = result.value.chart2;
									
								
				
					charts2.renderChart(JSON.parse(charts2data));
					
			},
					
			renderChart: function(chartdata) {
				    $('#line-chart2').remove();
					$('#widget-chart2').append('<canvas id="line-chart2" width="100%"></canvas>');
					var ctx = document.getElementById("line-chart2").getContext('2d');
					
					var myChart = new Chart(ctx, chartdata);
},
		
	
			push: function (payload) {
				if (payload.charts2 === undefined) {
					return;
				}
			
				
				charts2.renderChart(JSON.parse(charts2data));
			}

		};

		$.extend(Charts2.prototype, charts2);
	};
	

	OCA.DashBoard.Charts2 = Charts2;
	OCA.DashBoard.charts2 = new Charts2();

})();
