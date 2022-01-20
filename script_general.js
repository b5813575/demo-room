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
    var b = {"start":"this.init()","backgroundColorRatios":[0],"scripts":{"historyGoForward":TDV.Tour.Script.historyGoForward,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"translate":TDV.Tour.Script.translate,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"quizFinish":TDV.Tour.Script.quizFinish,"shareSocial":TDV.Tour.Script.shareSocial,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"registerKey":TDV.Tour.Script.registerKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cloneCamera":TDV.Tour.Script.cloneCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumePlayers":TDV.Tour.Script.resumePlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"setLocale":TDV.Tour.Script.setLocale,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isPanorama":TDV.Tour.Script.isPanorama,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaWidth":TDV.Tour.Script.getMediaWidth},"gap":10,"class":"Player","mediaActivationMode":"window","contentOpaque":false,"width":"100%","backgroundPreloadEnabled":true,"id":"rootPlayer","horizontalAlign":"left","desktopMipmappingEnabled":false,"paddingBottom":0,"paddingLeft":0,"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"paddingTop":0,"paddingRight":0,"overflow":"hidden","scrollBarColor":"#000000","children":["this.MainViewer"],"verticalAlign":"top","vrPolyfillScale":0.75,"downloadEnabled":false,"borderRadius":0,"height":"100%","backgroundColor":["#FFFFFF"],"definitions": [{"manualRotationSpeed":1057,"automaticRotationSpeed":129,"hoverFactor":0,"initialSequence":"this.sequence_7C52BB29_75AF_03E3_41A3_4975F73B44B2","manualZoomSpeed":2,"class":"PanoramaCamera","automaticZoomSpeed":16,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_camera"},{"subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","class":"ViewerArea","playbackBarHeadShadow":true,"toolTipShadowOpacity":1,"firstTransitionDuration":0,"playbackBarHeight":10,"playbackBarHeadOpacity":1,"width":"100%","vrPointerSelectionColor":"#FF6600","progressBorderRadius":0,"data":{"name":"Main Viewer"},"subtitlesFontWeight":"normal","id":"MainViewer","playbackBarHeadBorderRadius":0,"subtitlesTextDecoration":"none","toolTipBorderColor":"#767676","progressLeft":0,"paddingLeft":0,"subtitlesTextShadowVerticalLength":1,"progressBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"paddingRight":0,"toolTipFontWeight":"normal","subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarOpacity":1,"toolTipShadowBlurRadius":3,"subtitlesFontSize":"3vmin","translationTransitionDuration":1000,"subtitlesBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipShadowSpread":0,"vrPointerSelectionTime":2000,"height":"100%","subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF","transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":3,"toolTipShadowColor":"#333333","subtitlesPaddingTop":5,"toolTipTextShadowOpacity":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBorderSize":0,"subtitlesPaddingLeft":5,"toolTipHorizontalAlign":"center","subtitlesOpacity":1,"subtitlesShadow":false,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"toolTipFontColor":"#606060","vrPointerColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"borderSize":0,"minWidth":100,"minHeight":50,"playbackBarRight":0,"subtitlesGap":0,"playbackBarBottom":5,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarLeft":0,"transitionMode":"blending","progressBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":6,"progressOpacity":1,"subtitlesHorizontalAlign":"center","paddingTop":0,"paddingBottom":0,"toolTipFontStyle":"normal","toolTipShadowHorizontalLength":0,"progressBarBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"progressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"playbackBarBorderRadius":0,"playbackBarHeadShadowColor":"#000000","borderRadius":0,"toolTipOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadShadowHorizontalLength":0,"progressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"doubleClickAction":"toggle_fullscreen","surfaceReticleColor":"#FFFFFF","toolTipDisplayTime":600,"subtitlesTextShadowHorizontalLength":1,"subtitlesFontFamily":"Arial","toolTipShadowVerticalLength":0,"subtitlesVerticalAlign":"bottom","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderSize":0,"subtitlesEnabled":true,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionOpacity":1,"subtitlesTop":0,"progressBottom":0,"propagateClick":false,"progressBarOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"progressHeight":10,"progressBorderSize":0,"displayTooltipInSurfaceSelection":true,"playbackBarHeadShadowVerticalLength":0,"progressBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderSize":1,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowOpacity":0.7,"shadow":false,"toolTipPaddingTop":4,"progressBarBorderSize":0},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_camera","class":"PanoramaPlayListItem","media":"this.panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","zoomEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation"},{"label":trans('panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D.label'),"thumbnailUrl":"media/panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_t.jpg","vfov":180,"hfov":360,"partial":false,"class":"Panorama","hfovMin":"135%","data":{"label":"100460"},"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_t.jpg","cube":{"levels":[{"tags":"ondemand","width":12288,"rowCount":4,"url":"media/panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":24},{"tags":"ondemand","width":6144,"rowCount":2,"url":"media/panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12},{"tags":["ondemand","preload"],"width":3072,"rowCount":1,"url":"media/panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6},{"tags":"mobilevr2gen","width":12288,"rowCount":1,"url":"media/panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"pitch":0,"id":"panorama_7EE302B5_75AF_02E0_41B4_5027FC48869D"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_7C52BB29_75AF_03E3_41A3_4975F73B44B2"}],"scrollBarVisible":"rollOver","layout":"absolute","propagateClick":false,"toolTipHorizontalAlign":"center","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarMargin":2,"defaultVRPointer":"laser","backgroundOpacity":1,"borderSize":0,"data":{"name":"Player519","locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"minWidth":20,"shadow":false,"minHeight":20,"backgroundColorDirection":"vertical"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.26.js.map
//Generated with v2021.2.26, Thu Jan 20 2022