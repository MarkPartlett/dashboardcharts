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
	var HChart1  = function () {

		var hchart1 = {

			divHChart1: null,

			init: function () {
					   hchart1.divHChart1 = $('#widget-hchart1');
					   hchart1.getHChart1Data();
					      },

  			getHChart1Data: function () {
                    		var request = {
					widget: 'HChart1',
					request: 'getHChart1Data'
							};
		
			net.requestWidget(request, hchart1.displayHChart1Data);
			
					},
			
			displayHChart1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var hchart1data = result.value.hchart1;
					
					
					
					
					hchart1.renderChart(JSON.parse(hchart1data));
					
					
					},
					
			renderChart: function(hchartdata) {
			//	console.log(hchartdata);
				//    $('#line-hchart1').remove();
				//	$('#widget-hchart1').append('<canvas id="line-hchart1" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-hchart1").getContext('2d');
		Highcharts.chart('widget-hchart1',hchartdata);
	//	console.log(hchartdata);
},		
			push: function (payload) {
				if (payload.hchart1 === undefined) {
					return;
				}
			
				hchart1.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HChart1.prototype, hchart1);
	};
	

	OCA.DashBoard.HChart1 = HChart1;
	OCA.DashBoard.hchart1 = new HChart1();

})();
