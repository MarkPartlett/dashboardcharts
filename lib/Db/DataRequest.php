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

namespace OCA\DashboardCharts\Db;


use OCA\DashboardCharts\Model\WidgetConfig;
use OCP\Dashboard\Model\IWidgetConfig;

class DataRequest extends DataRequestBuilder {


	/**
	 * @param IWidgetConfig $settings
	 */
	public function create(string $widgetId, string $userId, string $settings) {

		$qb = $this->getSettingsDeleteSql();
		$this->limitToUserId($qb, $userId);	
		$this->limitToWidgetId($qb, $widgetId);	
			$cursor = $qb->execute();
		if ($cursor === 0) {
			error_log('error in delete of old Widget Data');
		}
	
		
		$qb = $this->getSettingsInsertSql();

		$qb->setValue('user_id', $qb->createNamedParameter($userId))
		   ->setValue('widget', $qb->createNamedParameter($widgetId))
		   ->setValue('data', $qb->createNamedParameter($settings));


			$cursor = $qb->execute();
		if ($cursor === 0) {
			error_log('error in save of Widget Data');
		}
	}


	/**
	 * @param $widgetId
	 * @param $userId
	 *
	 * @return WidgetConfig
	 */
	public function get(string $widgetId, string $userId) {

		$qb = $this->getSettingsSelectSql();
		$this->limitToWidgetId($qb, $widgetId);
		$this->limitToUserId($qb, $userId);

		$cursor = $qb->execute();
		$data = $cursor->fetch();


		$cursor->closeCursor();

		return $this->parseSettingsSelectSql($data);
	}

		public function getWidgets( string $userId): array {

		$qb = $this->getWidgetsSelectSql();
		$this->limitToUserId($qb, $userId);

		$cursor = $qb->execute();
		$data = $cursor->fetchAll();


		$cursor->closeCursor();


		return $data;
	}


}
