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
	var Charts4  = function () {

		var charts4 = {

			divCharts4: null,

			init: function () {
					   charts4.divCharts4 = $('#widget-chart4b');
					   charts4.getChart4Data();
					      },

  			getChart4Data: function () {
                    		var request = {
					widget: 'Charts4',
					request: 'getChart4Data'
				};
		
			net.requestWidget(request, charts4.displayChart4Data);
			
				},
			
			displayChart4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var charts4data = result.value.chart4;
					
					
					
					charts4.renderChart(JSON.parse(charts4data));
					
			},
					
			renderChart: function(chartdata) {
				
				    $('#line-chart4').remove();
					$('#widget-chart4').append('<canvas id="line-chart4" width="100%"></canvas>');
					var ctx = document.getElementById("line-chart4").getContext('2d');
					var myChart = new Chart(ctx, chartdata);
},		
		
	
			push: function (payload) {
				if (payload.charts4 === undefined) {
					return;
				}
				
				charts4.renderChart(JSON.parse(charts4data));
			}

		}

		$.extend(Charts4.prototype, charts4);
	};
	

	OCA.DashBoard.Charts4 = Charts4;
	OCA.DashBoard.charts4 = new Charts4();

})();
