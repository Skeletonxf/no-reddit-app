# no-reddit-app

Hides mobile reddit.com mobile app links on Firefox for Android

I use https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/ which seems to cause Reddit to never remember that I clicked x on their mobile app popups even though the domain is whitelisted for persistent cookies. This extension hides the popups via CSS.

I have chosen to not put this on addons.mozilla.org because it is so basic and prone to falling out of date. If you drop the xpi file into your android phone, navigate to it in Firefox and have turned off `xpinstall.signatures.required` as outlined in https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android#Set_up_your_computer_and_Android_emulator_or_device then you can install this addon locally to your device.
