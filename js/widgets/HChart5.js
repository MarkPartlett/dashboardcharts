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
	var HChart5  = function () {

		var hchart5 = {

			divHChart5: null,

			init: function () {
					   hchart5.divHChart5 = $('#widget-hchart5');
					   hchart5.getHChart5Data();
					      },

  			getHChart5Data: function () {
                    		var request = {
					widget: 'HChart5',
					request: 'getHChart5Data'
							};
		
			net.requestWidget(request, hchart5.displayHChart5Data);
			
					},
			
			displayHChart5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
										
					var hchart5data = result.value.hchart5;
					
					
					
				//	hchart5.renderChart(hchart5data);
					hchart5.renderChart(JSON.parse(hchart5data));
					
					
					},
					
			renderChart: function(hchartdata) {
			//	console.log(hchartdata);
				//    $('#line-hchart5').remove();
				//	$('#widget-hchart5').append('<canvas id="line-hchart5" width="100%"></canvas>');
				//	var ctx = document.getElementById("line-hchart5").getContext('2d');
		Highcharts.chart('widget-hchart5',hchartdata);
		//console.log(hchartdata);
},		
			push: function (payload) {
				if (payload.hchart5 === undefined) {
					return;
				}
			//hchart5.renderChart(JSON.parse(payload));
				hchart5.renderChart(JSON.parse(payload));
			}

		}

		$.extend(HChart5.prototype, hchart5);
	};
	

	OCA.DashBoard.HChart5 = HChart5;
	OCA.DashBoard.hchart5 = new HChart5();

})();
