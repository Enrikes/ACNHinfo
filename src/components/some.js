import { isSaturday as ifIsSaturday, customButtonConfig } from "./index";
import { WhisbiServices } from "@frontendops/whisbi-basic-landing";

const rules = {
  isSowOrigin: function isSowOrigin(whisbiInit) {
    if (whisbiInit.origin !== 'sow') return false;

    return function applyConfig() {
      customButtonConfig.texts.BUTTON.bubble.O2O.message_help = 'Need help picking wireless products and services for your business? Live agents are here to help!';
      customButtonConfig.texts.BUTTON.bubble.O2O.message_after_3_visits = 'Need help picking wireless products and services for your business? Live agents are here to help!';
      if (WhisbiServices.isMobile()) {
        whisbiInit.config.api.legalReference = false;
        whisbiInit.config.general.textsURL = '/* @echo environment */EN/FF-EN-2.json';
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuanceForMobile */';
      } else {
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuance */';
      }
    };
  },
  isLandingPageOrigin: function isLandingPageOrigin(whisbiInit) {
    if (whisbiInit.origin !== 'landingPage') return false;

    return function applyConfig() {
      if (WhisbiServices.isMobile()) {
        whisbiInit.config.api.legalReference = false;
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuanceForMobile */';
        whisbiInit.config.general.textsURL = '/* @echo environment */EN/FF-EN-2.json';
      } else {
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuance */';
      }
    };
  },
  isMmVSEOrigin: function isMmVSEOrigin(whisbiInit) {
    if (whisbiInit.origin !== 'mmVSE') return;

    return function applyConfig() {
      whisbiInit.config.oneToOne.visibilityType = 1
      if (WhisbiServices.isMobile()) {
        whisbiInit.config.api.legalReference = false;
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuanceForMobile */';
        whisbiInit.config.general.textsURL = '/* @echo environment */EN/FF-EN-2.json';
      } else {
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuance */';
      }
    };
  },
  isHybridUx: function isHybridUx(whisbiInit) {
    if (whisbiInit.origin !== 'hybridUx') return;

    return function applyConfig() {
      if (WhisbiServices.isMobile()) {
        whisbiInit.config.api.legalReference = false;
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuanceForMobile */';
      } else {
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdHybridUx */';
      }
    };
  },
  }
  isShadowWidgetOrigin: function isShadowWidgetOrigin(whisbiInit) {
    if (whisbiInit.origin !== 'shadowWidget') return;

    return function applyConfig() {
      customButtonConfig.shouldBeLoaded = false;
    };
  },
  isSaturday: function isSaturday(whisbiInit) {
    if (!ifIsSaturday()) return false;

    return function applyConfig() {
      if (WhisbiServices.isMobile()) {
        whisbiInit.config.api.legalReference = false;
        whisbiInit.config.general.textsURL = '/* @echo environment */EN/FF-EN-2.json';
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuanceForMobile */';
      } else {
        whisbiInit.config.api.chatbotId = '/* @echo chatbotIdWithoutNuance */';
      }
    };
  },
  isMobileDefault: function isMobileDefault(whisbiInit) {
    if (!WhisbiServices.isMobile()) return false;

    return function applyConfig() {
      whisbiInit.config.api.legalReference = false;
      whisbiInit.config.api.chatbotId = '/* @echo chatbotIdForMobile */';
      whisbiInit.config.general.textsURL = '/* @echo environment */EN/FF-EN-2.json';
    };
  }
}

const shouldUseCustomConfig = whisbiInit => Object.keys(rules).some(rule => rules[rule](whisbiInit));
const getRule = whisbiInit => Object.keys(rules).find(rule => rules[rule](whisbiInit));

function applyCustomConfig(whisbiInit) {
  try {
    const ruleToApply = getRule(whisbiInit);
    if (ruleToApply) {
      rules[ruleToApply](whisbiInit)();
    }
  } catch (error) {
    console.log('Custom config could not be applied: ', error);
  }
}

export { shouldUseCustomConfig, applyCustomConfig };
