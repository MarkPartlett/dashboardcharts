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
use OCA\DashboardCharts\Service\Widgets\iFRAME1\iFRAME1Service;
use OCP\AppFramework\QueryException;
use OCP\Dashboard\IDashboardWidget;
use OCP\Dashboard\Model\IWidgetRequest;
use OCP\Dashboard\Model\IWidgetConfig;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\IL10N;


class iFRAME1Widget implements IDashboardWidget {

	const WIDGET_ID = 'iFRAME1';

       private $l10n;


	private $iframe1Service;

	public function __construct( iFRAME1Service $iframe1Service) {
          //      $this->l10n = $l10n;
                $this->iFRAME1Service = $iframe1Service;
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
		return 'iFRAME 1';
	}


	/**
	 * @return string
	 */
	public function getDescription(): string {
		return 'iFRAME'
			   . '..Display a webpage in a widget';
	}


	/**
	 * @return WidgetTemplate
	 */
	public function getWidgetTemplate(): WidgetTemplate {
		$template = new WidgetTemplate();
		$template->addCss('widgets/iframe1')
				 ->addJs('widgets/iFRAME1')
				 ->setIcon('icon-iframe')
				 ->setContent('widgets/iFRAME1')
                 ->setInitFunction('OCA.DashBoard.iframe1.init');
			//	 ->setSettings(['name','title','checkbox',true,'placeholder'],['name2','title2','checkbox2',true,'placeholder2']);      	 
		return $template;
	}


	/**
	 * @return WidgetSetup
	 */
	public function getWidgetSetup(): WidgetSetup {
		$setup = new WidgetSetup();
		$setup->addSize(WidgetSetup::SIZE_TYPE_MIN, 2, 2)
			  ->addSize(WidgetSetup::SIZE_TYPE_MAX, 15, 15)
			  ->addSize(WidgetSetup::SIZE_TYPE_DEFAULT, 4, 4);
			  
		$setup->addMenuEntry('OCA.DashBoard.iframe1.getiFRAME1Data', 'icon-refresh', 'Refresh');
		$setup->addDelayedJob('OCA.DashBoard.iframe1.getiFRAME1Data', 300);
		$setup->setPush('OCA.DashBoard.iframe1.push');

		

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
		if ($request->getRequest() === 'getiFRAME1Data') {
			$request->addResult('iframe1', $this->iFRAME1Service->getiFRAME1Data());
			
	}
    }
}
