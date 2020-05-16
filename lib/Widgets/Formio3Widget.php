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
use OCA\DashboardCharts\Service\Widgets\Formio3\Formio3Service;
use OCP\AppFramework\QueryException;
use OCP\Dashboard\IDashboardWidget;
use OCP\Dashboard\Model\IWidgetRequest;
use OCP\Dashboard\Model\IWidgetConfig;
use OCP\AppFramework\Http\ContentSecurityPolicy;
use OCP\IL10N;


class Formio3Widget implements IDashboardWidget {

	const WIDGET_ID = 'Formio3';

       private $l10n;


	private $formio3Service;

	public function __construct( Formio3Service $formio3Service) {
          //      $this->l10n = $l10n;
                $this->Formio3Service = $formio3Service;
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
		return 'Form.io 3';
	}


	/**
	 * @return string
	 */
	public function getDescription(): string {
		return 'Formio'
			   . '..Display a Webform in a widget';
	}


	/**
	 * @return WidgetTemplate
	 */
	public function getWidgetTemplate(): WidgetTemplate {
		$template = new WidgetTemplate();
		$template->addCss('widgets/formio3')
		         ->addCss('widgets/font-awesome.min')
		         ->addCss('widgets/bootstrap.min')
		         ->addCss('widgets/formio.full.min')
				 ->addJs('widgets/Formio3')
				 ->addJs('widgets/formio.full.min')
				 ->setIcon('icon-formio')
				 ->setContent('widgets/Formio3')
                 ->setInitFunction('OCA.DashBoard.formio3.init');
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
			  
		$setup->addMenuEntry('OCA.DashBoard.formio3.getFormio3Data', 'icon-refresh', 'Refresh');
		$setup->addDelayedJob('OCA.DashBoard.formio3.getFormio3Data', 3000);
		$setup->setPush('OCA.DashBoard.formio3.push');

		

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
		if ($request->getRequest() === 'getFormio3Data') {
			$request->addResult('formio3', $this->Formio3Service->getFormio3Data());
			
	}
    }
}
