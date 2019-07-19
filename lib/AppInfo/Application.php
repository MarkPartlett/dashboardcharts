<?php declare(strict_types=1);


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

namespace OCA\Dashboardcharts\AppInfo;

use \OCP\IContainer;
use OCP\AppFramework\App;
use OCP\AppFramework\IAppContainer;
use OCP\AppFramework\QueryException;




class Application extends App {

	const APP_NAME = 'dashboardcharts';

	/** @var IAppContainer */
	private $container;


	public function __construct(array $urlParams = array()) {
		parent::__construct(self::APP_NAME, $urlParams);
		$this->container = $this->getContainer();
	}


	/**
	 * Register Navigation Tab
	 *
	 * @throws QueryException
	 */
	public function registerServices() {
		$container = $this->getContainer();
		
		/** @var IDashboardManager $dashboardManager */
		$container->registerAlias('Settings', Settings::class);
	}

}




