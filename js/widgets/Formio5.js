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
	var Formio5  = function () {

		var formio5 = {

			divFormio5: null,

			init: function () {
								    

       
				
					   formio5.divFormio5 = $('#widget-formio5');
					   formio5.getFormio5Data();
				
					      },

  			getFormio5Data: function () {
                    		var request = {
					widget: 'Formio5',
					request: 'getFormio5Data'
							};
		
			net.requestWidget(request, formio5.displayFormio5Data);
			
					},
			
			displayFormio5Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var formio5data = result.value.formio5;
								
		/**		formio5.renderCounter(JSON.parse(formio5data));
	       
			*/
			 Formio.icons = 'fontawesome';
 Formio.createForm(document.getElementById('formio5Widget'), JSON.parse(formio5data).formdata).then(function(form) {
      
          form.submission = {
              //Prefilled data, uncomment if need
              data: {
              	//requesterName:'John Doe',
                //requesterEmail:'demo@partlettconsulting.com.au',
                //orderNumber: 12,
                //orderDate:Date(),
                //itemName:'My item name',
                //itemCost:100000,
                //itemQty:2,
                //purchaseSum:200000,
                //purchaseGoal:'Comment text here'
              }
            };
  //Sending data to environment
  //Start comment this function, if used Form IO Webhook Premium Action        
  form.on('submit', function(submission) {
          var data = {
            request : submission
          }
		  var webhookUrl = JSON.parse(formio5data).webhookUrl;
          console.log(submission);
              axios
              .post(webhookUrl, data)
              .then(function (response) {
              console.log(response);
            })
              .catch(function (error) {
              console.log(error);
            });
            });
          //End comment this function, if used Form IO Webhook Premium Action 
       
      });		
    // Formio.builder(document.getElementById('formio'), JSON.parse(formio5data));	   
	   console.log('got here');
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-formio5').remove();
				//	$('#widget-formio5').append('<canvas id="line-formio5" height="80%"></canvas>');

				$('#widget-formio5')[0].src = counterdata.URL;
				
					formio5.divFormio5.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.formio5 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(formio5data);
				formio5.renderCounter(JSON.parse(formio5data));
			}

		}

		$.extend(Formio5.prototype, formio5);
	};
	

	OCA.DashBoard.Formio5 = Formio5;
	OCA.DashBoard.formio5 = new Formio5();

})();
