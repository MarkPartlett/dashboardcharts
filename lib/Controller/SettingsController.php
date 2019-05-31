<?php
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

namespace OCA\Dashboard\Controller;

use \OCP\IConfig;
use \OCP\IRequest;
use \OCP\AppFramework\Http\TemplateResponse;
use \OCP\AppFramework\Controller;
use \OCP\AppFramework\Http\JSONResponse;
use \OCP\AppFramework\Http;
use OCA\Dashboard\Db\DataRequest;

class SettingsController extends Controller {

	/**
	 * constructor of the controller
	 *
	 * @param string $appName
	 * @param IRequest $request
	 * @param IConfig $config
	 */
	private $userId;
	private $config;

	public function __construct ($appName, IConfig $config, IRequest $request, DataRequest $dataRequest,$userId) {
		parent::__construct($appName, $request);
		$this->userId = $userId;
		$this->config = $config;
		$this->dataRequest = $dataRequest;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function personal ($dashboard) {

		
		$dashboard_json= json_decode($dashboard,true);
		foreach ($dashboard_json as $widget =>$value) {
		$userId = $this->userId;
		$widgetId = trim(json_encode(($value)['widget']),'"');
		$settings = json_encode(($value)['data']);
		$this->dataRequest->create($widgetId,  $userId,  $settings);
		}
		
		return new JSONResponse(array("set" => true));
	}
		
};
?>
