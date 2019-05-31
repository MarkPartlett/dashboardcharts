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
	var Gauge5  = function () {

		var gauge5 = {

			divGauge5: null,

			init: function () {
				
				
				
					   gauge5.divGauge5 = $('#widget-gauge5b');
					   gauge5.getGauge5Data();
					      },

  			getGauge5Data: function () {
                    		var request = {
					widget: 'Gauge5',
					request: 'getGauge5Data'
							};
		
			net.requestWidget(request, gauge5.displayGauge5Data);
			
					},
			
			displayGauge5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge5data = result.value.gauge5;
					
	
					
					gauge5.renderGauge(JSON.parse(gauge5data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge5').remove();
					$('#widget-gauge5').append('<canvas id="line-gauge5" width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge5");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);		
					gauge5.divGauge5.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});
										
},		
		
			push: function (payload) {
				if (payload.gauge5 === undefined) {
					return;
				}

			
				gauge5.renderGauge(JSON.parse(gauge5data));
			}

		}

		$.extend(Gauge5.prototype, gauge5);
	};
	

	OCA.DashBoard.Gauge5 = Gauge5;
	OCA.DashBoard.gauge5 = new Gauge5();

})();
