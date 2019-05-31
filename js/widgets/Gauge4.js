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
	var Gauge4  = function () {

		var gauge4 = {

			divGauge4: null,

			init: function () {
				
				
				
					   gauge4.divGauge4 = $('#widget-gauge4b');
					   gauge4.getGauge4Data();
					      },

  			getGauge4Data: function () {
                    		var request = {
					widget: 'Gauge4',
					request: 'getGauge4Data'
							};
		
			net.requestWidget(request, gauge4.displayGauge4Data);
			
					},
			
			displayGauge4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge4data = result.value.gauge4;
					
		
					
					gauge4.renderGauge(JSON.parse(gauge4data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge4').remove();
					$('#widget-gauge4').append('<canvas id="line-gauge4" width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge4");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);	

		gauge4.divGauge4.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});					
										
},		
		
			push: function (payload) {
				if (payload.gauge4 === undefined) {
					return;
				}
		
			gauge4.renderGauge(JSON.parse(gauge4data));
			}

		}

		$.extend(Gauge4.prototype, gauge4);
	};
	

	OCA.DashBoard.Gauge4 = Gauge4;
	OCA.DashBoard.gauge4 = new Gauge4();

})();
