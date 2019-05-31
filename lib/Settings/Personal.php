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

namespace OCA\DashboardCharts\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\IL10N;
use OCP\ILogger;
use OCP\Settings\ISettings;
use OCP\IConfig;
use OCA\DashboardCharts\Db\DataRequest;

class Personal implements ISettings {
	
	/** @var string */
	private $userId;

	/** @var IL10N */
	private $l;

	/** @var ILogger */
	private $logger;

	/** @var IConfig */
	private $config;

	public function __construct(
		IL10N $l,
		DataRequest $dataRequest,
		ILogger $logger,
		$userId,
		IConfig $config
	) {
		$this->l = $l;
		$this->logger = $logger;
		$this->userId = $userId;
		$this->config = $config;
		$this->dataRequest = $dataRequest;
	}
		
	/**
	 * @return TemplateResponse
	 */
	public function getForm() {
		$userId = $this->userId;
		$parameters = [	
			'widgets'     => $this->dataRequest->getWidgets($userId),
			'cachebuster' => $this->config->getAppValue('dashboard', 'cachebuster', '0'),
		];

		return new TemplateResponse('dashboardcharts', 'settings-personal', $parameters, '');
	}

	/**
	 * @return string the section ID, e.g. 'sharing'
	 */
	public function getSection() {
		return 'dashboard';
	}

	/**
	 * @return int whether the form should be rather on the top or bottom of
	 * the admin section. The forms are arranged in ascending order of the
	 * priority values. It is required to return a value between 0 and 100.
	 *
	 * E.g.: 70
	 */
	public function getPriority() {
		return 30;
	}

}
