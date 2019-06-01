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

$(document).ready(function() {

	var urlRegex = /https?:\/\/([^\/]+)/,
		$urlInput = $('#dashboard-textChart1_0'),
		$textarea = $('#dashboard-textarea0'),
		$section = $('#dashboard-section'),
		$saveButton = $section.find('button'),
		cachebuster = parseInt($section.data('cachebuster'));

	$('#dashboard-save').on('click', function(event) {
		event.preventDefault();

		var selector = '#dashboard-message',
			snippetValue = $textarea.val(),
			urlValue = $urlInput.val();
		$section.find('textarea').each(function(){
		$(this).prop('disabled', true);
		});
		OC.msg.startSaving(selector);
		
		var returnMsg = '[{';
		$section.find('textarea').each(function(){
		returnMsg += "\"widget\":\""+ $(this).attr('id')+"\",\"data\":"+$(this).attr('value')+"},{";
			});
		returnMsg = returnMsg.substring(0, returnMsg.length - 3);
		returnMsg += "}]";
		
		returnMsg = 'dashboard=' + returnMsg;
	//	console.log(returnMsg);
		
	//	function saveSettings() {
	//	OC.msg.startSaving('#activity_notifications_msg');
	//	var post = $(returnMsg).serialize();
		var post = returnMsg;

		$.post(OC.generateUrl('/apps/dashboardcharts/settings'), post, function(response) {
			OC.msg.finishedSuccess('#activity_notifications_msg', response.set);
		});
	//}
			
		$section.find('textarea').each(function(){
		$(this).prop('disabled', false);
		});	
		

	//	OCP.AppConfig.setValue('dashboard', 'snippet', snippetValue, {
	//		success: function(){
	//			$textarea.prop('disabled', false);

	//			OCP.AppConfig.setValue('dashboard', 'widget', urlValue, {
	//				success: function(){
	//					$urlInput.prop('disabled', false);
	//					OC.msg.finishedSuccess(selector, t('settings', 'Saved'));
	//				},
	//				error: function(){
	//					$urlInput.prop('disabled', false);
	//					OC.msg.finishedError(selector, t('dashboard', 'Error while saving'));
	//				}
	//			});
	//		},
	//		error: function(){
	//			$textarea.prop('disabled', false);
	//			$urlInput.prop('disabled', false);
	//			OC.msg.finishedError(selector, t('dashboard', 'Error while saving'));
	//		}
	//	});

		cachebuster += 1;
		OCP.AppConfig.setValue('dashboardcharts', 'cachebuster', cachebuster);
	});

	
	$('#dashboard-load').on('click', function(event) {
		event.preventDefault();

		var selector = '#dashboard-message',
			snippetValue = $textarea.val(),
			urlValue = $urlInput.val();
		$section.find('textarea').each(function(){
		$(this).prop('disabled', true);
		});
		OC.msg.startSaving(selector);
		
		var returnMsg = '[{';
		$section.find('textarea').each(function(){
		returnMsg += "\"widget\":\""+ $(this).attr('id')+"\",\"data\":"+$(this).attr('value')+"},{";
			});
		returnMsg = returnMsg.substring(0, returnMsg.length - 3);
		returnMsg += "}]";
		
		returnMsg = 'dashboard=' + returnMsg;
	//	console.log(returnMsg);
		
	//	function saveSettings() {
	//	OC.msg.startSaving('#activity_notifications_msg');
	//	var post = $(returnMsg).serialize();
		var post = returnMsg;

		$.post(OC.generateUrl('/apps/dashboardcharts/settings'), post, function(response) {
			OC.msg.finishedSuccess('#activity_notifications_msg', response.set);
		});
	//}
			
		$section.find('textarea').each(function(){
		$(this).prop('disabled', false);
		});	
		

	//	OCP.AppConfig.setValue('dashboard', 'snippet', snippetValue, {
	//		success: function(){
	//			$textarea.prop('disabled', false);

	//			OCP.AppConfig.setValue('dashboard', 'widget', urlValue, {
	//				success: function(){
	//					$urlInput.prop('disabled', false);
	//					OC.msg.finishedSuccess(selector, t('settings', 'Saved'));
	//				},
	//				error: function(){
	//					$urlInput.prop('disabled', false);
	//					OC.msg.finishedError(selector, t('dashboard', 'Error while saving'));
	//				}
	//			});
	//		},
	//		error: function(){
	//			$textarea.prop('disabled', false);
	//			$urlInput.prop('disabled', false);
	//			OC.msg.finishedError(selector, t('dashboard', 'Error while saving'));
	//		}
	//	});

		cachebuster += 1;
		OCP.AppConfig.setValue('dashboardcharts', 'cachebuster', cachebuster);
	});
	/**
	 * try to detect an URL from the snippet input
	 */
	$textarea.on('change', function() {
		var value = $textarea.val(),
			result = urlRegex.exec(value);

		if ($urlInput.val() === '' && result !== null) {
			$urlInput.val(result[1]);
		}

		$saveButton.prop('disabled', false);
	});
	
	$urlInput.on('change', function() {
		$saveButton.prop('disabled', false);
	})
});
