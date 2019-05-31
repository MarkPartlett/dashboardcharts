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
	var Grid5  = function () {

		var grid5 = {

			divGrid5: null,

			init: function () {
				
				
				
					   grid5.divGrid5 = $('#widget-grid5');
					   grid5.getGrid5Data();
					      },

  			getGrid5Data: function () {
                    		var request = {
					widget: 'Grid5',
					request: 'getGrid5Data'
							};
		
			net.requestWidget(request, grid5.displayGrid5Data);
			
					},
			
			displayGrid5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var grid5data = result.value.grid5;
					

								
					
					grid5.renderGrid(JSON.parse(grid5data));
					
					
					},
					
			renderGrid: function(griddata) {
				
				    $('#grid5-data_wrapper').remove();
					$('#widget-grid5').append('<table id="grid5-data" class="display" width="100%"></table>');
				//	var ctx = document.getElementById("line-grid5").getContext('2d');
			//		console.log(griddata);
			//		$('#grid5-data').DataTable(griddata);
			//		$('#grid5-data').DataTable().draw(false);
			
					$('#grid5-data').fadeOut(150, function () {
						$(this).DataTable(griddata);
						$(this).DataTable().draw('page');
						$(this).fadeIn(150);
						});				
			//		var myChart = new Chart(ctx, griddata);
					
					// register the grid component

					
					
					
},		
		
			push: function (payload) {
				if (payload.grid5 === undefined) {
					return;
				}
				
					
				grid5.renderGrid(JSON.parse(grid5data));
			}

		}

		$.extend(Grid5.prototype, grid5);
	};
	

	OCA.DashBoard.Grid5 = Grid5;
	OCA.DashBoard.grid5 = new Grid5();

})();
