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
	var Formio1  = function () {

		var formio1 = {

			divFormio1: null,

			init: function () {
								    

       
				
					   formio1.divFormio1 = $('#widget-formio1');
					   formio1.getFormio1Data();
				
					      },

  			getFormio1Data: function () {
                    		var request = {
					widget: 'Formio1',
					request: 'getFormio1Data'
							};
		
			net.requestWidget(request, formio1.displayFormio1Data);
			
					},
			
			displayFormio1Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var formio1data = result.value.formio1;
				//	console.log(JSON.parse(formio1data[0]));
								
		/**		formio1.renderCounter(JSON.parse(formio1data));
	       
			*/
			 Formio.icons = 'fontawesome';
        Formio.createForm(document.getElementById('formio1Widget'), JSON.parse(formio1data).formdata).then(function(form) {
      
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
            variables : submission
          }
		  var webhookUrl = JSON.parse(formio1data).webhookUrl;
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
		
	

   //  Formio.builder(document.getElementById('formio1Widget'), JSON.parse(formio1data));	   
	   console.log('got here');
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-formio1').remove();
				//	$('#widget-formio1').append('<canvas id="line-formio1" height="80%"></canvas>');

				$('#widget-formio1')[0].src = counterdata.URL;
				
					formio1.divFormio1.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.formio1 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(formio1data);
				formio1.renderCounter(JSON.parse(formio1data));
			}

		}

		$.extend(Formio1.prototype, formio1);
	};
	

	OCA.DashBoard.Formio1 = Formio1;
	OCA.DashBoard.formio1 = new Formio1();

})();
