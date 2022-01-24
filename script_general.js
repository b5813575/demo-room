(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"start":"this.init()","backgroundColorRatios":[0],"scripts":{"getComponentByName":TDV.Tour.Script.getComponentByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlays":TDV.Tour.Script.getOverlays,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"init":TDV.Tour.Script.init,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"shareSocial":TDV.Tour.Script.shareSocial,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizStart":TDV.Tour.Script.quizStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setLocale":TDV.Tour.Script.setLocale,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"existsKey":TDV.Tour.Script.existsKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showWindow":TDV.Tour.Script.showWindow,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay},"mediaActivationMode":"window","class":"Player","borderSize":0,"contentOpaque":false,"width":"100%","backgroundPreloadEnabled":true,"gap":10,"id":"rootPlayer","desktopMipmappingEnabled":false,"paddingTop":0,"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"definitions": [{"hoverFactor":0,"initialSequence":"this.sequence_7C77E597_76DF_7542_418D_6016092C9760","class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_camera","class":"PanoramaPlayListItem","media":"this.panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","class":"ViewerArea","playbackBarHeadShadow":true,"toolTipShadowOpacity":1,"firstTransitionDuration":0,"playbackBarHeight":10,"playbackBarHeadOpacity":1,"width":"100%","vrPointerSelectionColor":"#FF6600","progressBorderRadius":0,"data":{"name":"Main Viewer"},"subtitlesFontWeight":"normal","id":"MainViewer","playbackBarHeadBorderRadius":0,"subtitlesTextDecoration":"none","toolTipBorderColor":"#767676","progressLeft":0,"paddingLeft":0,"progressBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"toolTipFontWeight":"normal","subtitlesTextShadowBlurRadius":0,"paddingRight":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarOpacity":1,"toolTipShadowBlurRadius":3,"subtitlesFontSize":"3vmin","translationTransitionDuration":1000,"subtitlesBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipShadowSpread":0,"vrPointerSelectionTime":2000,"height":"100%","subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF","transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":3,"toolTipShadowColor":"#333333","subtitlesPaddingTop":5,"toolTipTextShadowOpacity":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderSize":0,"subtitlesTextShadowVerticalLength":1,"subtitlesPaddingLeft":5,"toolTipHorizontalAlign":"center","subtitlesOpacity":1,"subtitlesShadow":false,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"toolTipFontColor":"#606060","vrPointerColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"minHeight":50,"minWidth":100,"playbackBarRight":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesGap":0,"playbackBarBottom":5,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","borderSize":0,"transitionMode":"blending","progressBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"progressOpacity":1,"subtitlesHorizontalAlign":"center","progressRight":0,"paddingTop":0,"toolTipFontStyle":"normal","toolTipShadowHorizontalLength":0,"progressBarBorderColor":"#000000","subtitlesPaddingBottom":5,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"progressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"paddingBottom":0,"playbackBarBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"playbackBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","borderRadius":0,"toolTipOpacity":1,"progressBarBackgroundColorRatios":[0],"progressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"doubleClickAction":"toggle_fullscreen","surfaceReticleColor":"#FFFFFF","toolTipDisplayTime":600,"playbackBarBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"subtitlesVerticalAlign":"bottom","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderSize":0,"subtitlesEnabled":true,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionOpacity":1,"subtitlesTop":0,"progressBottom":0,"propagateClick":false,"progressBarOpacity":1,"subtitlesTextShadowHorizontalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"progressHeight":10,"progressBorderSize":0,"displayTooltipInSurfaceSelection":true,"progressBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderSize":1,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowOpacity":0.7,"shadow":false,"toolTipPaddingTop":4,"playbackBarHeadShadowHorizontalLength":0,"progressBarBorderSize":0},{"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","zoomEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"label":trans('panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F.label'),"thumbnailUrl":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_t.jpg","vfov":180,"hfov":360,"partial":false,"class":"Panorama","hfovMin":"135%","data":{"label":"100460"},"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_t.jpg","cube":{"levels":[{"tags":"ondemand","width":12288,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"rowCount":4,"colCount":24},{"tags":"ondemand","width":6144,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"rowCount":2,"colCount":12},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"rowCount":1,"colCount":6},{"tags":"mobilevr2gen","width":12288,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"rowCount":1,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"id":"panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_7C77E597_76DF_7542_418D_6016092C9760"}],"overflow":"hidden","scrollBarColor":"#000000","children":["this.MainViewer"],"paddingLeft":0,"paddingRight":0,"paddingBottom":0,"verticalAlign":"top","downloadEnabled":false,"borderRadius":0,"height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","vrPolyfillScale":0.75,"scrollBarVisible":"rollOver","propagateClick":false,"toolTipHorizontalAlign":"center","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarMargin":2,"defaultVRPointer":"laser","backgroundOpacity":1,"horizontalAlign":"left","minHeight":20,"data":{"name":"Player519","locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"minWidth":20,"shadow":false,"backgroundColorDirection":"vertical"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.26.js.map
//Generated with v2021.2.26, Mon Jan 24 2022