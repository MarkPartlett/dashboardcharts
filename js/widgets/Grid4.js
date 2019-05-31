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
	var Grid4  = function () {

		var grid4 = {

			divGrid4: null,

			init: function () {
				
				
				
					   grid4.divGrid4 = $('#widget-grid4b');
					   grid4.getGrid4Data();
					      },

  			getGrid4Data: function () {
                    		var request = {
					widget: 'Grid4',
					request: 'getGrid4Data'
							};
		
			net.requestWidget(request, grid4.displayGrid4Data);
			
					},
			
			displayGrid4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var grid4data = result.value.grid4;
					

								
					
					grid4.renderGrid(JSON.parse(grid4data));
					
					
					},
					
			renderGrid: function(griddata) {
				
				    $('#grid4-data_wrapper').remove();
					$('#widget-grid4').append('<table id="grid4-data" class="display" width="100%"></table>');
				//	var ctx = document.getElementById("line-grid4").getContext('2d');
				//	console.log(griddata);
				//	$('#grid4-data').DataTable(griddata);
				//	$('#grid4-data').DataTable().draw(false);
						$('#grid4-data').fadeOut(150, function () {
						$(this).DataTable(griddata);
						$(this).DataTable().draw('page');
						$(this).fadeIn(150);
						});
			//		var myChart = new Chart(ctx, griddata);
					
					// register the grid component

					
					
					
},		
		
			push: function (payload) {
				if (payload.grid4 === undefined) {
					return;
				}
				
					
				grid4.renderGrid(JSON.parse(grid4data));
			}

		}

		$.extend(Grid4.prototype, grid4);
	};
	

	OCA.DashBoard.Grid4 = Grid4;
	OCA.DashBoard.grid4 = new Grid4();

})();
