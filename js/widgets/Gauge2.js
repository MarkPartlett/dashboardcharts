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
	var Gauge2  = function () {

		var gauge2 = {

			divGauge2: null,

			init: function () {
				
				
				
					   gauge2.divGauge2 = $('#widget-gauge2b');
					   gauge2.getGauge2Data();
					      },

  			getGauge2Data: function () {
                    		var request = {
					widget: 'Gauge2',
					request: 'getGauge2Data'
							};
		
			net.requestWidget(request, gauge2.displayGauge2Data);
			
					},
			
			displayGauge2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge2data = result.value.gauge2;
					
	
					gauge2.renderGauge(JSON.parse(gauge2data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge2').remove();
					$('#widget-gauge2').append('<canvas id="line-gauge2"  width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge2");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);	

					gauge2.divGauge2.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
					});					
										
},
	
			push: function (payload) {
				if (payload.gauge2 === undefined) {
					return;
				}
	
			
				gauge2.renderGauge(JSON.parse(gauge2data));
			}

		}

		$.extend(Gauge2.prototype, gauge2);
	};
	

	OCA.DashBoard.Gauge2 = Gauge2;
	OCA.DashBoard.gauge2 = new Gauge2();

})();
