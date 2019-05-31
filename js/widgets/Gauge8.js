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
	var Gauge8  = function () {

		var gauge8 = {

			divGauge8: null,

			init: function () {
				
				
				
					   gauge8.divGauge8 = $('#widget-gauge8b');
					   gauge8.getGauge8Data();
					      },

  			getGauge8Data: function () {
                    		var request = {
					widget: 'Gauge8',
					request: 'getGauge8Data'
							};
		
			net.requestWidget(request, gauge8.displayGauge8Data);
			
					},
			
			displayGauge8Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge8data = result.value.gauge8;
				
					gauge8.renderGauge(JSON.parse(gauge8data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge8').remove();
					$('#widget-gauge8').append('<canvas id="line-gauge8" width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge8");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);
					gauge8.divGauge8.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});
										
},		
		
			push: function (payload) {
				if (payload.gauge8 === undefined) {
					return;
				}

				gauge8.renderGauge(JSON.parse(gauge8data));
			}

		}

		$.extend(Gauge8.prototype, gauge8);
	};
	

	OCA.DashBoard.Gauge8 = Gauge8;
	OCA.DashBoard.gauge8 = new Gauge8();

})();
