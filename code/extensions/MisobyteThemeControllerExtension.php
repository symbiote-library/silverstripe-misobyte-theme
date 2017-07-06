<?php

/**
 * @author <marcus@silverstripe.com.au>
 * @license BSD License http://www.silverstripe.org/bsd-license
 */
class MisobyteThemeControllerExtension extends Extension {

	private static $include_requirements = true;

	private static $supported_themes = array(
		'misobyte-starter'
	);

	public function onBeforeInit() {
        if (
            $this->owner->getRequest()->isAjax() || 
            $this->owner instanceof LeftAndMain ||
            $this->owner instanceof DevelopmentAdmin ||
			$this->owner instanceof DevBuildController ||
			$this->owner instanceof DatabaseAdmin) {
            return;
        }
		$config = Config::inst();

        $theme = $config->get('SSViewer', 'theme');
        if (class_exists('Site')) {
            $theme = Multisites::inst()->getCurrentSite()->Theme;
        }

		$supported = $config->get('MisobyteThemeControllerExtension', 'supported_themes');
		if (Config::inst()->get('MisobyteThemeControllerExtension', 'include_requirements') && in_array($theme, $supported)) {
			// we'll use the frontend dashboard jquery
            Requirements::css('themes/' . $theme . '/public/css/app.css');

            Requirements::javascript("themes/{$theme}/public/js/app.js");

			Requirements::block(THIRDPARTY_DIR .'/jquery/jquery.js');

            Requirements::block('frontend-dashboards/javascript/jquery-1.10.2.min.js');
            Requirements::block(THIRDPARTY_DIR . '/jquery-ui/jquery-ui.js');

			// block frontend dashboards' js, we have our own
//			Requirements::block('frontend-dashboards/javascript/dashboards.js');
			
			Requirements::javascript(THIRDPARTY_DIR . '/jquery-entwine/dist/jquery.entwine-dist.js');
//			
//			Requirements::javascript("themes/{$theme}/js/jquery.slides.min.js");
//			Requirements::javascript("themes/{$theme}/js/general.js");
			Requirements::javascript('ba-sis-community/javascript/info-lists.js');
            Requirements::javascript('ba-sis-community/javascript/info-lists-bootstrap.js');

            
//
//			if ($this->owner instanceof DashboardController) {
//				Requirements::javascript("themes/{$theme}/js/dashboards.js");
//			}
		}
	}
	
	/**
	 * Allows concrete controllers to provide implementations
	 */
	public function PreLayout() {
		
	}
	
	public function PostLayout() {
		
	}
}
