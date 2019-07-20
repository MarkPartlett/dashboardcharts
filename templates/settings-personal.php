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

/** @var array $_ */
/** @var \OCP\IL10N $l */
style('dashboardcharts', 'personal');
script('dashboardcharts', 'widgets/highstock');
script('dashboardcharts', 'widgets/modules/exporting');
script('dashboardcharts', 'widgets/export-data');
script('dashboardcharts', 'widgets/highcharts-more');
script('dashboardcharts', 'widgets/highcharts-3d');
script('dashboardcharts', 'widgets/data');
script('dashboardcharts', 'widgets/funnel');
script('dashboardcharts', 'widgets/solid-gauge');
script('dashboardcharts', 'widgets/accessibility');
script('dashboardcharts', 'widgets/annotations');
//script('dashboardcharts', 'widgets/highcharts-editor.thumbnails.min');
style('dashboardcharts', 'widgets/highcharts-editor.min');
script('dashboardcharts', 'widgets/highcharts-editor');
script('dashboardcharts', 'widgets/highcharts-editor.complete');
script('dashboardcharts', 'widgets/data-csv');
script('dashboardcharts', 'widgets/data-difi');
script('dashboardcharts', 'widgets/data-gspreadsheets');
script('dashboardcharts', 'widgets/data-socrata');
script('dashboardcharts', 'widgets/export-beautified');
script('dashboardcharts', 'personal');

//script('dashboardcharts', 'widgets/highcharts-custom');
//script('dashboardcharts', 'widgets/highcharts');
//script('dashboardcharts', 'widgets/highcharts-editor.complete');
//script('dashboardcharts', 'widgets/map');
//script('dashboardcharts', 'widgets/codemirror.min');
//script('dashboardcharts', 'widgets/javascript.min');
//script('dashboardcharts', 'widgets/highcharts-more');
//script('dashboardcharts', 'widgets/highcharts-3d');
//script('dashboardcharts', 'widgets/exporting');
//script('dashboardcharts', 'widgets/funnel');
//script('dashboardcharts', 'widgets/solid-gauge');
//script('dashboardcharts', 'widgets/data');
//script('dashboardcharts', 'widgets/highcharts-editor.thumbnails.min');
//script('dashboardcharts', 'widgets/highcharts-editor.complete');
//script('dashboardcharts', 'widgets/highcharts-editor.min');
//script('dashboardcharts', 'widgets/highcharts-editor');
//script('dashboardcharts', 'widgets/highcharts-editor.advanced.min');
//script('dashboardcharts', 'widgets/highcharts-editor.thumbnails.min');
//script('dashboardcharts', 'widgets/highcharts-editor.complete')
//script('dashboardcharts', 'widgets/jquery-2.2.4.min');
//script('dashboardcharts', 'widgets/data-csv');
//script('dashboardcharts', 'widgets/data-difi');
//script('dashboardcharts', 'widgets/data-gspreadsheets');
//script('dashboardcharts', 'widgets/data-socrata');
//script('dashboardcharts', 'widgets/export-beautified');
//script('dashboardcharts', 'widgets/accessibility');
//script('dashboardcharts', 'widgets/standalone-framework');
//script('dashboardcharts', 'widgets/highstock');
//style('dashboardcharts', 'widgets/codemirror.min');
//style('dashboardcharts', 'widgets/neo.min');


?>
 
 
 
		<style>
          html, body {
            margin: 0;
            padding: 0;
            width:100%;
            height:100%;
            background:#F5F5F5;
            font-family: 'Roboto', sans-serif;
        }

        .highed-index-box {
            height:100%;
            position: relative;
            left:50%;
            width:80%;
            max-width: 600px;
            padding:20px;
            transform:translate(-50%, 0);
            background: #FFF;

            box-sizing:border-box !important;
            -moz-box-sizing:border-box !important;
            -webkit-box-sizing:border-box !important;
        }

        .highed-index-group {
            text-decoration: none;
            padding:20px;
            border-radius:10px;
            background:#01579b;
            color:#fff;
            font-size: 24px;
            width:100%;
            min-height:30px;
            margin-bottom: 10px;

            text-align: center;
            display: block;


            box-sizing:border-box !important;
            -moz-box-sizing:border-box !important;
            -webkit-box-sizing:border-box !important;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor:pointer !important;
            transition:0.2s ease all; 
            -moz-transition:0.2s ease all; 
            -webkit-transition:0.2s ease all;
        }

        .highed-index-group:hover {
            background:#0288d1;
        }

        .highed-index-headline {
            padding-left:10px;
            font-weight: 100;
            text-align: center;
        }

        .highed-index-footer {
            margin-top:50px;
            border-top:1px solid #ddd;
            padding-top:10px;
            text-align: center;
            font-size: 10px;
            font-style: italic;
        }
    </style>

<div id="dashboard-section" class="section" data-cachebuster="<?php print_unescaped($_['cachebuster']); ?>">
	<h2 class="inlineblock"><?php p($l->t('Dashboard Charts App')); ?></h2>
	<p>
		<?php p($l->t('Dashboard Widget Settings')); ?>
		<button id="dashboard-save" class="btn btn-primary" ><?php p($l->t('Save All')); ?></button>
		<button id="dashboard-load" class="btn btn-primary" ><?php p($l->t('Load from File')); ?></button>
		<button id="dashboard-load" class="btn btn-primary" ><?php p($l->t('Save to File')); ?></button>
		
		
		
	</p>
	    <?php foreach ($_['widgets'] as $activity => $data): ?>
			<tr>
				<td class="small">
				
					<input type="text" style="width:50%" id="dashboard-text<?php p(($data)['widget']) ?>_<?php p($activity)[0]['widget'] ?>" name="<?php p($activity) ?>_<?php p($activity) ?>"
						disabled="disabled" value="<?php p(($data)['widget']) ?>" <?php p(($data)['widget']) ?> text" 
						 />
						 <button id="Edit-<?php p(($data)['widget']) ?>-button" class="highed-imp-button" ><?php p($l->t('Edit Chart')); ?></button>
						 <button id="Save-<?php p(($data)['widget']) ?>" class="btn btn-primary" ><?php p($l->t('Save Chart')); ?></button>
						 						 
					<label for="<?php p($activity) ?>_<?php p($activity) ?>">
					<textarea style="height:100px;width:100%" id="<?php p(($data)['widget']) ?>"><?php print_unescaped(($data)['data']); ?> </textarea>
					</label>
				</td>
			</tr>
		<?php endforeach; ?>
		</tbody>
	</table>
	
<button id="dashboard-load" class="btn btn-primary" ><?php p($l->t('Load Demo Data')); ?></button>

</div>


</body>
