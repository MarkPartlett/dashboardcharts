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

use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\Settings\IIconSection;

class Section implements IIconSection {
	/** @var IL10N */
	private $l;
	/** @var IURLGenerator */
	private $url;

	/**
	 * @param IURLGenerator $url
	 * @param IL10N $l
	 */
	public function __construct(IURLGenerator $url, IL10N $l) {
		$this->url = $url;
		$this->l = $l;
	}

	/**
	 * returns the ID of the section. It is supposed to be a lower case string,
	 * e.g. 'ldap'
	 *
	 * @returns string
	 */
	public function getID() {
		return 'dashboardcharts';
	}

	/**
	 * returns the translated name as it should be displayed, e.g. 'LDAP / AD
	 * integration'. Use the L10N service to translate it.
	 *
	 * @return string
	 */
	public function getName() {
		return $this->l->t('Dashboard Charts');
	}

	/**
	 * @return int whether the form should be rather on the top or bottom of
	 * the settings navigation. The sections are arranged in ascending order of
	 * the priority values. It is required to return a value between 0 and 99.
	 *
	 * E.g.: 70
	 */
	public function getPriority() {
		return 30;
	}

	/**
	 * {@inheritdoc}
	 */
	public function getIcon() {
		return $this->url->imagePath('core', 'actions/edit.svg');
	}
}
