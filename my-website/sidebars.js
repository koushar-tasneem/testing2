module.exports = {
    docs: {
        Puppeteer: [
            "puppeteer.puppeteer",{
            Methods: [
            "puppeteer.puppeteer.clearcustomqueryhandlers",
            'puppeteer.puppeteer.connect',
            'puppeteer.puppeteer.customqueryhandlernames',
            'puppeteer.puppeteer.devices',
            'puppeteer.puppeteer.errors',
            'puppeteer.puppeteer.networkconditions',
            'puppeteer.puppeteer.registercustomqueryhandler',
            'puppeteer.puppeteer.unregistercustomqueryhandler',
            ]
            }
        ],
        "BrowserFetcher": [
            'puppeteer.browserfetcher',
            'puppeteer.browserfetcher.candownload',
            'puppeteer.browserfetcher.download',
            'puppeteer.browserfetcher.host',
            'puppeteer.browserfetcher.localrevisions',
            'puppeteer.browserfetcher.platform',
            'puppeteer.browserfetcher.product',
            'puppeteer.browserfetcher.remove',
            'puppeteer.browserfetcher.revisioninfo',
        ],
        "Browser": [
            'puppeteer.browser',
        'puppeteer.browser.browsercontexts',
        'puppeteer.browser.close',
        'puppeteer.browser.createincognitobrowsercontext',
        'puppeteer.browser.defaultbrowsercontext',
        'puppeteer.browser.disconnect',
        'puppeteer.browser.isconnected',
        'puppeteer.browser.newpage',
        'puppeteer.browser.pages',
        'puppeteer.browser.process',
        'puppeteer.browser.target',
        'puppeteer.browser.targets',
        'puppeteer.browser.useragent',
        'puppeteer.browser.waitfortarget',
        'puppeteer.browser.wsendpoint',
        ],
        "BrowserContext": [
            'puppeteer.browsercontext',
        'puppeteer.browsercontext.browser',
        'puppeteer.browsercontext.overridepermissions',
        'puppeteer.browsercontext.close',
        'puppeteer.browsercontext.isincognito',
        'puppeteer.browsercontext.newpage',
        'puppeteer.browsercontext.overridepermissions',
        'puppeteer.browsercontext.pages',
        'puppeteer.browsercontext.targets',
        'puppeteer.browsercontext.waitfortarget',
        ],
        "WebWorker": [
            'puppeteer.webworker',
        'puppeteer.webworker.evaluate',
        'puppeteer.webworker.evaluatehandle',
        'puppeteer.webworker.executioncontext',
        'puppeteer.webworker.url',
        ],
        "Accessibility": [
            'puppeteer.accessibility',
        'puppeteer.accessibility.snapshot',
        ],
        "FileChooser": [
            'puppeteer.filechooser',
        'puppeteer.filechooser.accept',
        'puppeteer.filechooser.cancel',
        'puppeteer.filechooser.ismultiple',
        ],
        "ExecutionContext": [
            'puppeteer.executioncontext',
        'puppeteer.executioncontext.evaluate',
        'puppeteer.executioncontext.evaluatehandle',
        'puppeteer.executioncontext.frame',
        'puppeteer.executioncontext.queryobjects',
        ],
        "JSHandle": [
            'puppeteer.jshandle',
        'puppeteer.jshandle.aselement',
        'puppeteer.jshandle.dispose',
        'puppeteer.jshandle.evaluate',
        'puppeteer.jshandle.evaluatehandle',
        'puppeteer.jshandle.executioncontext',
        'puppeteer.jshandle.getproperties',
        'puppeteer.jshandle.getproperty',
        'puppeteer.jshandle.jsonvalue',
        ],
        "ElementHandle": [
            'puppeteer.elementhandle',
        'puppeteer.elementhandle._',
        'puppeteer.elementhandle.__',
        'puppeteer.elementhandle.__eval',
        'puppeteer.elementhandle._eval',
        'puppeteer.elementhandle._x',
        'puppeteer.elementhandle.aselement',
        'puppeteer.elementhandle.boundingbox',
        'puppeteer.elementhandle.boxmodel',
        'puppeteer.elementhandle.click',
        'puppeteer.elementhandle.contentframe',
        'puppeteer.elementhandle.focus',
        'puppeteer.elementhandle.hover',
        'puppeteer.elementhandle.clickablepoint',
        'puppeteer.elementhandle.drag',
        'puppeteer.elementhandle.draganddrop',
        'puppeteer.elementhandle.dragenter',
        'puppeteer.elementhandle.dragover',
        'puppeteer.elementhandle.drop',
        'puppeteer.elementhandle.isintersectingviewport',
        'puppeteer.elementhandle.press',
        'puppeteer.elementhandle.screenshot',
        'puppeteer.elementhandle.select',
        'puppeteer.elementhandle.tap',
        'puppeteer.elementhandle.type',
        'puppeteer.elementhandle.uploadfile',
        ],
        "HTTPRequest": [
            'puppeteer.httprequest',
        'puppeteer.httprequest.abort',
        'puppeteer.httprequest.continue',
        'puppeteer.httprequest.failure',
        'puppeteer.httprequest.frame',
        'puppeteer.httprequest.headers',
        'puppeteer.httprequest.isnavigationrequest',
        'puppeteer.httprequest.method',
        'puppeteer.httprequest.postdata',
        'puppeteer.httprequest.redirectchain',
        'puppeteer.httprequest.resourcetype',
        'puppeteer.httprequest.respond',
        'puppeteer.httprequest.response',
        'puppeteer.httprequest.url',
        ],
        "HTTPRespose": [
            'puppeteer.httpresponse',
        'puppeteer.httpresponse.buffer',
        'puppeteer.httpresponse.frame',
        'puppeteer.httpresponse.fromcache',
        'puppeteer.httpresponse.fromserviceworker',
        'puppeteer.httpresponse.headers',
        'puppeteer.httpresponse.json',
        'puppeteer.httpresponse.ok',
        'puppeteer.httpresponse.remoteaddress',
        'puppeteer.httpresponse.request',
        'puppeteer.httpresponse.securitydetails',
        'puppeteer.httpresponse.status',
        'puppeteer.httpresponse.statustext',
        'puppeteer.httpresponse.text',
        'puppeteer.httpresponse.url',
        ],
        "SecurityDetails": [
            'puppeteer.securitydetails',
        'puppeteer.securitydetails.issuer',
        'puppeteer.securitydetails.protocol',
        'puppeteer.securitydetails.subjectalternativenames',
        'puppeteer.securitydetails.subjectname',
        'puppeteer.securitydetails.validfrom',
        'puppeteer.securitydetails.validto',
        ],
        "Target": [
            'puppeteer.target',
        'puppeteer.target.browser',
        'puppeteer.target.browsercontext',
        'puppeteer.target.createcdpsession',
        'puppeteer.target.opener',
        'puppeteer.target.page',
        'puppeteer.target.type',
        'puppeteer.target.url',
        'puppeteer.target.worker',
        ],
        "CDPSession": [
            'puppeteer.cdpsession',
        'puppeteer.cdpsession.connection',
        'puppeteer.cdpsession.detach',
        'puppeteer.cdpsession.send',
        ],
        "Coverage": [
            'puppeteer.coverage',
        'puppeteer.coverage.startcsscoverage',
        'puppeteer.coverage.startjscoverage',
        'puppeteer.coverage.stopcsscoverage',
        'puppeteer.coverage.stopjscoverage',
        ],
        "TimeOutError": [
            'puppeteer.timeouterror'
        ],
        "EventEmitter": [
            'puppeteer.eventemitter',
        'puppeteer.eventemitter.addlistener',
        'puppeteer.eventemitter.emit',
        'puppeteer.eventemitter.addlistener',
        'puppeteer.eventemitter.listenercount',
        'puppeteer.eventemitter.off',
        'puppeteer.eventemitter.on',
        'puppeteer.eventemitter.once',
        'puppeteer.eventemitter.removelistener',
        'puppeteer.eventemitter.removealllisteners',
        ],
        "Contribute": [
            'CONTRIBUTING',
        ]
    },
};