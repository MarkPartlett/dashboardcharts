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
	var Formio4  = function () {

		var formio4 = {

			divFormio4: null,

			init: function () {
								    

       
				
					   formio4.divFormio4 = $('#widget-formio4');
					   formio4.getFormio4Data();
				
					      },

  			getFormio4Data: function () {
                    		var request = {
					widget: 'Formio4',
					request: 'getFormio4Data'
							};
		
			net.requestWidget(request, formio4.displayFormio4Data);
			
					},
			
			displayFormio4Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var formio4data = result.value.formio4;
								
		/**		formio4.renderCounter(JSON.parse(formio4data));
	       
			*/
			 Formio.icons = 'fontawesome';
  Formio.createForm(document.getElementById('formio4Widget'), JSON.parse(formio4data).formdata).then(function(form) {
      
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
		  var webhookUrl = JSON.parse(formio4data).webhookUrl;
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
    // Formio.builder(document.getElementById('formio'), JSON.parse(formio4data));	   
	   console.log('got here');
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-formio4').remove();
				//	$('#widget-formio4').append('<canvas id="line-formio4" height="80%"></canvas>');

				$('#widget-formio4')[0].src = counterdata.URL;
				
					formio4.divFormio4.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.formio4 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(formio4data);
				formio4.renderCounter(JSON.parse(formio4data));
			}

		}

		$.extend(Formio4.prototype, formio4);
	};
	

	OCA.DashBoard.Formio4 = Formio4;
	OCA.DashBoard.formio4 = new Formio4();

})();
