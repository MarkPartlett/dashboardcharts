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
	var Formio2  = function () {

		var formio2 = {

			divFormio2: null,

			init: function () {
								    

       
				
					   formio2.divFormio2 = $('#widget-formio2');
					   formio2.getFormio2Data();
				
					      },

  			getFormio2Data: function () {
                    		var request = {
					widget: 'Formio2',
					request: 'getFormio2Data'
							};
		
			net.requestWidget(request, formio2.displayFormio2Data);
			
					},
			
			displayFormio2Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var formio2data = result.value.formio2;
								
		/**		formio2.renderCounter(JSON.parse(formio2data));
	       
			*/
			 Formio.icons = 'fontawesome';
			 Formio.createForm(document.getElementById('formio2Widget'), JSON.parse(formio2data).formdata).then(function(form) {
      
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
		  var webhookUrl = JSON.parse(formio2data).webhookUrl;
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
		
	
    // Formio.builder(document.getElementById('formio'), JSON.parse(formio2data));	   
	   console.log('got here');
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-formio2').remove();
				//	$('#widget-formio2').append('<canvas id="line-formio2" height="80%"></canvas>');

				$('#widget-formio2')[0].src = counterdata.URL;
				
					formio2.divFormio2.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.formio2 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(formio2data);
				formio2.renderCounter(JSON.parse(formio2data));
			}

		}

		$.extend(Formio2.prototype, formio2);
	};
	

	OCA.DashBoard.Formio2 = Formio2;
	OCA.DashBoard.formio2 = new Formio2();

})();
