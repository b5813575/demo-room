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
    var b = {"start":"this.init()","desktopMipmappingEnabled":false,"backgroundPreloadEnabled":true,"width":"100%","contentOpaque":false,"paddingTop":0,"scrollBarMargin":2,"gap":10,"id":"rootPlayer","horizontalAlign":"left","mediaActivationMode":"window","paddingBottom":0,"paddingLeft":0,"toolTipHorizontalAlign":"center","class":"Player","paddingRight":0,"mouseWheelEnabled":true,"overflow":"hidden","verticalAlign":"top","scrollBarWidth":10,"downloadEnabled":false,"scrollBarColor":"#000000","height":"100%","backgroundColor":["#FFFFFF"],"scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"translate":TDV.Tour.Script.translate,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizShowScore":TDV.Tour.Script.quizShowScore,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"showWindow":TDV.Tour.Script.showWindow,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"openLink":TDV.Tour.Script.openLink,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clone":TDV.Tour.Script.clone,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"init":TDV.Tour.Script.init,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"mixObject":TDV.Tour.Script.mixObject,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"isPanorama":TDV.Tour.Script.isPanorama,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"registerKey":TDV.Tour.Script.registerKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"existsKey":TDV.Tour.Script.existsKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setValue":TDV.Tour.Script.setValue,"textToSpeech":TDV.Tour.Script.textToSpeech,"setLocale":TDV.Tour.Script.setLocale,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizFinish":TDV.Tour.Script.quizFinish,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"initQuiz":TDV.Tour.Script.initQuiz,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech},"borderRadius":0,"propagateClick":false,"children":["this.MainViewer"],"layout":"absolute","definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"initialSequence":"this.sequence_7C77E597_76DF_7542_418D_6016092C9760","class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_camera","media":"this.panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"vfov":180,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/0/{row}_{column}.jpg","colCount":24,"height":2048,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":6144,"rowCount":2,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/1/{row}_{column}.jpg","colCount":12,"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":3072,"rowCount":1,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/2/{row}_{column}.jpg","colCount":6,"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]},{"width":12288,"rowCount":1,"url":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_0/{face}/vr2gen/0.jpg","colCount":6,"height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen"}]}}],"label":trans('panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F.label'),"class":"Panorama","thumbnailUrl":"media/panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F_t.jpg","partial":false,"data":{"label":"100460"},"hfovMin":"135%","hfovMax":130,"hfov":360,"pitch":0,"id":"panorama_7ACC4E15_76DF_5746_41CC_9309F2E27B8F"},{"subtitlesGap":0,"shadow":false,"toolTipBorderSize":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowVerticalLength":1,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","toolTipShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"subtitlesPaddingTop":5,"progressBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBorderColor":"#FFFFFF","id":"MainViewer","width":"100%","playbackBarRight":0,"progressLeft":0,"paddingLeft":0,"playbackBarBorderSize":0,"paddingRight":0,"subtitlesTop":0,"firstTransitionDuration":0,"playbackBarLeft":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","toolTipBorderColor":"#767676","subtitlesTextShadowBlurRadius":0,"playbackBarHeadHeight":15,"subtitlesBackgroundColor":"#000000","transitionDuration":500,"toolTipPaddingRight":6,"playbackBarProgressBorderRadius":0,"height":"100%","propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowBlurRadius":3,"toolTipTextShadowBlurRadius":3,"subtitlesHorizontalAlign":"center","playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"vrPointerSelectionTime":2000,"translationTransitionDuration":1000,"subtitlesVerticalAlign":"bottom","toolTipShadowColor":"#333333","playbackBarBottom":5,"toolTipFontWeight":"normal","toolTipTextShadowOpacity":0,"playbackBarHeadShadowVerticalLength":0,"toolTipShadowSpread":0,"vrPointerColor":"#FFFFFF","displayTooltipInTouchScreens":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"minHeight":50,"minWidth":100,"borderSize":0,"toolTipFontColor":"#606060","toolTipBorderRadius":3,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","toolTipTextShadowColor":"#000000","transitionMode":"blending","toolTipFontFamily":"Arial","paddingTop":0,"playbackBarHeadBorderSize":0,"toolTipHorizontalAlign":"center","progressOpacity":1,"playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0],"progressRight":0,"paddingBottom":0,"playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","class":"ViewerArea","playbackBarBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarHeadOpacity":1,"subtitlesFontSize":"3vmin","toolTipPaddingLeft":6,"subtitlesFontFamily":"Arial","subtitlesBorderSize":0,"progressBackgroundColorDirection":"vertical","surfaceReticleOpacity":0.6,"surfaceReticleColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesTextDecoration":"none","subtitlesTextShadowHorizontalLength":1,"doubleClickAction":"toggle_fullscreen","toolTipShadowHorizontalLength":0,"borderRadius":0,"toolTipOpacity":1,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"subtitlesPaddingBottom":5,"playbackBarHeight":10,"toolTipFontStyle":"normal","toolTipDisplayTime":600,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesOpacity":1,"progressBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"progressHeight":10,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadWidth":6,"subtitlesFontColor":"#FFFFFF","subtitlesShadow":false,"playbackBarProgressOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarOpacity":1,"subtitlesPaddingLeft":5,"progressBorderSize":0,"progressBarBorderSize":0,"progressBarBorderRadius":0,"subtitlesEnabled":true,"playbackBarHeadBorderColor":"#000000","subtitlesBottom":50,"data":{"name":"Main Viewer"}},{"zoomEnabled":true,"aaEnabled":true,"displayPlaybackBar":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_7C77E597_76DF_7542_418D_6016092C9760"}],"vrPolyfillScale":0.75,"scrollBarOpacity":0.5,"scrollBarVisible":"rollOver","mobileMipmappingEnabled":false,"minHeight":20,"data":{"name":"Player519","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"defaultLocale":"en"},"backgroundOpacity":1,"backgroundColorDirection":"vertical","minWidth":20,"shadow":false,"backgroundColorRatios":[0],"borderSize":0,"defaultVRPointer":"laser"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.26.js.map
//Generated with v2021.2.26, Thu Jan 20 2022