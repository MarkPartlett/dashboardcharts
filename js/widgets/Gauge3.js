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
	var Gauge3  = function () {

		var gauge3 = {

			divGauge3: null,

			init: function () {
				
				
				
					   gauge3.divGauge3 = $('#widget-gauge3b');
					   gauge3.getGauge3Data();
					      },

  			getGauge3Data: function () {
                    		var request = {
					widget: 'Gauge3',
					request: 'getGauge3Data'
							};
		
			net.requestWidget(request, gauge3.displayGauge3Data);
			
					},
			
			displayGauge3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge3data = result.value.gauge3;
					
	
					gauge3.renderGauge(JSON.parse(gauge3data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge3').remove();
					$('#widget-gauge3').append('<canvas id="line-gauge3"  width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge3");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);	
		gauge3.divGauge3.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});					
										
},		
		
			push: function (payload) {
				if (payload.gauge3 === undefined) {
					return;
				}

			
				gauge3.renderGauge(JSON.parse(gauge3data));
			}

		}

		$.extend(Gauge3.prototype, gauge3);
	};
	

	OCA.DashBoard.Gauge3 = Gauge3;
	OCA.DashBoard.gauge3 = new Gauge3();

})();
