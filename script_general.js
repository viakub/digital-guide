(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
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
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
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
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
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
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init()","backgroundPreloadEnabled":true,"horizontalAlign":"left","paddingLeft":0,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"scrollBarVisible":"rollOver","paddingRight":0,"scrollBarOpacity":0.5,"contentOpaque":false,"toolTipHorizontalAlign":"center","vrPolyfillScale":0.75,"backgroundOpacity":1,"class":"Player","defaultVRPointer":"laser","height":"100%","borderRadius":0,"scrollBarMargin":2,"layout":"absolute","mediaActivationMode":"window","width":"100%","scripts":{"quizStart":TDV.Tour.Script.quizStart,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"quizFinish":TDV.Tour.Script.quizFinish,"unregisterKey":TDV.Tour.Script.unregisterKey,"getKey":TDV.Tour.Script.getKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"mixObject":TDV.Tour.Script.mixObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openLink":TDV.Tour.Script.openLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"init":TDV.Tour.Script.init,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initAnalytics":TDV.Tour.Script.initAnalytics,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"shareSocial":TDV.Tour.Script.shareSocial,"initQuiz":TDV.Tour.Script.initQuiz,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setValue":TDV.Tour.Script.setValue,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showWindow":TDV.Tour.Script.showWindow,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setLocale":TDV.Tour.Script.setLocale,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playAudioList":TDV.Tour.Script.playAudioList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"translate":TDV.Tour.Script.translate,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"clone":TDV.Tour.Script.clone},"desktopMipmappingEnabled":false,"mouseWheelEnabled":true,"definitions": [{"subtitlesFontColor":"#FFFFFF","paddingLeft":0,"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","playbackBarRight":0,"progressLeft":0,"toolTipOpacity":1,"playbackBarHeadOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionColor":"#FFFFFF","paddingRight":0,"toolTipBorderColor":"#767676","playbackBarProgressBorderRadius":0,"subtitlesPaddingLeft":5,"toolTipShadowVerticalLength":0,"toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","class":"ViewerArea","surfaceReticleSelectionOpacity":1,"subtitlesPaddingRight":5,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"borderRadius":0,"transitionMode":"blending","subtitlesEnabled":true,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"playbackBarLeft":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowVerticalLength":0,"firstTransitionDuration":0,"progressBackgroundOpacity":1,"playbackBarHeadHeight":15,"toolTipBorderRadius":3,"playbackBarOpacity":1,"paddingTop":0,"height":"100%","playbackBarHeadWidth":6,"playbackBarHeadShadowColor":"#000000","minHeight":50,"playbackBarBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","minWidth":100,"subtitlesTop":0,"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipBorderSize":1,"subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"toolTipTextShadowOpacity":0,"playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInSurfaceSelection":true,"progressBackgroundColorRatios":[0],"doubleClickAction":"toggle_fullscreen","subtitlesFontSize":"3vmin","toolTipPaddingRight":6,"toolTipShadowColor":"#333138","toolTipFontColor":"#606060","toolTipShadowSpread":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundOpacity":0.2,"progressRight":0,"playbackBarHeadBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","progressBarBorderColor":"#000000","toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"subtitlesTextDecoration":"none","progressBarBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"progressOpacity":1,"subtitlesTextShadowBlurRadius":0,"progressBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"transitionDuration":500,"subtitlesFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressOpacity":1,"progressBorderColor":"#000000","toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"toolTipPaddingBottom":4,"toolTipDisplayTime":600,"subtitlesShadow":false,"subtitlesOpacity":1,"subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"progressBarOpacity":1,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderSize":0,"progressBottom":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"subtitlesHorizontalAlign":"center","toolTipFontStyle":"normal","subtitlesVerticalAlign":"bottom","progressBorderSize":0,"id":"MainViewer","displayTooltipInTouchScreens":true,"progressHeight":10,"borderSize":0,"propagateClick":false,"subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeight":10,"shadow":false,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","playbackBarBottom":5,"surfaceReticleOpacity":0.6,"translationTransitionDuration":1000,"progressBarBorderRadius":0,"toolTipFontSize":"1.11vmin","width":"100%","playbackBarBackgroundOpacity":1,"subtitlesBorderSize":0,"progressBorderRadius":0},{"initialSequence":"this.sequence_80AE046A_8AD2_DDB4_41D6_235864836D71","hoverFactor":0,"class":"PanoramaCamera","id":"panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"vfov":147,"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":2,"colCount":12,"height":1024,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78_0/{face}/0/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"colCount":6,"height":512,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78_0/{face}/1/{row}_{column}.jpg"}]}}],"hfovMin":"150%","hfov":360,"id":"panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78","adjacentPanoramas":[{"distance":8.65,"panorama":"this.panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8","yaw":-176.91,"class":"AdjacentPanorama","data":{"overlayID":"overlay_9B9C78F8_8A32_D694_41B2_7689E778599F"},"select":"this.overlay_9B9C78F8_8A32_D694_41B2_7689E778599F.get('areas').forEach(function(a){ a.trigger('click') })"}],"class":"Panorama","label":trans('panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78.label'),"overlays":["this.overlay_9B9C78F8_8A32_D694_41B2_7689E778599F"],"pitch":0,"partial":false,"data":{"label":"Ultraschall_Club_Munich_1997_Panorama_Bar"},"thumbnailUrl":"media/panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78_t.jpg"},{"vfov":147,"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":2,"colCount":12,"height":1024,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8_0/{face}/0/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"colCount":6,"height":512,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8_0/{face}/1/{row}_{column}.jpg"}]}}],"hfovMin":"150%","hfov":360,"id":"panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8","pitch":0,"class":"Panorama","label":trans('panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8.label'),"overlays":["this.FramePanoramaOverlay_9BAA6E41_8A36_4DF4_4187_2C4F70927C25"],"partial":false,"data":{"label":"Ultraschall_Club_Munich_1997_Panorama_Green_Room"},"thumbnailUrl":"media/panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8_t.jpg"},{"id":"mainPlayList","items":[{"media":"this.panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78","camera":"this.panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9","camera":"this.panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841","camera":"this.panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8","camera":"this.panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList"},{"id":"panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9","vfov":147,"hfovMax":130,"label":trans('panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9.label'),"data":{"label":"Ultraschall_Club_Munich_1997_Panorama_Dance_Area"},"frames":[{"thumbnailUrl":"media/panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":2,"colCount":12,"height":1024,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9_0/{face}/0/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"rowCount":1,"colCount":6,"height":512,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9_0/{face}/1/{row}_{column}.jpg"}]}}],"class":"Panorama","partial":false,"hfovMin":"150%","hfov":360,"thumbnailUrl":"media/panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9_t.jpg","pitch":0},{"initialSequence":"this.sequence_80AE646A_8AD2_DDB4_41C0_125866254BE5","hoverFactor":0,"class":"PanoramaCamera","id":"panorama_80B1D974_8AD2_379C_41D6_5F8F7D085CC9_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"arrowKeysAction":"translate","class":"PanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","zoomEnabled":true,"surfaceSelectionEnabled":false,"aaEnabled":true},{"id":"panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841","vfov":146.69,"hfovMax":130,"label":trans('panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841.label'),"data":{"label":"Ultraschall_Club_Munich_1997_Panorama_Dumpling_Room"},"frames":[{"thumbnailUrl":"media/panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":["ondemand","preload"],"rowCount":1,"colCount":6,"height":512,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841_0/{face}/0/{row}_{column}.jpg"}]}}],"class":"Panorama","partial":false,"hfovMin":"150%","hfov":360,"thumbnailUrl":"media/panorama_80CB3D7E_8AD2_CF8C_41D4_E589DFDE3841_t.jpg","pitch":0},{"initialSequence":"this.sequence_80A2C468_8AD2_DDB5_41C5_0FC44EB88FFB","hoverFactor":0,"class":"PanoramaCamera","id":"panorama_868FCC52_8AD2_4D94_41D4_599E5398EF78_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"initialSequence":"this.sequence_80AE246A_8AD2_DDB4_41DC_61ED69A9E79E","hoverFactor":0,"class":"PanoramaCamera","id":"panorama_80CBDFB6_8AD2_CA9C_41A5_AA74F14BCEA8_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_80AE046A_8AD2_DDB4_41D6_235864836D71","restartMovementOnUserInteraction":false},{"areas":["this.HotspotPanoramaOverlayArea_9BDAF91B_8A32_D794_41DA_2E2156424104"],"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02a Right","hasPanoramaAction":true},"useHandCursor":true,"id":"overlay_9B9C78F8_8A32_D694_41B2_7689E778599F","items":[{"roll":41.99,"distance":50,"yaw":-176.91,"vfov":12.24,"class":"HotspotPanoramaOverlayImage","data":{"label":"Arrow 02a Right"},"verticalAlign":"middle","horizontalAlign":"center","image":"this.AnimatedImageResource_98B2B7F3_8A36_3A94_41B2_EEAA2C7A52C1","hfov":11.66,"scaleMode":"fit_inside","pitch":-11.11}]},{"contentInteractive":true,"vfov":10.5,"class":"FramePanoramaOverlay","useHandCursor":false,"yaw":36.44,"click":"eval('alert()');","height":720,"hfov":10.5,"id":"FramePanoramaOverlay_9BAA6E41_8A36_4DF4_4187_2C4F70927C25","pitch":17.14,"data":{"label":"Web"},"width":1280},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_80AE646A_8AD2_DDB4_41C0_125866254BE5","restartMovementOnUserInteraction":false},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_80A2C468_8AD2_DDB5_41C5_0FC44EB88FFB","restartMovementOnUserInteraction":false},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_80AE246A_8AD2_DDB4_41DC_61ED69A9E79E","restartMovementOnUserInteraction":false},{"id":"HotspotPanoramaOverlayArea_9BDAF91B_8A32_D794_41DA_2E2156424104","click":"this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameCount":24,"rowCount":1,"class":"AnimatedImageResource","levels":[{"url":"media/res_9B29F974_8A36_379C_4192_AC998267AFB2_0.png","class":"ImageResourceLevel","height":60,"width":2400}],"id":"AnimatedImageResource_98B2B7F3_8A36_3A94_41B2_EEAA2C7A52C1","frameDuration":41,"colCount":24}],"backgroundColor":["#FFFFFF"],"overflow":"hidden","paddingTop":0,"scrollBarWidth":10,"children":["this.MainViewer"],"gap":10,"minHeight":20,"id":"rootPlayer","paddingBottom":0,"minWidth":20,"borderSize":0,"propagateClick":false,"downloadEnabled":false,"mobileMipmappingEnabled":false,"shadow":false,"verticalAlign":"top","scrollBarColor":"#000000","data":{"defaultLocale":"en","name":"Player2126","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.23.js.map
})();
//Generated with v2022.0.23, Mon Mar 14 2022