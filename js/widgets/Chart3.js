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
	var Charts3  = function () {

		var charts3 = {

			divCharts3: null,

			init: function () {
					   charts3.divCharts3 = $('#widget-chart3b');
					   charts3.getChart3Data();
					      },

  			getChart3Data: function () {
                    		var request = {
					widget: 'Charts3',
					request: 'getChart3Data'
				};
		
			net.requestWidget(request, charts3.displayChart3Data);
			
				},
			
			displayChart3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var charts3data = result.value.chart3;
					
					
					
						
					charts3.renderChart(JSON.parse(charts3data));
					
			},
					
			renderChart: function(chartdata) {
				    $('#line-chart3').remove();
					$('#widget-chart3').append('<canvas id="line-chart3" width="100%"></canvas>');
					var ctx = document.getElementById("line-chart3").getContext('2d');
					var myChart = new Chart(ctx, chartdata);
},	
		
			push: function (payload) {
				if (payload.charts3 === undefined) {
					return;
				}
			
				charts3.renderChart(JSON.parse(charts3data));
			}

		};

		$.extend(Charts3.prototype, charts3);
	};
	

	OCA.DashBoard.Charts3 = Charts3;
	OCA.DashBoard.charts3 = new Charts3();

})();
