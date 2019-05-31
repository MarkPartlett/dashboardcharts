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
	var Gauge6  = function () {

		var gauge6 = {

			divGauge6: null,

			init: function () {
				
				
				
					   gauge6.divGauge6 = $('#widget-gauge6b');
					   gauge6.getGauge6Data();
					      },

  			getGauge6Data: function () {
                    		var request = {
					widget: 'Gauge6',
					request: 'getGauge6Data'
							};
		
			net.requestWidget(request, gauge6.displayGauge6Data);
			
					},
			
			displayGauge6Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge6data = result.value.gauge6;
					

					gauge6.renderGauge(JSON.parse(gauge6data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge6').remove();
					$('#widget-gauge6').append('<canvas id="line-gauge6" width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge6");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);
					gauge6.divGauge6.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});					
										
},	
		
			push: function (payload) {
				if (payload.gauge6 === undefined) {
					return;
				}
	
				gauge6.renderGauge(JSON.parse(gauge6data));
			}

		}

		$.extend(Gauge6.prototype, gauge6);
	};
	

	OCA.DashBoard.Gauge6 = Gauge6;
	OCA.DashBoard.gauge6 = new Gauge6();

})();
