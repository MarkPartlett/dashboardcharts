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
	var Grid3  = function () {

		var grid3 = {

			divGrid3: null,

			init: function () {
				
				
				
					   grid3.divGrid3 = $('#widget-grid3');
					   grid3.getGrid3Data();
					      },

  			getGrid3Data: function () {
                    		var request = {
					widget: 'Grid3',
					request: 'getGrid3Data'
							};
		
			net.requestWidget(request, grid3.displayGrid3Data);
			
					},
			
			displayGrid3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var grid3data = result.value.grid3;
					

								
					
					grid3.renderGrid(JSON.parse(grid3data));
					
					
					},
					
			renderGrid: function(griddata) {
				
				    $('#grid3-data_wrapper').remove();
					$('#widget-grid3').append('<table id="grid3-data" class="display" width="100%"></table>');
				//	var ctx = document.getElementById("line-grid3").getContext('2d');
				//	console.log(griddata);
				//	$('#grid3-data').DataTable(griddata);
				//	$('#grid3-data').DataTable().draw(false);
				
						$('#grid3-data').fadeOut(150, function () {
						$(this).DataTable(griddata);
						$(this).DataTable().draw('page');
						$(this).fadeIn(150);
						});				
			//		var myChart = new Chart(ctx, griddata);
					
					// register the grid component

					
					
					
},		
		
			push: function (payload) {
				if (payload.grid3 === undefined) {
					return;
				}
				
					
				grid3.renderGrid(JSON.parse(grid3data));
			}

		}

		$.extend(Grid3.prototype, grid3);
	};
	

	OCA.DashBoard.Grid3 = Grid3;
	OCA.DashBoard.grid3 = new Grid3();

})();
