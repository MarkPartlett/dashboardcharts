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
	var Grid2  = function () {

		var grid2 = {

			divGrid2: null,

			init: function () {
				
				
				
					   grid2.divGrid2 = $('#widget-grid2');
					   grid2.getGrid2Data();
					      },

  			getGrid2Data: function () {
                    		var request = {
					widget: 'Grid2',
					request: 'getGrid2Data'
							};
		
			net.requestWidget(request, grid2.displayGrid2Data);
			
					},
			
			displayGrid2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var grid2data = result.value.grid2;
					

					
					grid2.renderGrid(JSON.parse(grid2data));
					
					
					},
					
			renderGrid: function(griddata) {
				
				    $('#grid2-data_wrapper').remove();
					$('#widget-grid2').append('<table id="grid2-data" class="display" width="100%"></table>');
				//	var ctx = document.getElementById("line-grid2").getContext('2d');
				//	console.log(griddata);
				//	$('#grid2-data').DataTable(griddata);
				//	$('#grid2-data').DataTable().draw('page');
				
						$('#grid2-data').fadeOut(150, function () {
						$(this).DataTable(griddata);
						$(this).DataTable().draw('page');
						$(this).fadeIn(150);
						});
			//		var myChart = new Chart(ctx, griddata);
					
					// register the grid component

					
					
					
},		
		
			push: function (payload) {
				if (payload.grid2 === undefined) {
					return;
				}
				
		//		grid2.divGrid2.fadeOut(150, function () {
		//				$(this).text(grid2data).fadeIn(150);
						
		//			});
			
				grid2.renderGrid(JSON.parse(grid2data));
			}

		}

		$.extend(Grid2.prototype, grid2);
	};
	

	OCA.DashBoard.Grid2 = Grid2;
	OCA.DashBoard.grid2 = new Grid2();

})();
