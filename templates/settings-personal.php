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
style('dashboardcharts', 'widgets/highcharts-editor.min');
script('dashboardcharts', 'widgets/highcharts-editor');
script('dashboardcharts', 'widgets/highcharts-editor.complete');
script('dashboardcharts', 'widgets/data-csv');
script('dashboardcharts', 'widgets/data-difi');
script('dashboardcharts', 'widgets/data-gspreadsheets');
script('dashboardcharts', 'widgets/data-socrata');
script('dashboardcharts', 'widgets/export-beautified');
script('dashboardcharts', 'widgets/jquery-2.2.4.min');
script('dashboardcharts', 'widgets/codemirror.min');
style('dashboardcharts', 'widgets/codemirror.min');
script('dashboardcharts', 'personal');

function prettyPrint( $json )
{
    $result = '';
    $level = 0;
    $in_quotes = false;
    $in_escape = false;
    $ends_line_level = NULL;
    $json_length = strlen( $json );

    for( $i = 0; $i < $json_length; $i++ ) {
        $char = $json[$i];
        $new_line_level = NULL;
        $post = "";
        if( $ends_line_level !== NULL ) {
            $new_line_level = $ends_line_level;
            $ends_line_level = NULL;
        }
        if ( $in_escape ) {
            $in_escape = false;
        } else if( $char === '"' ) {
            $in_quotes = !$in_quotes;
        } else if( ! $in_quotes ) {
            switch( $char ) {
                case '}': case ']':
                    $level--;
                    $ends_line_level = NULL;
                    $new_line_level = $level;
                    break;

                case '{': case '[':
                    $level++;
                case ',':
                    $ends_line_level = $level;
                    break;

                case ':':
                    $post = " ";
                    break;

                case " ": case "\t": case "\n": case "\r":
                    $char = "";
                    $ends_line_level = $new_line_level;
                    $new_line_level = NULL;
                    break;
            }
        } else if ( $char === '\\' ) {
            $in_escape = true;
        }
        if( $new_line_level !== NULL ) {
            $result .= "\n".str_repeat( "\t", $new_line_level );
        }
        $result .= $char.$post;
    }

    return $result;
}

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
	<body>

<div id="dashboard-section" class="section" data-cachebuster="<?php print_unescaped($_['cachebuster']); ?>">
	<h2 class="inlineblock"><?php p($l->t('Dashboard Charts Widgets')); ?></h2>
	<p>
		<?php p($l->t('Widget Settings')); ?>
		<button id="dashboard-save" class="btn btn-primary" ><?php p($l->t('Save')); ?></button>
		
		<h1 class="inlineblock"><?php p($l->t('Chart Component :')); ?></h1>
		
		<button id="dashboard-down" class="btn btn-primary" ><?php p($l->t(' - ')); ?></button>
		<button id="dashboard-up" class="btn btn-primary" ><?php p($l->t(' + ')); ?></button>
		
	</p>
	    <?php foreach ($_['widgets'] as $activity => $data): ?>
			<div id="settings-<?php p(($data)['widget']) ?>" class="targetDiv" hidden>
			<tr>
				
				<td class="small">
				
					<h1 class="inlineblock"><?php p(($data)['widget']) ?> MetaData:<h1>
					
						 
												 						 						 
					<label for="<?php p($activity) ?>_<?php p($activity) ?>">
					<textarea style="height:400px;width:100%" id="<?php p(($data)['widget']) ?>" value="<?php p(($data)['data']); ?>"><?php p(prettyPrint(($data)['data'])); ?> </textarea>
					<h1 class="inlineblock"><?php p(($data)['widget']) ?> Data Source URL:<h1>
					<textarea style="height:10px;width:100%" id="<?php p(($data)['widget']) ?>url" value="" >  </textarea>
					<h1 class="inlineblock"><?php p(($data)['widget']) ?> Data Templating Schema:<h1>
					<textarea style="height:400px;width:100%" id="<?php p(($data)['widget']) ?>template" value="" > </textarea>
					</label>
					
				</td>
				<button id="Edit-<?php p(($data)['widget']) ?>-button" hidden class="highed-imp-button" ><?php p($l->t('Create A Chart')); ?></button>
			</tr>
			</div>
		<?php endforeach; ?>
		</tbody>
	</table>
	
<button id="dashboard-load" class="btn btn-primary" ><?php p($l->t('Load Demo Dashboard')); ?></button>



</div>


</body>
