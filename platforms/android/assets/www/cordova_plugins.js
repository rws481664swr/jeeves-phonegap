cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.manueldeveloper.speech-recognizer/www/speechrecognizer.js",
        "id": "com.manueldeveloper.speech-recognizer.speechrecognizer",
        "clobbers": [
            "navigator.speechrecognizer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin.tts/www/tts.js",
        "id": "org.apache.cordova.plugin.tts.tts",
        "clobbers": [
            "navigator.tts"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.manueldeveloper.speech-recognizer": "0.0.1",
    "org.apache.cordova.plugin.tts": "0.2.0"
}
// BOTTOM OF METADATA
});