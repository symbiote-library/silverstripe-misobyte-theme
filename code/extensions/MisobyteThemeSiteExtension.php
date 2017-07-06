<?php

/**
 * @author marcus
 */
class MisobyteThemeSiteExtension extends DataExtension
{
    private static $db = array(
        'HideHeader'     => 'Boolean',
        'AnchorToolbar'     => 'Boolean'
    );

    public function updateSiteCMSFields($fields){
        if ($this->owner->Theme == 'misobyte-starter') {
            $fields->addFieldToTab('Root.ThemeOptions', CheckboxField::create('HideHeader', 'Hide full site header'));
            $fields->addFieldToTab('Root.LivingPage', CheckboxField::create('AnchorToolbar', 'Anchor toolbar'));
        }
    }
}