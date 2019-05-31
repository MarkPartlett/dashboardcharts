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

namespace OCA\DashboardCharts\Widgets;

use OCP\Dashboard\Model\WidgetSetup;
use OCP\Dashboard\Model\WidgetTemplate;
use OCA\DashboardCharts\AppInfo\Application;
use OCA\DashboardCharts\Service\Widgets\Gauge4\Gauge4Service;
use OCP\AppFramework\QueryException;
use OCP\Dashboard\IDashboardWidget;
use OCP\Dashboard\Model\IWidgetRequest;
use OCP\Dashboard\Model\IWidgetConfig;
use OCP\IL10N;


class Gauge4Widget implements IDashboardWidget {

	const WIDGET_ID = 'Gauge4';

       private $l10n;


	private $gauge4Service;

	public function __construct( Gauge4Service $gauge4Service) {
          //      $this->l10n = $l10n;
                $this->Gauge4Service = $gauge4Service;
        }



	/**
	 * @return string
	 */
	public function getId(): string {
		return self::WIDGET_ID;
	}


	/**
	 * @return string
	 */
	public function getName(): string {
		return 'Gauge 4';
	}


	/**
	 * @return string
	 */
	public function getDescription(): string {
		return 'Gauge.js'
			   . '..Dynamic gauges from https://bernii.github.io/gauge.js/';
	}


	/**
	 * @return WidgetTemplate
	 */
	public function getWidgetTemplate(): WidgetTemplate {
		$template = new WidgetTemplate();
		$template->addCss('widgets/gauge4')
				 ->addJs('widgets/Gauge4')
          //       ->addJs('widgets/gauge.min')
				 ->setIcon('icon-chart')
				 ->setContent('widgets/Gauge4')
                 ->setInitFunction('OCA.DashBoard.gauge4.init');	


		return $template;
	}


	/**
	 * @return WidgetSetup
	 */
	public function getWidgetSetup(): WidgetSetup {
		$setup = new WidgetSetup();
		$setup->addSize(WidgetSetup::SIZE_TYPE_MIN, 1, 2)
			  ->addSize(WidgetSetup::SIZE_TYPE_MAX, 3, 3)
			  ->addSize(WidgetSetup::SIZE_TYPE_DEFAULT, 2, 2);
			  
		$setup->addMenuEntry('OCA.DashBoard.gauge4.getGauge4Data', 'icon-chart', 'Refresh');
		$setup->addDelayedJob('OCA.DashBoard.gauge4.getGauge4Data', 300);
		$setup->setPush('OCA.DashBoard.gauge4.push');

		return $setup;
	}


	/**
	 * @param IWidgetConfig $settings
	 */
	public function loadWidget(IWidgetConfig $settings) {
	}


	/**
	 * @param IWidgetRequest $request
	 */
	public function requestWidget(IWidgetRequest $request) {
		if ($request->getRequest() === 'getGauge4Data') {
			$request->addResult('gauge4', $this->Gauge4Service->getGauge4Data());
	}
    }
}
