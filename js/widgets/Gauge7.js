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
	var Gauge7  = function () {

		var gauge7 = {

			divGauge7: null,

			init: function () {
				
				
				
					   gauge7.divGauge7 = $('#widget-gauge7b');
					   gauge7.getGauge7Data();
					      },

  			getGauge7Data: function () {
                    		var request = {
					widget: 'Gauge7',
					request: 'getGauge7Data'
							};
		
			net.requestWidget(request, gauge7.displayGauge7Data);
			
					},
			
			displayGauge7Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge7data = result.value.gauge7;
		
					gauge7.renderGauge(JSON.parse(gauge7data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge7').remove();
					$('#widget-gauge7').append('<canvas id="line-gauge7"  width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge7");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);		
					gauge7.divGauge7.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});
										
},		
		
			push: function (payload) {
				if (payload.gauge7 === undefined) {
					return;
				}

				gauge7.renderGauge(JSON.parse(gauge7data));
			}

		}

		$.extend(Gauge7.prototype, gauge7);
	};
	

	OCA.DashBoard.Gauge7 = Gauge7;
	OCA.DashBoard.gauge7 = new Gauge7();

})();
