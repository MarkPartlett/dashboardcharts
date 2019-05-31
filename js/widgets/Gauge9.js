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
	var Gauge9  = function () {

		var gauge9 = {

			divGauge9: null,

			init: function () {
				
				
				
					   gauge9.divGauge9 = $('#widget-gauge9b');
					   gauge9.getGauge9Data();
					      },

  			getGauge9Data: function () {
                    		var request = {
					widget: 'Gauge9',
					request: 'getGauge9Data'
							};
		
			net.requestWidget(request, gauge9.displayGauge9Data);
			
					},
			
			displayGauge9Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var gauge9data = result.value.gauge9;
			
					gauge9.renderGauge(JSON.parse(gauge9data));
					
					
					},
					
			renderGauge: function(gaugedata) {
				
				    $('#line-gauge9').remove();
					$('#widget-gauge9').append('<canvas id="line-gauge9" width="100%" height="70%"></canvas>');
						
					// register the gauge component

					var target = document.getElementById("line-gauge9");
					
					var gauge = new Gauge(target).setOptions(gaugedata.options); // create sexy gauge!
					gauge.maxValue = gaugedata.maxValue;
					gauge.minValue = gaugedata.minValue;
					gauge.set(gaugedata.data);
					gauge9.divGauge9.fadeOut(150, function () {
					$(this).html(gaugedata.text).fadeIn(150);					
				});					
										
},		
		
			push: function (payload) {
				if (payload.gauge9 === undefined) {
					return;
				}
		
				gauge9.renderGauge(JSON.parse(gauge9data));
			}

		}

		$.extend(Gauge9.prototype, gauge9);
	};
	

	OCA.DashBoard.Gauge9 = Gauge9;
	OCA.DashBoard.gauge9 = new Gauge9();

})();
