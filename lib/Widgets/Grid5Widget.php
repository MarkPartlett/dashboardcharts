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
use OCA\DashboardCharts\Service\Widgets\Grid5\Grid5Service;
use OCP\AppFramework\QueryException;
use OCP\Dashboard\IDashboardWidget;
use OCP\Dashboard\Model\IWidgetRequest;
use OCP\Dashboard\Model\IWidgetConfig;
use OCP\IL10N;


class Grid5Widget implements IDashboardWidget {

	const WIDGET_ID = 'Grid5';

       private $l10n;


	private $grid5Service;

	public function __construct( Grid5Service $grid5Service) {
          //      $this->l10n = $l10n;
                $this->Grid5Service = $grid5Service;
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
		return 'Grid 5';
	}


	/**
	 * @return string
	 */
	public function getDescription(): string {
		return 'datatables.js'
			   . '..Dynamic data grid from https://datatables.net/';
	}


	/**
	 * @return WidgetTemplate
	 */
	public function getWidgetTemplate(): WidgetTemplate {
		$template = new WidgetTemplate();
		$template->addCss('widgets/grid5')
				 ->addJs('widgets/Grid5')
                 ->addJs('widgets/datatables')
				 ->setIcon('icon-chart')
				 ->setContent('widgets/Grid5')
                 ->setInitFunction('OCA.DashBoard.grid5.init');	


		return $template;
	}


	/**
	 * @return WidgetSetup
	 */
	public function getWidgetSetup(): WidgetSetup {
		$setup = new WidgetSetup();
		$setup->addSize(WidgetSetup::SIZE_TYPE_MIN, 4, 6)
			  ->addSize(WidgetSetup::SIZE_TYPE_MAX, 8, 24)
			  ->addSize(WidgetSetup::SIZE_TYPE_DEFAULT, 4, 6);
			  
		$setup->addMenuEntry('OCA.DashBoard.grid5.getGrid5Data', 'icon-chart', 'Refresh');
		$setup->addDelayedJob('OCA.DashBoard.grid5.getGrid5Data', 300);
		$setup->setPush('OCA.DashBoard.grid5.push');

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
		if ($request->getRequest() === 'getGrid5Data') {
			$request->addResult('grid5', $this->Grid5Service->getGrid5Data());
	}
    }
}
