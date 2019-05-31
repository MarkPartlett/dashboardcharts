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


use OCA\DashboardCharts\Model\DataConfig;
use OCP\DB\QueryBuilder\IQueryBuilder;

class DataRequestBuilder extends CoreDataRequestBuilder {


	/**
	 * Base of the Sql Insert request
	 *
	 * @return IQueryBuilder
	 */
	protected function getSettingsInsertSql(): IQueryBuilder {
		
		$qb = $this->dbConnection->getQueryBuilder();
		$qb->insert(self::TABLE_SETTINGS);

		return $qb;
	}


	/**
	 * Base of the Sql Update request
	 *
	 * @return IQueryBuilder
	 */
	protected function getSettingsUpdateSql(): IQueryBuilder {
		$qb = $this->dbConnection->getQueryBuilder();
		$qb->update(self::TABLE_SETTINGS);

		return $qb;
	}


	/**
	 * Base of the Sql Select request for Shares
	 *
	 * @return IQueryBuilder
	 */
	protected function getSettingsSelectSql(): IQueryBuilder {
		$qb = $this->dbConnection->getQueryBuilder();

		/** @noinspection PhpMethodParametersCountMismatchInspection */
		$qb->select('s.user_id', 's.widget', 's.data')
		   ->from(self::TABLE_SETTINGS, 's');

		$this->defaultSelectAlias = 's';

		return $qb;
	}

	protected function getWidgetsSelectSql(): IQueryBuilder {
		$qb = $this->dbConnection->getQueryBuilder();

		/** @noinspection PhpMethodParametersCountMismatchInspection */
		$qb->select('s.user_id', 's.widget', 's.data')
		   ->from(self::TABLE_SETTINGS, 's');

		$this->defaultSelectAlias = 's';

		return $qb;
	}

	/**
	 * Base of the Sql Delete request
	 *
	 * @return IQueryBuilder
	 */
	protected function getSettingsDeleteSql(): IQueryBuilder {
		$qb = $this->dbConnection->getQueryBuilder();
		$qb->delete(self::TABLE_SETTINGS);

		return $qb;
	}


	/**
	 * @param array $data
	 *
	 * @return DataConfig
	 */
	protected function parseSettingsSelectSql($data) {
	/*	$settings = new WidgetConfig($data['widget'], $data['user_id']);
		$settings->setPosition(json_decode($data['position'], true))
				 ->setSettings(json_decode($data['settings'], true))
				 ->setEnabled(($data['enabled'] === '1') ? true : false);
*/
$settings = $data['data'];
		return $settings;
	}

	protected function parseWidgetSelectSql($data) {
	/*	$settings = new WidgetConfig($data['widget'], $data['user_id']);
		$settings->setPosition(json_decode($data['position'], true))
				 ->setSettings(json_decode($data['settings'], true))
				 ->setEnabled(($data['enabled'] === '1') ? true : false);
*/
$settings = $data;
		return $settings;
	}
	
}
