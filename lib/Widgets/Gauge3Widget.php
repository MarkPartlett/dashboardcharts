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
use OCA\DashboardCharts\Service\Widgets\Gauge3\Gauge3Service;
use OCP\AppFramework\QueryException;
use OCP\Dashboard\IDashboardWidget;
use OCP\Dashboard\Model\IWidgetRequest;
use OCP\Dashboard\Model\IWidgetConfig;
use OCP\IL10N;


class Gauge3Widget implements IDashboardWidget {

	const WIDGET_ID = 'Gauge3';

       private $l10n;


	private $gauge3Service;

	public function __construct( Gauge3Service $gauge3Service) {
          //      $this->l10n = $l10n;
                $this->Gauge3Service = $gauge3Service;
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
		return 'Gauge 3';
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
		$template->addCss('widgets/gauge3')
				 ->addJs('widgets/Gauge3')
       //          ->addJs('widgets/gauge.min')
				 ->setIcon('icon-chart')
				 ->setContent('widgets/Gauge3')
                 ->setInitFunction('OCA.DashBoard.gauge3.init');	


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
			  
		$setup->addMenuEntry('OCA.DashBoard.gauge3.getGauge3Data', 'icon-chart', 'Refresh');
		$setup->addDelayedJob('OCA.DashBoard.gauge3.getGauge3Data', 300);
		$setup->setPush('OCA.DashBoard.gauge3.push');

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
		if ($request->getRequest() === 'getGauge3Data') {
			$request->addResult('gauge3', $this->Gauge3Service->getGauge3Data());
	}
    }
}
