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
	var Charts5  = function () {

		var charts5 = {

			divCharts5: null,

			init: function () {
					   charts5.divCharts5 = $('#widget-chart5b');
					   charts5.getChart5Data();
					      },

  			getChart5Data: function () {
                    		var request = {
					widget: 'Charts5',
					request: 'getChart5Data'
				};
		
			net.requestWidget(request, charts5.displayChart5Data);
			
				},
			
			displayChart5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var charts5data = result.value.chart5;
					
					
					charts5.renderChart(JSON.parse(charts5data));
					
			},
					
			renderChart: function(chartdata) {
				    $('#line-chart5').remove();
					$('#widget-chart5').append('<canvas id="line-chart5" width="100%"></canvas>');
					var ctx = document.getElementById("line-chart5").getContext('2d');
					var myChart = new Chart(ctx, chartdata);
},		
		
	
			push: function (payload) {
				if (payload.charts5 === undefined) {
					return;
				}
				
				charts5.renderChart(JSON.parse(charts5data));
			}

		};

		$.extend(Charts5.prototype, charts5);
	};
	

	OCA.DashBoard.Charts5 = Charts5;
	OCA.DashBoard.charts5 = new Charts5();

})();
