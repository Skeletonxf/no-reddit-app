# no-reddit-app

## Compatibility

This addon continues to work on Firefox for Android, but unless I'm missing some steps (or you're reading this in the future and Mozilla have done something about these regressions in Firefox for Android), Firefox 68 is the last version where you can permanently install local addons. This addon can still be temporarily installed on later versions of Firefox with [`web-ext`](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/) via `web-ext run -t firefox-android --adb-device XXX --firefox-apk org.mozilla.fenix` (for Firefox nightly) or `web-ext run -t firefox-android --adb-device XXX --firefox-apk org.mozilla.fennec_fdroid` (for the stable F-Droid Firefox distribution).

However, for most users it may be more practical to copy the contents of `no-reddit-app.js` into a userscripts addon (i.e [violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) - [discussion](https://github.com/violentmonkey/violentmonkey/issues/1042)), which can be installed on the priorly mentioned Firefoxes [following the methods here](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/).

## Info

Hides mobile reddit.com mobile app links on Firefox for Android

I use https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/ which seems to cause Reddit to never remember that I clicked x on their mobile app popups even though the domain is whitelisted for persistent cookies. This extension hides the popups via CSS.

I have chosen to not put this on addons.mozilla.org because it is so basic and prone to falling out of date. If you drop the xpi file into your android phone, navigate to it in Firefox and have turned off `xpinstall.signatures.required` as outlined in https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android#Set_up_your_computer_and_Android_emulator_or_device then you can install this addon locally to your device.
