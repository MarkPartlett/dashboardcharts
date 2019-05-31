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
	var Test1  = function () {

		var test1 = {

			divTest1: null,

			init: function () {
				
				
				
					   test1.divTest1 = $('#widget-test1');
					   test1.getTest1Data();
					      },

  			getTest1Data: function () {
                    		var request = {
					widget: 'Test1',
					request: 'getTest1Data'
							};
		
			net.requestWidget(request, test1.displayTest1Data);
			
					},
			
			displayTest1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var test1data = result.value.test1;
					console.log(test1data);

					test1.divTest1.fadeOut(150, function () {
						$(this).html(test1data).fadeIn(150);
						
					});				
				//	setTitle ('bob');
				
				//	test1.setTitle ('bob');
					
					test1.renderCounter(JSON.parse(test1data));
					
					
					},
					
			renderCounter: function(counterdata) {
				
				    $('#line-test1').remove();
					$('#widget-test1').append('<canvas id="line-test1" height="80%"></canvas>');
				//	console.log(counterdata.options)
				//	console.log(counterdata.data);
					
					// register the counter component

					/*
					
					var target = document.getElementById("line-test1");
					
					var opts = {
  lines: 12, // The number of lines to draw
  angle: 0, // The length of each line
  lineWidth: 0.1, // The line thickness
  pointer: {
    length: 0.9, // The radius of the inner circle
    strokeWidth: 0.035, // The rotation offset
    color: '#000000' // Fill color
  },
  limitMax: 'false',   // If true, the pointer will not go past the end of the counter
  colorStart: '#006EAB',   // Colors
  colorStop: '#006EAB',    // just experiment with them
  strokeColor: '#FFFFFF',   // to see which ones work best for you
  generateGradient: true
};
					
					var counter = new Counter(target).setOptions(opts); // create sexy counter!
					
					counter.set(counterdata);		
					*/

					
					
},		
		
			push: function (payload) {
				if (payload.test1 === undefined) {
					return;
				}
				
				test1.divTest1.fadeOut(150, function () {
						$(this).html(test1data).fadeIn(150);
						
					});
		//	$('#widget-header-name').text(test1data);
		//		test1.renderCounter(JSON.parse(test1data));
			}

		}

		$.extend(Test1.prototype, test1);
	};
	

	OCA.DashBoard.Test1 = Test1;
	OCA.DashBoard.test1 = new Test1();

})();
