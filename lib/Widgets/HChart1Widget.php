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
use OCA\DashboardCharts\Service\Widgets\HChart1\HChart1Service;
use OCP\AppFramework\QueryException;
use OCP\Dashboard\IDashboardWidget;
use OCP\Dashboard\Model\IWidgetRequest;
use OCP\Dashboard\Model\IWidgetConfig;
use OCP\IL10N;


class HChart1Widget implements IDashboardWidget {

	const WIDGET_ID = 'HChart1';

       private $l10n;


	private $hchart1Service;

	public function __construct(HChart1Service $hchart1Service) {
          //      $this->l10n = $l10n;
                $this->HChart1Service = $hchart1Service;
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
		return 'HighChart 1';
	}


	/**
	 * @return string
	 */
	public function getDescription(): string {
		return 'HighCharts'
			   . '..Dynamic charts/graphs from https://www.highcharts.com';
	}


	/**
	 * @return WidgetTemplate
	 */
	public function getWidgetTemplate(): WidgetTemplate {
		$template = new WidgetTemplate();
		$template->addCss('widgets/hchart1')
				 ->addJs('widgets/HChart1')
                 ->addJs('widgets/highcharts')
				 ->addJs('widgets/highcharts-more')
				 ->addJs('widgets/highcharts-3d')
				 ->addJs('widgets/exporting')
				 ->setIcon('icon-chart')
				 ->setContent('widgets/HChart1')
                 ->setInitFunction('OCA.DashBoard.hchart1.init');	


		return $template;
	}


	/**
	 * @return WidgetSetup
	 */
	public function getWidgetSetup(): WidgetSetup {
		$setup = new WidgetSetup();
		$setup->addSize(WidgetSetup::SIZE_TYPE_MIN, 3, 4)
			  ->addSize(WidgetSetup::SIZE_TYPE_MAX, 6, 12)
			  ->addSize(WidgetSetup::SIZE_TYPE_DEFAULT, 3, 4);
			  
		$setup->addMenuEntry('OCA.DashBoard.hchart1.getHChart1Data', 'icon-chart', 'Refresh');
		$setup->addDelayedJob('OCA.DashBoard.hchart1.getHChart1Data', 300);
		$setup->setPush('OCA.DashBoard.hchart1.push');

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
		if ($request->getRequest() === 'getHChart1Data') {
			$request->addResult('hchart1', $this->HChart1Service->getHChart1Data());
	}
    }
}
