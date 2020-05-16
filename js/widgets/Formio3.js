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
	var Formio3  = function () {

		var formio3 = {

			divFormio3: null,

			init: function () {
								    

       
				
					   formio3.divFormio3 = $('#widget-formio3');
					   formio3.getFormio3Data();
				
					      },

  			getFormio3Data: function () {
                    		var request = {
					widget: 'Formio3',
					request: 'getFormio3Data'
							};
		
			net.requestWidget(request, formio3.displayFormio3Data);
			
					},
			
			displayFormio3Data: function (result) {
					
					if (result.result === 'fail') {
						return;
					}
					
														
					var formio3data = result.value.formio3;
								
		/**		formio3.renderCounter(JSON.parse(formio3data));
	       
			*/
			 Formio.icons = 'fontawesome';
        Formio.createForm(document.getElementById('formio3Widget'), JSON.parse(formio3data).formdata).then(function(form) {
      
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
		  var webhookUrl = JSON.parse(formio3data).webhookUrl;
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
    // Formio.builder(document.getElementById('formio'), JSON.parse(formio3data));	   
	   console.log('got here');
					
					},
					
			renderCounter: function(counterdata) {
				
				//    $('#line-formio3').remove();
				//	$('#widget-formio3').append('<canvas id="line-formio3" height="80%"></canvas>');

				$('#widget-formio3')[0].src = counterdata.URL;
				
					formio3.divFormio3.fadeOut(150, function () {
						$(this).html(counterdata.text).fadeIn(150);
						
					});
},		
		
			push: function (payload) {
				if (payload.formio3 === undefined) {
					return;
				}
				
			
		//	$('#widget-header-name').text(formio3data);
				formio3.renderCounter(JSON.parse(formio3data));
			}

		}

		$.extend(Formio3.prototype, formio3);
	};
	

	OCA.DashBoard.Formio3 = Formio3;
	OCA.DashBoard.formio3 = new Formio3();

})();
