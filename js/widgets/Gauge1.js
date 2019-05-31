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
	var Gauge1  = function () {

		var gauge1 = {

			divGauge1: null,

			init: function () {
				
				
				
					   gauge1.divGauge1 = $('#widget-gauge1b');
					   gauge1.getGauge1Data();
					      },

  			getGauge1Data: function () {
                    		var request = {
					widget: 'Gauge1',
					request: 'getGauge1Data'
							};
		
			net.requestWidget(request, gauge1.displayGauge1Data);
			
					},
			
			displayGauge1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge1data = result.value.gauge1;
					
					gauge1.renderGauge(JSON.parse(gauge1data));

					
					
						
				
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge1').remove();
					$('#widget-gauge1').append('<canvas id="line-gauge1" width="100%" height="70%"></canvas>');
			//			console.log(gaugedata);
					// register the gauge component

					var target = document.getElementById("line-gauge1");
	
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);	
								
					gauge1.divGauge1.fadeOut(150, function () {
						$(this).html(gaugedata.text).fadeIn(150);					
				});
				
				
										
},		
		
			push: function (payload) {
				if (payload.gauge1 === undefined) {
					return;
				}
				
				
			//	gauge1.divGauge1.fadeOut(150, function () {
			//			$(this).html(gauge1data.data2).fadeIn(150);
			//			
			//		});
			
				gauge1.renderGauge(JSON.parse(gauge1data));
			}

		}

		$.extend(Gauge1.prototype, gauge1);
	};
	

	OCA.DashBoard.Gauge1 = Gauge1;
	OCA.DashBoard.gauge1 = new Gauge1();

})();
