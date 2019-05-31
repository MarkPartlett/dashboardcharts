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

/** @var array $_ */
/** @var \OCP\IL10N $l */

script('dashboard', 'personal');
style('dashboard', 'personal');

?>

<div id="dashboard-section" class="section" data-cachebuster="<?php print_unescaped($_['cachebuster']); ?>">
	<h2 class="inlineblock"><?php p($l->t('Dashboard Charts App')); ?></h2>
	<p>
		<?php p($l->t('Dashboard Widget Settings')); ?>
		<button id="dashboard-save" class="btn btn-primary" ><?php p($l->t('Save')); ?></button>
		
	</p>
	    <?php foreach ($_['widgets'] as $activity => $data): ?>
			<tr>
				<td class="small">
				
					<input type="text" style="width:50%" id="dashboard-text<?php p(($data)['widget']) ?>_<?php p($activity)[0]['widget'] ?>" name="<?php p($activity) ?>_<?php p($activity) ?>"
						disabled="disabled" value="<?php p(($data)['widget']) ?>" <?php p(($data)['widget']) ?> text" 
						 />
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
