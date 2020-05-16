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

namespace OCA\DashboardCharts\Db;

use OCP\IDBConnection;
use OCP\AppFramework\Db\Mapper;

class DataMapper extends Mapper {
        public function __construct (IDBConnection $db) {
                parent::__construct($db, 'dashboard_data');
        }

        public function setData ($widgetName, $userId, $dataValue) {
                $sql = "DELETE FROM *PREFIX*dashboard_data  WHERE `user_id` = '" . $userId . "' and `widget` = '" . $widgetName . "'";
                $this->db->executequery($sql);

                $sql = "INSERT INTO *PREFIX*dashboard_data (`user_id`,`widget`,`data`) VALUES ('" . $userId . "','" . $widgetName . "','" . $dataValue . "')";
                $this->db->executequery($sql);
        }
		public function getWidgets ($userId) {
			    $sql = "SELECT widget FROM *PREFIX*dashboard_data WHERE `user_id` ='" . $userId . "'";
				$result = $this->db->executeQuery($sql);

                if ($row = $result->fetchAll()) {
                        return $row["widget"];
                }

        public function getData ($userId, $widgetName) {
                $sql = "SELECT data FROM *PREFIX*dashboard_data WHERE `user_id` ='" . $userId . "' and `widget` ='" . $widgetName . "'";
                $result = $this->db->executeQuery($sql);

                if ($row = $result->fetch()) {
                        return $row["data"];
                }
				
		public function setTransform ($widgetName, $userId, $sourceValue, $transformValue) {
                $sql = "DELETE FROM *PREFIX*dashboard_datasource  WHERE `user_id` = '" . $userId . "' and `widget` = '" . $widgetName . "'";
                $this->db->executequery($sql);

                $sql = "INSERT INTO *PREFIX*dashboard_datasource (`user_id`,`widget`,`source`,`transform`) VALUES ('" . $userId . "','" . $widgetName . "','" . $sourceValue . "','" . $transformValue . "')";
                $this->db->executequery($sql);
        }	
	    public function getTransform ($userId, $widgetName) {
                $sql = "SELECT transform FROM *PREFIX*dashboard_datasource WHERE `user_id` ='" . $userId . "' and `widget` ='" . $widgetName . "'";
                $result = $this->db->executeQuery($sql);

                if ($row = $result->fetch()) {
                        return $row["transform"];
                }
	    public function getSource ($userId, $widgetName) {
                $sql = "SELECT source FROM *PREFIX*dashboard_datasource WHERE `user_id` ='" . $userId . "' and `widget` ='" . $widgetName . "'";
                $result = $this->db->executeQuery($sql);

                if ($row = $result->fetch()) {
                        return $row["source"];
                }				
                return 0;
        }
};
?>
