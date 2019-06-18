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
	var HChart3  = function () {

		var hchart3 = {

			divHChart3: null,

			init: function () {
					   hchart3.divHChart3 = $('#widget-hchart3');
					   hchart3.getHChart3Data();
					      },

  			getHChart3Data: function () {
                    		var request = {
					widget: 'HChart3',
					request: 'getHChart3Data'
							};
		
			net.requestWidget(request, hchart3.displayHChart3Data);
			
					},
			
			displayHChart3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var hchart3data = result.value.hchart3;
					
					
					
				//	hchart3.renderChart(hchart3data);
					hchart3.renderChart(JSON.parse(hchart3data));
					
					
					},
					
			renderChart: function(hchartdata) {
			//	console.log(hchartdata);
				//    $('#line-hchart3').remove();
				//	$('#widget-hchart3').append('<canvas id="line-hchart3" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-hchart3").getContext('2d');
		Highcharts.chart('widget-hchart3',hchartdata);
		//console.log(hchartdata);
},		
			push: function (payload) {
				if (payload.hchart3 === undefined) {
					return;
				}
			//hchart3.renderChart(JSON.parse(payload));
				hchart3.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HChart3.prototype, hchart3);
	};
	

	OCA.DashBoard.HChart3 = HChart3;
	OCA.DashBoard.hchart3 = new HChart3();

})();
