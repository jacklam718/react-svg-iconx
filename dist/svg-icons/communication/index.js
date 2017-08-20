'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunicationVpnKey = exports.CommunicationVoicemail = exports.CommunicationTextsms = exports.CommunicationSwapCalls = exports.CommunicationStopScreenShare = exports.CommunicationStayPrimaryPortrait = exports.CommunicationStayPrimaryLandscape = exports.CommunicationStayCurrentPortrait = exports.CommunicationStayCurrentLandscape = exports.CommunicationSpeakerPhone = exports.CommunicationScreenShare = exports.CommunicationRssFeed = exports.CommunicationRingVolume = exports.CommunicationPresentToAll = exports.CommunicationPortableWifiOff = exports.CommunicationPhonelinkSetup = exports.CommunicationPhonelinkRing = exports.CommunicationPhonelinkLock = exports.CommunicationPhonelinkErase = exports.CommunicationPhone = exports.CommunicationNoSim = exports.CommunicationMessage = exports.CommunicationMailOutline = exports.CommunicationLocationOn = exports.CommunicationLocationOff = exports.CommunicationLiveHelp = exports.CommunicationInvertColorsOff = exports.CommunicationImportExport = exports.CommunicationImportContacts = exports.CommunicationForum = exports.CommunicationEmail = exports.CommunicationDialpad = exports.CommunicationDialerSip = exports.CommunicationContacts = exports.CommunicationContactPhone = exports.CommunicationContactMail = exports.CommunicationComment = exports.CommunicationClearAll = exports.CommunicationChat = exports.CommunicationChatBubble = exports.CommunicationChatBubbleOutline = exports.CommunicationCall = exports.CommunicationCallSplit = exports.CommunicationCallReceived = exports.CommunicationCallMissed = exports.CommunicationCallMissedOutgoing = exports.CommunicationCallMerge = exports.CommunicationCallMade = exports.CommunicationCallEnd = exports.CommunicationBusiness = undefined;

var _business = require('./business');

var _business2 = _interopRequireDefault(_business);

var _callEnd = require('./call-end');

var _callEnd2 = _interopRequireDefault(_callEnd);

var _callMade = require('./call-made');

var _callMade2 = _interopRequireDefault(_callMade);

var _callMerge = require('./call-merge');

var _callMerge2 = _interopRequireDefault(_callMerge);

var _callMissedOutgoing = require('./call-missed-outgoing');

var _callMissedOutgoing2 = _interopRequireDefault(_callMissedOutgoing);

var _callMissed = require('./call-missed');

var _callMissed2 = _interopRequireDefault(_callMissed);

var _callReceived = require('./call-received');

var _callReceived2 = _interopRequireDefault(_callReceived);

var _callSplit = require('./call-split');

var _callSplit2 = _interopRequireDefault(_callSplit);

var _call = require('./call');

var _call2 = _interopRequireDefault(_call);

var _chatBubbleOutline = require('./chat-bubble-outline');

var _chatBubbleOutline2 = _interopRequireDefault(_chatBubbleOutline);

var _chatBubble = require('./chat-bubble');

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _chat = require('./chat');

var _chat2 = _interopRequireDefault(_chat);

var _clearAll = require('./clear-all');

var _clearAll2 = _interopRequireDefault(_clearAll);

var _comment = require('./comment');

var _comment2 = _interopRequireDefault(_comment);

var _contactMail = require('./contact-mail');

var _contactMail2 = _interopRequireDefault(_contactMail);

var _contactPhone = require('./contact-phone');

var _contactPhone2 = _interopRequireDefault(_contactPhone);

var _contacts = require('./contacts');

var _contacts2 = _interopRequireDefault(_contacts);

var _dialerSip = require('./dialer-sip');

var _dialerSip2 = _interopRequireDefault(_dialerSip);

var _dialpad = require('./dialpad');

var _dialpad2 = _interopRequireDefault(_dialpad);

var _email = require('./email');

var _email2 = _interopRequireDefault(_email);

var _forum = require('./forum');

var _forum2 = _interopRequireDefault(_forum);

var _importContacts = require('./import-contacts');

var _importContacts2 = _interopRequireDefault(_importContacts);

var _importExport = require('./import-export');

var _importExport2 = _interopRequireDefault(_importExport);

var _invertColorsOff = require('./invert-colors-off');

var _invertColorsOff2 = _interopRequireDefault(_invertColorsOff);

var _liveHelp = require('./live-help');

var _liveHelp2 = _interopRequireDefault(_liveHelp);

var _locationOff = require('./location-off');

var _locationOff2 = _interopRequireDefault(_locationOff);

var _locationOn = require('./location-on');

var _locationOn2 = _interopRequireDefault(_locationOn);

var _mailOutline = require('./mail-outline');

var _mailOutline2 = _interopRequireDefault(_mailOutline);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _noSim = require('./no-sim');

var _noSim2 = _interopRequireDefault(_noSim);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

var _phonelinkErase = require('./phonelink-erase');

var _phonelinkErase2 = _interopRequireDefault(_phonelinkErase);

var _phonelinkLock = require('./phonelink-lock');

var _phonelinkLock2 = _interopRequireDefault(_phonelinkLock);

var _phonelinkRing = require('./phonelink-ring');

var _phonelinkRing2 = _interopRequireDefault(_phonelinkRing);

var _phonelinkSetup = require('./phonelink-setup');

var _phonelinkSetup2 = _interopRequireDefault(_phonelinkSetup);

var _portableWifiOff = require('./portable-wifi-off');

var _portableWifiOff2 = _interopRequireDefault(_portableWifiOff);

var _presentToAll = require('./present-to-all');

var _presentToAll2 = _interopRequireDefault(_presentToAll);

var _ringVolume = require('./ring-volume');

var _ringVolume2 = _interopRequireDefault(_ringVolume);

var _rssFeed = require('./rss-feed');

var _rssFeed2 = _interopRequireDefault(_rssFeed);

var _screenShare = require('./screen-share');

var _screenShare2 = _interopRequireDefault(_screenShare);

var _speakerPhone = require('./speaker-phone');

var _speakerPhone2 = _interopRequireDefault(_speakerPhone);

var _stayCurrentLandscape = require('./stay-current-landscape');

var _stayCurrentLandscape2 = _interopRequireDefault(_stayCurrentLandscape);

var _stayCurrentPortrait = require('./stay-current-portrait');

var _stayCurrentPortrait2 = _interopRequireDefault(_stayCurrentPortrait);

var _stayPrimaryLandscape = require('./stay-primary-landscape');

var _stayPrimaryLandscape2 = _interopRequireDefault(_stayPrimaryLandscape);

var _stayPrimaryPortrait = require('./stay-primary-portrait');

var _stayPrimaryPortrait2 = _interopRequireDefault(_stayPrimaryPortrait);

var _stopScreenShare = require('./stop-screen-share');

var _stopScreenShare2 = _interopRequireDefault(_stopScreenShare);

var _swapCalls = require('./swap-calls');

var _swapCalls2 = _interopRequireDefault(_swapCalls);

var _textsms = require('./textsms');

var _textsms2 = _interopRequireDefault(_textsms);

var _voicemail = require('./voicemail');

var _voicemail2 = _interopRequireDefault(_voicemail);

var _vpnKey = require('./vpn-key');

var _vpnKey2 = _interopRequireDefault(_vpnKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CommunicationBusiness = _business2.default;
exports.CommunicationCallEnd = _callEnd2.default;
exports.CommunicationCallMade = _callMade2.default;
exports.CommunicationCallMerge = _callMerge2.default;
exports.CommunicationCallMissedOutgoing = _callMissedOutgoing2.default;
exports.CommunicationCallMissed = _callMissed2.default;
exports.CommunicationCallReceived = _callReceived2.default;
exports.CommunicationCallSplit = _callSplit2.default;
exports.CommunicationCall = _call2.default;
exports.CommunicationChatBubbleOutline = _chatBubbleOutline2.default;
exports.CommunicationChatBubble = _chatBubble2.default;
exports.CommunicationChat = _chat2.default;
exports.CommunicationClearAll = _clearAll2.default;
exports.CommunicationComment = _comment2.default;
exports.CommunicationContactMail = _contactMail2.default;
exports.CommunicationContactPhone = _contactPhone2.default;
exports.CommunicationContacts = _contacts2.default;
exports.CommunicationDialerSip = _dialerSip2.default;
exports.CommunicationDialpad = _dialpad2.default;
exports.CommunicationEmail = _email2.default;
exports.CommunicationForum = _forum2.default;
exports.CommunicationImportContacts = _importContacts2.default;
exports.CommunicationImportExport = _importExport2.default;
exports.CommunicationInvertColorsOff = _invertColorsOff2.default;
exports.CommunicationLiveHelp = _liveHelp2.default;
exports.CommunicationLocationOff = _locationOff2.default;
exports.CommunicationLocationOn = _locationOn2.default;
exports.CommunicationMailOutline = _mailOutline2.default;
exports.CommunicationMessage = _message2.default;
exports.CommunicationNoSim = _noSim2.default;
exports.CommunicationPhone = _phone2.default;
exports.CommunicationPhonelinkErase = _phonelinkErase2.default;
exports.CommunicationPhonelinkLock = _phonelinkLock2.default;
exports.CommunicationPhonelinkRing = _phonelinkRing2.default;
exports.CommunicationPhonelinkSetup = _phonelinkSetup2.default;
exports.CommunicationPortableWifiOff = _portableWifiOff2.default;
exports.CommunicationPresentToAll = _presentToAll2.default;
exports.CommunicationRingVolume = _ringVolume2.default;
exports.CommunicationRssFeed = _rssFeed2.default;
exports.CommunicationScreenShare = _screenShare2.default;
exports.CommunicationSpeakerPhone = _speakerPhone2.default;
exports.CommunicationStayCurrentLandscape = _stayCurrentLandscape2.default;
exports.CommunicationStayCurrentPortrait = _stayCurrentPortrait2.default;
exports.CommunicationStayPrimaryLandscape = _stayPrimaryLandscape2.default;
exports.CommunicationStayPrimaryPortrait = _stayPrimaryPortrait2.default;
exports.CommunicationStopScreenShare = _stopScreenShare2.default;
exports.CommunicationSwapCalls = _swapCalls2.default;
exports.CommunicationTextsms = _textsms2.default;
exports.CommunicationVoicemail = _voicemail2.default;
exports.CommunicationVpnKey = _vpnKey2.default;