(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkerClusterer; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    // eslint-disable-next-line prefer-const
    for (var property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
/**
 * @ignore
 */
var OverlayViewSafe = /** @class */ (function () {
    function OverlayViewSafe() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
    return OverlayViewSafe;
}());

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @hidden
 */
function toCssText(styles) {
    return Object.keys(styles)
        .reduce(function (acc, key) {
        if (styles[key]) {
            acc.push(key + ":" + styles[key]);
        }
        return acc;
    }, [])
        .join(";");
}
/**
 *
 * @hidden
 */
function coercePixels(pixels) {
    return pixels ? pixels + "px" : undefined;
}
/**
 * A cluster icon.
 */
var ClusterIcon = /** @class */ (function (_super) {
    __extends(ClusterIcon, _super);
    /**
     * @param cluster_ The cluster with which the icon is to be associated.
     * @param styles_ An array of {@link ClusterIconStyle} defining the cluster icons
     *  to use for various cluster sizes.
     */
    function ClusterIcon(cluster_, styles_) {
        var _this = _super.call(this) || this;
        _this.cluster_ = cluster_;
        _this.styles_ = styles_;
        _this.center_ = null;
        _this.div_ = null;
        _this.sums_ = null;
        _this.visible_ = false;
        _this.style = null;
        _this.setMap(cluster_.getMap()); // Note: this causes onAdd to be called
        return _this;
    }
    /**
     * Adds the icon to the DOM.
     */
    ClusterIcon.prototype.onAdd = function () {
        var _this = this;
        var cMouseDownInCluster;
        var cDraggingMapByCluster;
        var mc = this.cluster_.getMarkerClusterer();
        var _a = google.maps.version.split("."), major = _a[0], minor = _a[1];
        var gmVersion = parseInt(major, 10) * 100 + parseInt(minor, 10);
        this.div_ = document.createElement("div");
        if (this.visible_) {
            this.show();
        }
        this.getPanes().overlayMouseTarget.appendChild(this.div_);
        // Fix for Issue 157
        this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function () {
            cDraggingMapByCluster = cMouseDownInCluster;
        });
        google.maps.event.addDomListener(this.div_, "mousedown", function () {
            cMouseDownInCluster = true;
            cDraggingMapByCluster = false;
        });
        google.maps.event.addDomListener(this.div_, "contextmenu", function () {
            /**
             * This event is fired when a cluster marker contextmenu is requested.
             * @name MarkerClusterer#mouseover
             * @param {Cluster} c The cluster that the contextmenu is requested.
             * @event
             */
            google.maps.event.trigger(mc, "contextmenu", _this.cluster_);
        });
        // March 1, 2018: Fix for this 3.32 exp bug, https://issuetracker.google.com/issues/73571522
        // But it doesn't work with earlier releases so do a version check.
        if (gmVersion >= 332) {
            // Ugly version-dependent code
            google.maps.event.addDomListener(this.div_, "touchstart", function (e) {
                e.stopPropagation();
            });
        }
        google.maps.event.addDomListener(this.div_, "click", function (e) {
            cMouseDownInCluster = false;
            if (!cDraggingMapByCluster) {
                /**
                 * This event is fired when a cluster marker is clicked.
                 * @name MarkerClusterer#click
                 * @param {Cluster} c The cluster that was clicked.
                 * @event
                 */
                google.maps.event.trigger(mc, "click", _this.cluster_);
                google.maps.event.trigger(mc, "clusterclick", _this.cluster_); // deprecated name
                // The default click handler follows. Disable it by setting
                // the zoomOnClick property to false.
                if (mc.getZoomOnClick()) {
                    // Zoom into the cluster.
                    var mz_1 = mc.getMaxZoom();
                    var theBounds_1 = _this.cluster_.getBounds();
                    mc.getMap().fitBounds(theBounds_1);
                    // There is a fix for Issue 170 here:
                    setTimeout(function () {
                        mc.getMap().fitBounds(theBounds_1);
                        // Don't zoom beyond the max zoom level
                        if (mz_1 !== null && mc.getMap().getZoom() > mz_1) {
                            mc.getMap().setZoom(mz_1 + 1);
                        }
                    }, 100);
                }
                // Prevent event propagation to the map:
                e.cancelBubble = true;
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
            }
        });
        google.maps.event.addDomListener(this.div_, "mouseover", function () {
            /**
             * This event is fired when the mouse moves over a cluster marker.
             * @name MarkerClusterer#mouseover
             * @param {Cluster} c The cluster that the mouse moved over.
             * @event
             */
            google.maps.event.trigger(mc, "mouseover", _this.cluster_);
        });
        google.maps.event.addDomListener(this.div_, "mouseout", function () {
            /**
             * This event is fired when the mouse moves out of a cluster marker.
             * @name MarkerClusterer#mouseout
             * @param {Cluster} c The cluster that the mouse moved out of.
             * @event
             */
            google.maps.event.trigger(mc, "mouseout", _this.cluster_);
        });
    };
    /**
     * Removes the icon from the DOM.
     */
    ClusterIcon.prototype.onRemove = function () {
        if (this.div_ && this.div_.parentNode) {
            this.hide();
            google.maps.event.removeListener(this.boundsChangedListener_);
            google.maps.event.clearInstanceListeners(this.div_);
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
        }
    };
    /**
     * Draws the icon.
     */
    ClusterIcon.prototype.draw = function () {
        if (this.visible_) {
            var pos = this.getPosFromLatLng_(this.center_);
            this.div_.style.top = pos.y + "px";
            this.div_.style.left = pos.x + "px";
        }
    };
    /**
     * Hides the icon.
     */
    ClusterIcon.prototype.hide = function () {
        if (this.div_) {
            this.div_.style.display = "none";
        }
        this.visible_ = false;
    };
    /**
     * Positions and shows the icon.
     */
    ClusterIcon.prototype.show = function () {
        if (this.div_) {
            this.div_.className = this.className_;
            this.div_.style.cssText = this.createCss_(this.getPosFromLatLng_(this.center_));
            this.div_.innerHTML =
                (this.style.url ? this.getImageElementHtml() : "") +
                    this.getLabelDivHtml();
            if (typeof this.sums_.title === "undefined" || this.sums_.title === "") {
                this.div_.title = this.cluster_.getMarkerClusterer().getTitle();
            }
            else {
                this.div_.title = this.sums_.title;
            }
            this.div_.style.display = "";
        }
        this.visible_ = true;
    };
    ClusterIcon.prototype.getLabelDivHtml = function () {
        var mc = this.cluster_.getMarkerClusterer();
        var ariaLabel = mc.ariaLabelFn(this.sums_.text);
        var divStyle = {
            position: "absolute",
            top: coercePixels(this.anchorText_[0]),
            left: coercePixels(this.anchorText_[1]),
            color: this.style.textColor,
            "font-size": coercePixels(this.style.textSize),
            "font-family": this.style.fontFamily,
            "font-weight": this.style.fontWeight,
            "font-style": this.style.fontStyle,
            "text-decoration": this.style.textDecoration,
            "text-align": "center",
            width: coercePixels(this.style.width),
            "line-height": coercePixels(this.style.textLineHeight)
        };
        return "\n<div aria-label=\"".concat(ariaLabel, "\" style=\"").concat(toCssText(divStyle), "\" tabindex=\"0\">\n  <span aria-hidden=\"true\">").concat(this.sums_.text, "</span>\n</div>\n");
    };
    ClusterIcon.prototype.getImageElementHtml = function () {
        // NOTE: values must be specified in px units
        var bp = (this.style.backgroundPosition || "0 0").split(" ");
        var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ""), 10);
        var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ""), 10);
        var dimensions = {};
        if (this.cluster_.getMarkerClusterer().getEnableRetinaIcons()) {
            dimensions = {
                width: coercePixels(this.style.width),
                height: coercePixels(this.style.height)
            };
        }
        else {
            var _a = [
                -1 * spriteV,
                -1 * spriteH + this.style.width,
                -1 * spriteV + this.style.height,
                -1 * spriteH,
            ], Y1 = _a[0], X1 = _a[1], Y2 = _a[2], X2 = _a[3];
            dimensions = {
                clip: "rect(".concat(Y1, "px, ").concat(X1, "px, ").concat(Y2, "px, ").concat(X2, "px)")
            };
        }
        var overrideDimensionsDynamicIcon = this.sums_.url
            ? { width: "100%", height: "100%" }
            : {};
        var cssText = toCssText(__assign(__assign({ position: "absolute", top: coercePixels(spriteV), left: coercePixels(spriteH) }, dimensions), overrideDimensionsDynamicIcon));
        return "<img alt=\"".concat(this.sums_.text, "\" aria-hidden=\"true\" src=\"").concat(this.style.url, "\" style=\"").concat(cssText, "\"/>");
    };
    /**
     * Sets the icon styles to the appropriate element in the styles array.
     *
     * @ignore
     * @param sums The icon label text and styles index.
     */
    ClusterIcon.prototype.useStyle = function (sums) {
        this.sums_ = sums;
        var index = Math.max(0, sums.index - 1);
        index = Math.min(this.styles_.length - 1, index);
        this.style = this.sums_.url
            ? __assign(__assign({}, this.styles_[index]), { url: this.sums_.url }) : this.styles_[index];
        this.anchorText_ = this.style.anchorText || [0, 0];
        this.anchorIcon_ = this.style.anchorIcon || [
            Math.floor(this.style.height / 2),
            Math.floor(this.style.width / 2),
        ];
        this.className_ =
            this.cluster_.getMarkerClusterer().getClusterClass() +
                " " +
                (this.style.className || "cluster-" + index);
    };
    /**
     * Sets the position at which to center the icon.
     *
     * @param center The latlng to set as the center.
     */
    ClusterIcon.prototype.setCenter = function (center) {
        this.center_ = center;
    };
    /**
     * Creates the `cssText` style parameter based on the position of the icon.
     *
     * @param pos The position of the icon.
     * @return The CSS style text.
     */
    ClusterIcon.prototype.createCss_ = function (pos) {
        return toCssText({
            "z-index": "".concat(this.cluster_.getMarkerClusterer().getZIndex()),
            top: coercePixels(pos.y),
            left: coercePixels(pos.x),
            width: coercePixels(this.style.width),
            height: coercePixels(this.style.height),
            cursor: "pointer",
            position: "absolute",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none"
        });
    };
    /**
     * Returns the position at which to place the DIV depending on the latlng.
     *
     * @param latlng The position in latlng.
     * @return The position in pixels.
     */
    ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
        var pos = this.getProjection().fromLatLngToDivPixel(latlng);
        pos.x = Math.floor(pos.x - this.anchorIcon_[1]);
        pos.y = Math.floor(pos.y - this.anchorIcon_[0]);
        return pos;
    };
    return ClusterIcon;
}(OverlayViewSafe));

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a single cluster that manages a group of proximate markers.
 *  Used internally, do not call this constructor directly.
 */
var Cluster = /** @class */ (function () {
    /**
     *
     * @param markerClusterer_ The `MarkerClusterer` object with which this
     *  cluster is associated.
     */
    function Cluster(markerClusterer_) {
        this.markerClusterer_ = markerClusterer_;
        this.map_ = this.markerClusterer_.getMap();
        this.minClusterSize_ = this.markerClusterer_.getMinimumClusterSize();
        this.averageCenter_ = this.markerClusterer_.getAverageCenter();
        this.markers_ = []; // TODO: type;
        this.center_ = null;
        this.bounds_ = null;
        this.clusterIcon_ = new ClusterIcon(this, this.markerClusterer_.getStyles());
    }
    /**
     * Returns the number of markers managed by the cluster. You can call this from
     * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
     *
     * @return The number of markers in the cluster.
     */
    Cluster.prototype.getSize = function () {
        return this.markers_.length;
    };
    /**
     * Returns the array of markers managed by the cluster. You can call this from
     * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
     *
     * @return The array of markers in the cluster.
     */
    Cluster.prototype.getMarkers = function () {
        return this.markers_;
    };
    /**
     * Returns the center of the cluster. You can call this from
     * a `click`, `mouseover`, or `mouseout` event handler
     * for the `MarkerClusterer` object.
     *
     * @return The center of the cluster.
     */
    Cluster.prototype.getCenter = function () {
        return this.center_;
    };
    /**
     * Returns the map with which the cluster is associated.
     *
     * @return The map.
     * @ignore
     */
    Cluster.prototype.getMap = function () {
        return this.map_;
    };
    /**
     * Returns the `MarkerClusterer` object with which the cluster is associated.
     *
     * @return The associated marker clusterer.
     * @ignore
     */
    Cluster.prototype.getMarkerClusterer = function () {
        return this.markerClusterer_;
    };
    /**
     * Returns the bounds of the cluster.
     *
     * @return the cluster bounds.
     * @ignore
     */
    Cluster.prototype.getBounds = function () {
        var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
        var markers = this.getMarkers();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        return bounds;
    };
    /**
     * Removes the cluster from the map.
     *
     * @ignore
     */
    Cluster.prototype.remove = function () {
        this.clusterIcon_.setMap(null);
        this.markers_ = [];
        delete this.markers_;
    };
    /**
     * Adds a marker to the cluster.
     *
     * @param marker The marker to be added.
     * @return True if the marker was added.
     * @ignore
     */
    Cluster.prototype.addMarker = function (marker) {
        if (this.isMarkerAlreadyAdded_(marker)) {
            return false;
        }
        if (!this.center_) {
            this.center_ = marker.getPosition();
            this.calculateBounds_();
        }
        else {
            if (this.averageCenter_) {
                var l = this.markers_.length + 1;
                var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
                var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
                this.center_ = new google.maps.LatLng(lat, lng);
                this.calculateBounds_();
            }
        }
        marker.isAdded = true;
        this.markers_.push(marker);
        var mCount = this.markers_.length;
        var mz = this.markerClusterer_.getMaxZoom();
        if (mz !== null && this.map_.getZoom() > mz) {
            // Zoomed in past max zoom, so show the marker.
            if (marker.getMap() !== this.map_) {
                marker.setMap(this.map_);
            }
        }
        else if (mCount < this.minClusterSize_) {
            // Min cluster size not reached so show the marker.
            if (marker.getMap() !== this.map_) {
                marker.setMap(this.map_);
            }
        }
        else if (mCount === this.minClusterSize_) {
            // Hide the markers that were showing.
            for (var i = 0; i < mCount; i++) {
                this.markers_[i].setMap(null);
            }
        }
        else {
            marker.setMap(null);
        }
        return true;
    };
    /**
     * Determines if a marker lies within the cluster's bounds.
     *
     * @param marker The marker to check.
     * @return True if the marker lies in the bounds.
     * @ignore
     */
    Cluster.prototype.isMarkerInClusterBounds = function (marker) {
        return this.bounds_.contains(marker.getPosition());
    };
    /**
     * Calculates the extended bounds of the cluster with the grid.
     */
    Cluster.prototype.calculateBounds_ = function () {
        var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
        this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
    };
    /**
     * Updates the cluster icon.
     */
    Cluster.prototype.updateIcon = function () {
        var mCount = this.markers_.length;
        var mz = this.markerClusterer_.getMaxZoom();
        if (mz !== null && this.map_.getZoom() > mz) {
            this.clusterIcon_.hide();
            return;
        }
        if (mCount < this.minClusterSize_) {
            // Min cluster size not yet reached.
            this.clusterIcon_.hide();
            return;
        }
        var numStyles = this.markerClusterer_.getStyles().length;
        var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
        this.clusterIcon_.setCenter(this.center_);
        this.clusterIcon_.useStyle(sums);
        this.clusterIcon_.show();
    };
    /**
     * Determines if a marker has already been added to the cluster.
     *
     * @param marker The marker to check.
     * @return True if the marker has already been added.
     */
    Cluster.prototype.isMarkerAlreadyAdded_ = function (marker) {
        if (this.markers_.indexOf) {
            return this.markers_.indexOf(marker) !== -1;
        }
        else {
            for (var i = 0; i < this.markers_.length; i++) {
                if (marker === this.markers_[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    return Cluster;
}());

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @ignore
 */
var getOption = function (options, prop, def) {
    if (options[prop] !== undefined) {
        return options[prop];
    }
    else {
        return def;
    }
};
var MarkerClusterer = /** @class */ (function (_super) {
    __extends(MarkerClusterer, _super);
    /**
     * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
     * @param map The Google map to attach to.
     * @param markers The markers to be added to the cluster.
     * @param options The optional parameters.
     */
    function MarkerClusterer(map, markers, options) {
        if (markers === void 0) { markers = []; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.markers_ = [];
        _this.clusters_ = [];
        _this.listeners_ = [];
        _this.activeMap_ = null;
        _this.ready_ = false;
        _this.ariaLabelFn = _this.options.ariaLabelFn || (function () { return ""; });
        _this.zIndex_ = _this.options.zIndex || Number(google.maps.Marker.MAX_ZINDEX) + 1;
        _this.gridSize_ = _this.options.gridSize || 60;
        _this.minClusterSize_ = _this.options.minimumClusterSize || 2;
        _this.maxZoom_ = _this.options.maxZoom || null;
        _this.styles_ = _this.options.styles || [];
        _this.title_ = _this.options.title || "";
        _this.zoomOnClick_ = getOption(_this.options, "zoomOnClick", true);
        _this.averageCenter_ = getOption(_this.options, "averageCenter", false);
        _this.ignoreHidden_ = getOption(_this.options, "ignoreHidden", false);
        _this.enableRetinaIcons_ = getOption(_this.options, "enableRetinaIcons", false);
        _this.imagePath_ = _this.options.imagePath || MarkerClusterer.IMAGE_PATH;
        _this.imageExtension_ = _this.options.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
        _this.imageSizes_ = _this.options.imageSizes || MarkerClusterer.IMAGE_SIZES;
        _this.calculator_ = _this.options.calculator || MarkerClusterer.CALCULATOR;
        _this.batchSize_ = _this.options.batchSize || MarkerClusterer.BATCH_SIZE;
        _this.batchSizeIE_ = _this.options.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE;
        _this.clusterClass_ = _this.options.clusterClass || "cluster";
        if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
            // Try to avoid IE timeout when processing a huge number of markers:
            _this.batchSize_ = _this.batchSizeIE_;
        }
        _this.setupStyles_();
        _this.addMarkers(markers, true);
        _this.setMap(map); // Note: this causes onAdd to be called
        return _this;
    }
    /**
     * Implementation of the onAdd interface method.
     * @ignore
     */
    MarkerClusterer.prototype.onAdd = function () {
        var _this = this;
        this.activeMap_ = this.getMap();
        this.ready_ = true;
        this.repaint();
        this.prevZoom_ = this.getMap().getZoom();
        // Add the map event listeners
        this.listeners_ = [
            google.maps.event.addListener(this.getMap(), "zoom_changed", function () {
                var map = _this.getMap(); // eslint-disable-line @typescript-eslint/no-explicit-any
                // Fix for bug #407
                // Determines map type and prevents illegal zoom levels
                var minZoom = map.minZoom || 0;
                var maxZoom = Math.min(map.maxZoom || 100, map.mapTypes[map.getMapTypeId()].maxZoom);
                var zoom = Math.min(Math.max(_this.getMap().getZoom(), minZoom), maxZoom);
                if (_this.prevZoom_ != zoom) {
                    _this.prevZoom_ = zoom;
                    _this.resetViewport_(false);
                }
            }),
            google.maps.event.addListener(this.getMap(), "idle", function () {
                _this.redraw_();
            }),
        ];
    };
    /**
     * Implementation of the onRemove interface method.
     * Removes map event listeners and all cluster icons from the DOM.
     * All managed markers are also put back on the map.
     * @ignore
     */
    MarkerClusterer.prototype.onRemove = function () {
        // Put all the managed markers back on the map:
        for (var i = 0; i < this.markers_.length; i++) {
            if (this.markers_[i].getMap() !== this.activeMap_) {
                this.markers_[i].setMap(this.activeMap_);
            }
        }
        // Remove all clusters:
        for (var i = 0; i < this.clusters_.length; i++) {
            this.clusters_[i].remove();
        }
        this.clusters_ = [];
        // Remove map event listeners:
        for (var i = 0; i < this.listeners_.length; i++) {
            google.maps.event.removeListener(this.listeners_[i]);
        }
        this.listeners_ = [];
        this.activeMap_ = null;
        this.ready_ = false;
    };
    /**
     * Implementation of the draw interface method.
     * @ignore
     */
    MarkerClusterer.prototype.draw = function () { };
    /**
     * Sets up the styles object.
     */
    MarkerClusterer.prototype.setupStyles_ = function () {
        if (this.styles_.length > 0) {
            return;
        }
        for (var i = 0; i < this.imageSizes_.length; i++) {
            var size = this.imageSizes_[i];
            this.styles_.push(MarkerClusterer.withDefaultStyle({
                url: this.imagePath_ + (i + 1) + "." + this.imageExtension_,
                height: size,
                width: size
            }));
        }
    };
    /**
     *  Fits the map to the bounds of the markers managed by the clusterer.
     */
    MarkerClusterer.prototype.fitMapToMarkers = function (padding) {
        var markers = this.getMarkers();
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            // March 3, 2018: Bug fix -- honor the ignoreHidden property
            if (markers[i].getVisible() || !this.getIgnoreHidden()) {
                bounds.extend(markers[i].getPosition());
            }
        }
        this.getMap().fitBounds(bounds, padding);
    };
    /**
     * Returns the value of the `gridSize` property.
     *
     * @return The grid size.
     */
    MarkerClusterer.prototype.getGridSize = function () {
        return this.gridSize_;
    };
    /**
     * Sets the value of the `gridSize` property.
     *
     * @param gridSize The grid size.
     */
    MarkerClusterer.prototype.setGridSize = function (gridSize) {
        this.gridSize_ = gridSize;
    };
    /**
     * Returns the value of the `minimumClusterSize` property.
     *
     * @return The minimum cluster size.
     */
    MarkerClusterer.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize_;
    };
    /**
     * Sets the value of the `minimumClusterSize` property.
     *
     * @param minimumClusterSize The minimum cluster size.
     */
    MarkerClusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
        this.minClusterSize_ = minimumClusterSize;
    };
    /**
     *  Returns the value of the `maxZoom` property.
     *
     *  @return The maximum zoom level.
     */
    MarkerClusterer.prototype.getMaxZoom = function () {
        return this.maxZoom_;
    };
    /**
     *  Sets the value of the `maxZoom` property.
     *
     *  @param maxZoom The maximum zoom level.
     */
    MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
        this.maxZoom_ = maxZoom;
    };
    MarkerClusterer.prototype.getZIndex = function () {
        return this.zIndex_;
    };
    MarkerClusterer.prototype.setZIndex = function (zIndex) {
        this.zIndex_ = zIndex;
    };
    /**
     *  Returns the value of the `styles` property.
     *
     *  @return The array of styles defining the cluster markers to be used.
     */
    MarkerClusterer.prototype.getStyles = function () {
        return this.styles_;
    };
    /**
     *  Sets the value of the `styles` property.
     *
     *  @param styles The array of styles to use.
     */
    MarkerClusterer.prototype.setStyles = function (styles) {
        this.styles_ = styles;
    };
    /**
     * Returns the value of the `title` property.
     *
     * @return The content of the title text.
     */
    MarkerClusterer.prototype.getTitle = function () {
        return this.title_;
    };
    /**
     *  Sets the value of the `title` property.
     *
     *  @param title The value of the title property.
     */
    MarkerClusterer.prototype.setTitle = function (title) {
        this.title_ = title;
    };
    /**
     * Returns the value of the `zoomOnClick` property.
     *
     * @return True if zoomOnClick property is set.
     */
    MarkerClusterer.prototype.getZoomOnClick = function () {
        return this.zoomOnClick_;
    };
    /**
     *  Sets the value of the `zoomOnClick` property.
     *
     *  @param zoomOnClick The value of the zoomOnClick property.
     */
    MarkerClusterer.prototype.setZoomOnClick = function (zoomOnClick) {
        this.zoomOnClick_ = zoomOnClick;
    };
    /**
     * Returns the value of the `averageCenter` property.
     *
     * @return True if averageCenter property is set.
     */
    MarkerClusterer.prototype.getAverageCenter = function () {
        return this.averageCenter_;
    };
    /**
     *  Sets the value of the `averageCenter` property.
     *
     *  @param averageCenter The value of the averageCenter property.
     */
    MarkerClusterer.prototype.setAverageCenter = function (averageCenter) {
        this.averageCenter_ = averageCenter;
    };
    /**
     * Returns the value of the `ignoreHidden` property.
     *
     * @return True if ignoreHidden property is set.
     */
    MarkerClusterer.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden_;
    };
    /**
     *  Sets the value of the `ignoreHidden` property.
     *
     *  @param ignoreHidden The value of the ignoreHidden property.
     */
    MarkerClusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
        this.ignoreHidden_ = ignoreHidden;
    };
    /**
     * Returns the value of the `enableRetinaIcons` property.
     *
     * @return True if enableRetinaIcons property is set.
     */
    MarkerClusterer.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons_;
    };
    /**
     *  Sets the value of the `enableRetinaIcons` property.
     *
     *  @param enableRetinaIcons The value of the enableRetinaIcons property.
     */
    MarkerClusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
        this.enableRetinaIcons_ = enableRetinaIcons;
    };
    /**
     * Returns the value of the `imageExtension` property.
     *
     * @return The value of the imageExtension property.
     */
    MarkerClusterer.prototype.getImageExtension = function () {
        return this.imageExtension_;
    };
    /**
     *  Sets the value of the `imageExtension` property.
     *
     *  @param imageExtension The value of the imageExtension property.
     */
    MarkerClusterer.prototype.setImageExtension = function (imageExtension) {
        this.imageExtension_ = imageExtension;
    };
    /**
     * Returns the value of the `imagePath` property.
     *
     * @return The value of the imagePath property.
     */
    MarkerClusterer.prototype.getImagePath = function () {
        return this.imagePath_;
    };
    /**
     *  Sets the value of the `imagePath` property.
     *
     *  @param imagePath The value of the imagePath property.
     */
    MarkerClusterer.prototype.setImagePath = function (imagePath) {
        this.imagePath_ = imagePath;
    };
    /**
     * Returns the value of the `imageSizes` property.
     *
     * @return The value of the imageSizes property.
     */
    MarkerClusterer.prototype.getImageSizes = function () {
        return this.imageSizes_;
    };
    /**
     *  Sets the value of the `imageSizes` property.
     *
     *  @param imageSizes The value of the imageSizes property.
     */
    MarkerClusterer.prototype.setImageSizes = function (imageSizes) {
        this.imageSizes_ = imageSizes;
    };
    /**
     * Returns the value of the `calculator` property.
     *
     * @return the value of the calculator property.
     */
    MarkerClusterer.prototype.getCalculator = function () {
        return this.calculator_;
    };
    /**
     * Sets the value of the `calculator` property.
     *
     * @param calculator The value of the calculator property.
     */
    MarkerClusterer.prototype.setCalculator = function (calculator) {
        this.calculator_ = calculator;
    };
    /**
     * Returns the value of the `batchSizeIE` property.
     *
     * @return the value of the batchSizeIE property.
     */
    MarkerClusterer.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE_;
    };
    /**
     * Sets the value of the `batchSizeIE` property.
     *
     *  @param batchSizeIE The value of the batchSizeIE property.
     */
    MarkerClusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
        this.batchSizeIE_ = batchSizeIE;
    };
    /**
     * Returns the value of the `clusterClass` property.
     *
     * @return the value of the clusterClass property.
     */
    MarkerClusterer.prototype.getClusterClass = function () {
        return this.clusterClass_;
    };
    /**
     * Sets the value of the `clusterClass` property.
     *
     *  @param clusterClass The value of the clusterClass property.
     */
    MarkerClusterer.prototype.setClusterClass = function (clusterClass) {
        this.clusterClass_ = clusterClass;
    };
    /**
     *  Returns the array of markers managed by the clusterer.
     *
     *  @return The array of markers managed by the clusterer.
     */
    MarkerClusterer.prototype.getMarkers = function () {
        return this.markers_;
    };
    /**
     *  Returns the number of markers managed by the clusterer.
     *
     *  @return The number of markers.
     */
    MarkerClusterer.prototype.getTotalMarkers = function () {
        return this.markers_.length;
    };
    /**
     * Returns the current array of clusters formed by the clusterer.
     *
     * @return The array of clusters formed by the clusterer.
     */
    MarkerClusterer.prototype.getClusters = function () {
        return this.clusters_;
    };
    /**
     * Returns the number of clusters formed by the clusterer.
     *
     * @return The number of clusters formed by the clusterer.
     */
    MarkerClusterer.prototype.getTotalClusters = function () {
        return this.clusters_.length;
    };
    /**
     * Adds a marker to the clusterer. The clusters are redrawn unless
     *  `nodraw` is set to `true`.
     *
     * @param marker The marker to add.
     * @param nodraw Set to `true` to prevent redrawing.
     */
    MarkerClusterer.prototype.addMarker = function (marker, nodraw) {
        this.pushMarkerTo_(marker);
        if (!nodraw) {
            this.redraw_();
        }
    };
    /**
     * Adds an array of markers to the clusterer. The clusters are redrawn unless
     *  `nodraw` is set to `true`.
     *
     * @param markers The markers to add.
     * @param nodraw Set to `true` to prevent redrawing.
     */
    MarkerClusterer.prototype.addMarkers = function (markers, nodraw) {
        for (var key in markers) {
            if (Object.prototype.hasOwnProperty.call(markers, key)) {
                this.pushMarkerTo_(markers[key]);
            }
        }
        if (!nodraw) {
            this.redraw_();
        }
    };
    /**
     * Pushes a marker to the clusterer.
     *
     * @param marker The marker to add.
     */
    MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
        var _this = this;
        // If the marker is draggable add a listener so we can update the clusters on the dragend:
        if (marker.getDraggable()) {
            google.maps.event.addListener(marker, "dragend", function () {
                if (_this.ready_) {
                    marker.isAdded = false;
                    _this.repaint();
                }
            });
        }
        marker.isAdded = false;
        this.markers_.push(marker);
    };
    /**
     * Removes a marker from the cluster.  The clusters are redrawn unless
     *  `nodraw` is set to `true`. Returns `true` if the
     *  marker was removed from the clusterer.
     *
     * @param marker The marker to remove.
     * @param nodraw Set to `true` to prevent redrawing.
     * @return True if the marker was removed from the clusterer.
     */
    MarkerClusterer.prototype.removeMarker = function (marker, nodraw) {
        var removed = this.removeMarker_(marker);
        if (!nodraw && removed) {
            this.repaint();
        }
        return removed;
    };
    /**
     * Removes an array of markers from the cluster. The clusters are redrawn unless
     *  `nodraw` is set to `true`. Returns `true` if markers were removed from the clusterer.
     *
     * @param markers The markers to remove.
     * @param nodraw Set to `true` to prevent redrawing.
     * @return True if markers were removed from the clusterer.
     */
    MarkerClusterer.prototype.removeMarkers = function (markers, nodraw) {
        var removed = false;
        for (var i = 0; i < markers.length; i++) {
            var r = this.removeMarker_(markers[i]);
            removed = removed || r;
        }
        if (!nodraw && removed) {
            this.repaint();
        }
        return removed;
    };
    /**
     * Removes a marker and returns true if removed, false if not.
     *
     * @param marker The marker to remove
     * @return Whether the marker was removed or not
     */
    MarkerClusterer.prototype.removeMarker_ = function (marker) {
        var index = -1;
        if (this.markers_.indexOf) {
            index = this.markers_.indexOf(marker);
        }
        else {
            for (var i = 0; i < this.markers_.length; i++) {
                if (marker === this.markers_[i]) {
                    index = i;
                    break;
                }
            }
        }
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        marker.setMap(null);
        this.markers_.splice(index, 1); // Remove the marker from the list of managed markers
        return true;
    };
    /**
     * Removes all clusters and markers from the map and also removes all markers
     *  managed by the clusterer.
     */
    MarkerClusterer.prototype.clearMarkers = function () {
        this.resetViewport_(true);
        this.markers_ = [];
    };
    /**
     * Recalculates and redraws all the marker clusters from scratch.
     *  Call this after changing any properties.
     */
    MarkerClusterer.prototype.repaint = function () {
        var oldClusters = this.clusters_.slice();
        this.clusters_ = [];
        this.resetViewport_(false);
        this.redraw_();
        // Remove the old clusters.
        // Do it in a timeout to prevent blinking effect.
        setTimeout(function () {
            for (var i = 0; i < oldClusters.length; i++) {
                oldClusters[i].remove();
            }
        }, 0);
    };
    /**
     * Returns the current bounds extended by the grid size.
     *
     * @param bounds The bounds to extend.
     * @return The extended bounds.
     * @ignore
     */
    MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
        var projection = this.getProjection();
        // Turn the bounds into latlng.
        var tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
        var bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
        // Convert the points to pixels and the extend out by the grid size.
        var trPix = projection.fromLatLngToDivPixel(tr);
        trPix.x += this.gridSize_;
        trPix.y -= this.gridSize_;
        var blPix = projection.fromLatLngToDivPixel(bl);
        blPix.x -= this.gridSize_;
        blPix.y += this.gridSize_;
        // Convert the pixel points back to LatLng
        var ne = projection.fromDivPixelToLatLng(trPix);
        var sw = projection.fromDivPixelToLatLng(blPix);
        // Extend the bounds to contain the new bounds.
        bounds.extend(ne);
        bounds.extend(sw);
        return bounds;
    };
    /**
     * Redraws all the clusters.
     */
    MarkerClusterer.prototype.redraw_ = function () {
        this.createClusters_(0);
    };
    /**
     * Removes all clusters from the map. The markers are also removed from the map
     *  if `hide` is set to `true`.
     *
     * @param hide Set to `true` to also remove the markers from the map.
     */
    MarkerClusterer.prototype.resetViewport_ = function (hide) {
        // Remove all the clusters
        for (var i = 0; i < this.clusters_.length; i++) {
            this.clusters_[i].remove();
        }
        this.clusters_ = [];
        // Reset the markers to not be added and to be removed from the map.
        for (var i = 0; i < this.markers_.length; i++) {
            var marker = this.markers_[i];
            marker.isAdded = false;
            if (hide) {
                marker.setMap(null);
            }
        }
    };
    /**
     * Calculates the distance between two latlng locations in km.
     *
     * @param p1 The first lat lng point.
     * @param p2 The second lat lng point.
     * @return The distance between the two points in km.
     * @link http://www.movable-type.co.uk/scripts/latlong.html
     */
    MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
        var R = 6371; // Radius of the Earth in km
        var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
        var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((p1.lat() * Math.PI) / 180) *
                Math.cos((p2.lat() * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };
    /**
     * Determines if a marker is contained in a bounds.
     *
     * @param marker The marker to check.
     * @param bounds The bounds to check against.
     * @return True if the marker is in the bounds.
     */
    MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
        return bounds.contains(marker.getPosition());
    };
    /**
     * Adds a marker to a cluster, or creates a new cluster.
     *
     * @param marker The marker to add.
     */
    MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
        var distance = 40000; // Some large number
        var clusterToAddTo = null;
        for (var i = 0; i < this.clusters_.length; i++) {
            var cluster = this.clusters_[i];
            var center = cluster.getCenter();
            if (center) {
                var d = this.distanceBetweenPoints_(center, marker.getPosition());
                if (d < distance) {
                    distance = d;
                    clusterToAddTo = cluster;
                }
            }
        }
        if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
            clusterToAddTo.addMarker(marker);
        }
        else {
            var cluster = new Cluster(this);
            cluster.addMarker(marker);
            this.clusters_.push(cluster);
        }
    };
    /**
     * Creates the clusters. This is done in batches to avoid timeout errors
     *  in some browsers when there is a huge number of markers.
     *
     * @param iFirst The index of the first marker in the batch of
     *  markers to be added to clusters.
     */
    MarkerClusterer.prototype.createClusters_ = function (iFirst) {
        var _this = this;
        if (!this.ready_) {
            return;
        }
        // Cancel previous batch processing if we're working on the first batch:
        if (iFirst === 0) {
            google.maps.event.trigger(this, "clusteringbegin", this);
            if (typeof this.timerRefStatic !== "undefined") {
                clearTimeout(this.timerRefStatic);
                delete this.timerRefStatic;
            }
        }
        // Get our current map view bounds.
        // Create a new bounds object so we don't affect the map.
        //
        // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
        var mapBounds = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast());
        var bounds = this.getExtendedBounds(mapBounds);
        var iLast = Math.min(iFirst + this.batchSize_, this.markers_.length);
        for (var i = iFirst; i < iLast; i++) {
            var marker = this.markers_[i];
            if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
                if (!this.ignoreHidden_ ||
                    (this.ignoreHidden_ && marker.getVisible())) {
                    this.addToClosestCluster_(marker);
                }
            }
        }
        if (iLast < this.markers_.length) {
            this.timerRefStatic = window.setTimeout(function () {
                _this.createClusters_(iLast);
            }, 0);
        }
        else {
            delete this.timerRefStatic;
            google.maps.event.trigger(this, "clusteringend", this);
            for (var i = 0; i < this.clusters_.length; i++) {
                this.clusters_[i].updateIcon();
            }
        }
    };
    /**
     * The default function for determining the label text and style
     * for a cluster icon.
     *
     * @param markers The array of markers represented by the cluster.
     * @param numStyles The number of marker styles available.
     * @return The information resource for the cluster.
     */
    MarkerClusterer.CALCULATOR = function (markers, numStyles) {
        var index = 0;
        var count = markers.length;
        var dv = count;
        while (dv !== 0) {
            dv = Math.floor(dv / 10);
            index++;
        }
        index = Math.min(index, numStyles);
        return {
            text: count.toString(),
            index: index,
            title: ""
        };
    };
    /**
     * Generates default styles augmented with user passed values.
     * Useful when you want to override some default values but keep untouched
     *
     * @param overrides override default values
     */
    MarkerClusterer.withDefaultStyle = function (overrides) {
        return __assign({ textColor: "black", textSize: 11, textDecoration: "none", textLineHeight: overrides.height, fontWeight: "bold", fontStyle: "normal", fontFamily: "Arial,sans-serif", backgroundPosition: "0 0" }, overrides);
    };
    /**
     * The number of markers to process in one batch.
     */
    MarkerClusterer.BATCH_SIZE = 2000;
    /**
     * The number of markers to process in one batch (IE only).
     */
    MarkerClusterer.BATCH_SIZE_IE = 500;
    /**
     * The default root name for the marker cluster images.
     */
    MarkerClusterer.IMAGE_PATH = "../images/m";
    /**
     * The default extension name for the marker cluster images.
     */
    MarkerClusterer.IMAGE_EXTENSION = "png";
    /**
     * The default array of sizes for the marker cluster images.
     */
    MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90];
    return MarkerClusterer;
}(OverlayViewSafe));

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf='show'>\n  <ion-toolbar>\n    <ion-title style=\"text-align:center\"><img src=\"assets/images/icons/logo.svg\" /></ion-title>\n    <div class=\"newsidetext\" (click)=\"help()\" slot=\"end\" >\n      <p>{{'help_menu' |  translate}}</p>\n    </div>\n    <ion-buttons slot=\"end\" class=\"newmenu\" (click)=\"menu()\">\n      <img src = \"assets/images/icons/menunew.svg\"/>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header *ngIg = 'hide'>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" (click)=\"hide1()\" >\n   <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\"/>\n   </ion-buttons>  \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header *ngIf='hide'>\n  <ion-toolbar (click)=\"hide1()\">\n  <ion-buttons slot=\"start\"  >\n   <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\"/>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"searchForm\">\n    <ion-searchbar mode=\"ios\" showCancelButton=\"never\" (ionChange)=\"getOriginal($event)\" (ionClear)=\"clearInput($event)\" id=\"autocomplete\" placeholder=\"{{'search_area' | translate}}\" debounce=\"500\" \n      formControlName=\"location\"   type=\"text\"></ion-searchbar>\n  </form>\n  <div class=\"newshare\" (click) = \"showFullMap()\">\n    <!-- <img src=\"assets/images/googleimg.png\"/> -->\n    <div #map id=\"map\" ></div>\n    \n    <div class=\"notdatain\" *ngIf = \"locations1  == '' && segmentModel === 'one'\">\n      <p >{{'incident_no_data' | translate}}</p>\n    </div>\n\n    <div class=\"notdatain\" *ngIf = \"locations1 == '' && segmentModel === 'two'\">\n      <p >{{'safety_tip_no_data' | translate}}</p>\n    </div>\n \n  </div>\n  <div class=\"newoverlap\" *ngIf='show' >\n    <!-- <div class=\"notdatainside\" *ngIf = \"segmentModel === 'one'\">\n      <p>To view incidents reported before 01 Dec 2020, <a href=\"https://public.tableau.com/profile/mehul.sharma3900#!/vizhome/Safecity_Dashboard_Delhi_final/MumbaiStory\" target=\"_blank\">click here</a></p>\n    </div> -->\n  <div class=\"toparrow\"  (click)=\"newmodalin()\">\n    <ion-icon name=\"chevron-up-outline\"></ion-icon>\n    </div>\n   <div class=\"segmentonein\">\n      <ion-segment mode=\"ios\" value=\"one\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"one\">\n          <ion-label>{{'incidents'| translate}}</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"two\">\n          <ion-label>{{'safety_tips' | translate }}</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\t     </div>\n\t  \n    <div *ngIf=\"segmentModel === 'one'\">\n      <ion-card class=\"newcardside\" (click)=\"preframing()\">\n        <ion-card-content>\n          <p>{{'incident_detail_msg'|translate}}</p>\n          <h5>{{'incident_button' | translate}}</h5>\n        </ion-card-content>\n      </ion-card>\n      <div class=\"newitemone\">\n        <h2>{{'incident_shared_community' | translate}}</h2>\n       \n      </div>\n    \n    \n      <ion-button class=\"newsafe\" shape=\"round\" expand=\"full\" (click)=\"preframing()\">{{'incident_button' | translate}}\n      </ion-button>\n    </div>\n\t\n\t <div *ngIf=\"segmentModel === 'two'\">\n\t \n      <ion-card class=\"newcardside\" (click)=\"safetytip()\">\n        <ion-card-content>\n          <p>{{'safety_detail_msg' | translate}}</p>\n          <h5>{{'safety_button' | translate}}</h5>\n        </ion-card-content>\n      </ion-card>\n      <div class=\"newitemone\">\n        <h2>{{'safety_shared_community' | translate}}</h2>\n        \n      \n\n      </div>\n    \n      <ion-button class=\"newsafein\" shape=\"round\" expand=\"full\" (click)=\"safetytip()\">{{'safety_button' | translate}}\n      </ion-button>\n    </div>\n \n  </div>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md ion-title {\n  text-align: left;\n}\n\n.header-ios ion-title {\n  text-align: left;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\n#autocomplete {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 99%;\n}\n\n#map {\n  width: 100%;\n  height: 100vh;\n  padding: 0 15px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 5px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 16px;\n  padding-right: 25px;\n}\n\n.segmentonein {\n  width: auto;\n  position: relative;\n  background: #fff;\n  z-index: 99;\n  padding: 8px 0 20px 0;\n  left: 0;\n  right: 0;\n}\n\n.newsidetext {\n  z-index: 9999;\n}\n\nion-title {\n  padding: 0px 20px;\n}\n\nion-title img {\n  width: 96px;\n  vertical-align: middle;\n}\n\n.newmenu {\n  padding-right: 12px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height:75px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 119px;\n}\n\n.newshare {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  padding: 0 0;\n  margin-top: 0;\n  position: fixed;\n}\n\nion-searchbar {\n  position: absolute;\n  --background: #fff;\n  --border-radius:23px;\n  margin-top: 25px;\n  z-index: 99;\n}\n\n.newshare h2 {\n  width: 100%;\n  height: auto;\n  text-align: left;\n  color: #592D8D;\n  padding-top: 0;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 25px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.incident {\n  --background: #F5DE5B;\n  border-radius: 4px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.incident ion-label {\n  margin-top: 22px;\n  margin-bottom: 22px;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.newview {\n  background-color: #fff !important;\n  box-sizing: border-box;\n  border: 1px solid #D9BE23;\n  padding: 18px 5px;\n  width: 100%;\n  font-size: 15px;\n  border-radius: 4px;\n  font-weight: 500;\n  margin-top: 20px;\n  text-transform: uppercase;\n}\n\n.incident ion-fab-button {\n  width: 30px;\n  height: 30px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --color: #F5DE5B;\n  --color-activated: #F5DE5B;\n  --color-focused: #F5DE5B;\n  --color-hover: #F5DE5B;\n}\n\n.incident ion-icon {\n  font-size: 22px;\n  --color: #F5DE5B;\n  font-weight: 500;\n  --color-activated: #F5DE5B;\n  --color-focused: #F5DE5B;\n  --color-hover: #F5DE5B;\n}\n\n.newsafty {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  padding: 0 25px;\n  margin-top: 25px;\n}\n\n.newsafty h2 {\n  width: 100%;\n  height: auto;\n  text-align: left;\n  color: #592D8D;\n  padding-top: 0;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 25px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.newsafty p {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  font-size: 16px;\n  line-height: 22px;\n  margin-top: 0;\n  text-align: left;\n}\n\n.newrow ion-fab-button {\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newshare p {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  font-size: 16px;\n  line-height: 22px;\n  margin-top: 0;\n  text-align: left;\n}\n\n.newrowsec {\n  width: 80%;\n  height: auto;\n  text-align: center;\n  margin: 25px auto 0;\n}\n\n.newrowsec h2 {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  color: #292020;\n  padding-top: 0;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  display: inline-block;\n}\n\n.newrowsec ion-fab-button {\n  margin: 0 auto;\n  --background:#F5D937;\n  text-align: center;\n}\n\n.newrowsec p {\n  width: 100%;\n  height: auto;\n  color: #989191;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 5px;\n  text-align: center;\n}\n\n.newbtngroup {\n  width: 100%;\n  height: auto;\n  margin-top: 0px;\n  margin-bottom: 50px;\n  padding: 0 25px;\n  display: inline-block;\n}\n\n:focus {\n  outline: -webkit-focus-ring-color auto 0;\n}\n\n.newreport {\n  color: #ffffff !important;\n  --border-radius: 4px;\n  font-size: 12px;\n  height: 43px;\n  -ion-color-contrast: var(--ion-color-light-contrast, #592D8D) !important;\n  font-family: \"Lato\";\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: inherit;\n  display: inline-block;\n  text-transform: uppercase;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow:none;\n}\n\n.notdatainside {\n  background: #f4f0f8;\n  color: #292020;\n  position: absolute;\n  top: -31%;\n  left: 5%;\n  right: 5%;\n}\n\n.notdatainside p {\n  padding: 11px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.sc-ion-buttons-ios-h img {\n  margin-left: 4px;\n}\n\n.notdatainside a {\n  font-size: 16px;\n  color: #592D8D;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.notdatain {\n  background: #f4f0f8;\n  color: #292020;\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  right: 10%;\n}\n\n.notdatain p {\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n.newoverlap {\n  width: 100%;\n  position: absolute;\n  background: #fff;\n  border-radius: 24px 24px 0 0;\n  bottom: 0;\n  padding: 0 15px;\n}\n\n.newoverlap .toparrow {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #C5C5C5;\n  font-size: 28px;\n  z-index: 999;\n  background: transparent;\n  padding: 0px 0 0 0;\n}\n\n.newoverlap .toparrow ion-icon {\n  margin-top: 5px;\n}\n\n.segment-button-checked {\n  --indicator-color: #592D8D;\n  color: #fff;\n  --border-radius: 4px;\n  background: #592D8D;\n}\n\nion-segment-button {\n  background: #EBE2F5;\n  min-height: 35px;\n  font-size: 16px;\n  --border-radius: 5px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newsafe {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 92%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  position: absolute;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n  bottom: 23%;\n  z-index: 999;\n  left: 0;\n  right: 0;\n}\n\n.newsafein {\n  color: #000 !important;\n  --border-radius: 4px;\n  font-size: 14px;\n  height: 40px;\n  --background: #F5DE5B;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 92%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  margin: 0 auto;\n  --box-shadow:0;\n  text-align: center;\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  bottom: 23%;\n}\n\n.newcardside {\n  width: 100%;\n  height: auto;\n  background: #F8F4FD;\n  --border-radius:4px;\n  box-shadow: none;\n  margin-top: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin-bottom: 3px;\n}\n\n.newcardside p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: #220E0E;\n  line-height: 18px;\n}\n\n.newcardside h5 {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 500;\n  color: #592D8D !important;\n  margin-top: 10px;\n  line-height: 18px;\n}\n\n.newitemone {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.newitemone h2 {\n  width: 100%;\n  height: auto;\n  color: #2F1153;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb3dubG9hZHMvaW9zIHNyYyAxMTA3MjIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsZ0JBQUE7QUNBQTs7QURHQTtFQUVBLGdCQUFBO0FDREE7O0FESUE7RUFFQSxTQUFBO0FDRkE7O0FEUUE7RUFBeUIsYUFBQTtFQUFjLFFBQUE7RUFBUyxTQUFBO0FDRmhEOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFFRCxhQUFBO0VBQ0MsZUFBQTtBQ0FKOztBREdBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDREE7O0FESUE7RUFFQSx5REFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkE7O0FES0E7RUFJQSw4Q0FBQTtBQ0hBOztBRE9BO0VBRUEsdUJBQUE7QUNMQTs7QURRQTtFQUVBLHFCQUFBO0FDTkE7O0FEU0E7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUEE7O0FEVUE7RUFFQSxXQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDUko7O0FEWUE7RUFFQSxhQUFBO0FDVkE7O0FEYUE7RUFFQSxpQkFBQTtBQ1hBOztBRGdCQTtFQUVBLFdBQUE7RUFDQSxzQkFBQTtBQ2RBOztBRGlCQTtFQUVBLG1CQUFBO0FDZkE7O0FEa0JBO0VBRUEsa0JBQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2hCSjs7QURrQkM7RUFFRCxrQkFBQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJKOztBRGtCQztFQUVELFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDaEJBOztBRG1CQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNqQkE7O0FEb0JBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDbEJBOztBRHNCQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ3JCQTs7QUR1QkE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNyQkE7O0FEd0JBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ3RCQTs7QUR5QkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDdEJGOztBRHlCQTtFQUVBLGlDQUFBO0VBQ0ksc0JBQUE7RUFDSix5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ3ZCQTs7QUR5QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0gsZ0JBQUE7RUFDRCwwQkFBQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7QUN2Qko7O0FEMkJBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7QUN6Qko7O0FENkJBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzNCQTs7QUQ4QkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQyxtQkFBQTtFQUNELGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQzVCQTs7QUQ4QkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUMzQkE7O0FEK0JBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0FDN0JBOztBRGlDQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQzlCQTs7QURpQ0E7RUFFQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUMvQkE7O0FEa0NBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0MsbUJBQUE7RUFDRCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ2hDQTs7QURrQ0E7RUFFQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ2hDQTs7QURvQ0E7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNqQ0E7O0FEb0NBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNsQ0E7O0FEb0NBO0VBQ0ksd0NBQUE7QUNqQ0o7O0FEb0NBO0VBRUEseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0VBQUE7RUFDQyxtQkFBQTtFQUNELHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osV0FBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2xDQTs7QURzQ0E7RUFHQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ3JDQTs7QUR1Q0E7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0gsYUFBQTtBQ3JDRDs7QUR3Q0M7RUFDQSxnQkFBQTtBQ3JDRDs7QUR3Q0M7RUFDRCxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNyQ0E7O0FEd0NBO0VBR0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN2Q0E7O0FEeUNBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3ZDSjs7QUR5Q0E7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUN2Q0E7O0FEMENBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ3hDQTs7QUQyQ0E7RUFFQSxlQUFBO0FDekNBOztBRDRDQTtFQUVBLDBCQUFBO0VBQ0ksV0FBQTtFQUNKLG9CQUFBO0VBQ0MsbUJBQUE7QUMxQ0Q7O0FEOENBO0VBRUEsbUJBQUE7RUFDSSxnQkFBQTtFQUNILGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDNUNEOztBRCtDQTtFQUVBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0osVUFBQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDRCx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUM3Q0E7O0FEZ0RBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDSixVQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNELHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQzlDQTs7QURpREE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDSSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNILGtCQUFBO0FDL0NEOztBRGtEQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDL0NBOztBRGtEQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDL0NBOztBRGtEQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2hEQTs7QURtREE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pEQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZVxyXG57XHJcbnRleHQtYWxpZ246bGVmdDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRpdGxlXHJcbntcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc1xyXG57XHJcbmJvcmRlcjowO1xyXG5cclxufVxyXG4vLyAuc2VhcmNoYmFyLWNsZWFyLWljb24ge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4uc2VhcmNoYmFyLXNlYXJjaC1pY29uIHsgZGlzcGxheTpub25lOyB3aWR0aDowOyBoZWlnaHQ6MDsgfVxyXG4jYXV0b2NvbXBsZXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICB9XHJcbiNtYXB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgXHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOjAgMTVweDtcclxuICAgIH1cclxuXHJcbi5tYWluYXJlYWluXHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbm1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4uYmFja2J1dHRvblxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29ucy9sZWZ0YXJyb3cuc3ZnKTtcclxud2lkdGg6MjVweDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuaGVpZ2h0OjI1cHg7XHJcbm1hcmdpbi1sZWZ0OjRweDtcclxufVxyXG5cclxuaW9uLWhlYWRlclxyXG57XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG5ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcbiAgXHJcblxyXG4uaGVhZGVyLW1kOjphZnRlclxyXG57XHJcbmJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZVxyXG57XHJcbi0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcclxufVxyXG5cclxuLm5ld3NpZGV0ZXh0IHBcclxue1xyXG5jb2xvcjojRDkwRDBEO1xyXG5mb250LXNpemU6MTZweDtcclxucGFkZGluZy1yaWdodDoyNXB4O1xyXG59XHJcblxyXG4uc2VnbWVudG9uZWluXHJcbntcclxud2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwYWRkaW5nOiA4cHggMCAyMHB4IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblx0XHJcbn1cclxuXHJcbi5uZXdzaWRldGV4dFxyXG57XHJcbnotaW5kZXg6OTk5OTtcclxufVxyXG5cclxuaW9uLXRpdGxlXHJcbntcclxucGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLXRpdGxlIGltZ1xyXG57XHJcbndpZHRoOjk2cHg7XHJcbnZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxufVxyXG5cclxuLm5ld21lbnVcclxue1xyXG5wYWRkaW5nLXJpZ2h0OjEycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyXHJcbntcclxuLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6NzVweDt9XHJcblx0XHJcblx0LmhlYWRlci1tZCBpb24tdG9vbGJhclxyXG57XHJcbi0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0Ojc1cHg7fVxyXG5cdFxyXG5cdC5tYWluYXJlYVxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuYm90dG9tOjExOXB4O1xyXG59XHJcblxyXG4ubmV3c2hhcmVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnBhZGRpbmc6MCAwO1xyXG5tYXJnaW4tdG9wOjA7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyXHJcbntcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbi0tYmFja2dyb3VuZDogI2ZmZjtcclxuLS1ib3JkZXItcmFkaXVzOjIzcHg7XHJcbm1hcmdpbi10b3A6MjVweDtcclxuei1pbmRleDo5OTtcclxufVxyXG5cclxuXHJcbi5uZXdzaGFyZSBoMlxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbnBhZGRpbmctdG9wOjA7XHJcblxyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyNXB4O1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHRcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7fVxyXG5cclxuLmluY2lkZW50XHJcbntcclxuLS1iYWNrZ3JvdW5kOiAjRjVERTVCO1xyXG5ib3JkZXItcmFkaXVzOjRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbnRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcblxyXG4uaW5jaWRlbnQgaW9uLWxhYmVsXHJcbntcclxubWFyZ2luLXRvcDoyMnB4O1xyXG5tYXJnaW4tYm90dG9tOjIycHg7XHJcbn1cclxuXHJcbi5yaXBwbGUtcGFyZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5ld3ZpZXdcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNEOUJFMjM7XHJcbnBhZGRpbmc6MThweCA1cHg7XHJcbndpZHRoOjEwMCU7XHJcbmZvbnQtc2l6ZToxNXB4O1xyXG5ib3JkZXItcmFkaXVzOjRweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbnRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxufVxyXG4uaW5jaWRlbnQgaW9uLWZhYi1idXR0b25cclxue1xyXG53aWR0aDozMHB4O1xyXG5oZWlnaHQ6MzBweDtcclxuLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xyXG5cdC0tY29sb3I6ICNGNURFNUI7XHJcbi0tY29sb3ItYWN0aXZhdGVkOiAjRjVERTVCO1xyXG4gICAgLS1jb2xvci1mb2N1c2VkOiAjRjVERTVCO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogI0Y1REU1QjtcclxuXHJcbn1cclxuXHJcbi5pbmNpZGVudCAgaW9uLWljb25cclxue1xyXG5mb250LXNpemU6MjJweDtcclxuLS1jb2xvcjogI0Y1REU1QjtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG4tLWNvbG9yLWFjdGl2YXRlZDogI0Y1REU1QjtcclxuICAgIC0tY29sb3ItZm9jdXNlZDogI0Y1REU1QjtcclxuICAgIC0tY29sb3ItaG92ZXI6ICNGNURFNUI7XHJcbn1cclxuXHJcblxyXG4ubmV3c2FmdHlcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbnBhZGRpbmc6MCAyNXB4O1xyXG5tYXJnaW4tdG9wOjI1cHg7XHJcbn1cclxuXHJcbi5uZXdzYWZ0eSBoMlxyXG57XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbmNvbG9yOiM1OTJEOEQ7XHJcbnBhZGRpbmctdG9wOjA7XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1xyXG5saW5lLWhlaWdodDoyNXB4O1xyXG5tYXJnaW4tYm90dG9tOjEwcHg7XHRcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7fVxyXG5cclxuLm5ld3NhZnR5IHB7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5jb2xvcjojMjIwRTBFO1xyXG5mb250LXNpemU6MTZweDtcclxubGluZS1oZWlnaHQ6MjJweDtcclxubWFyZ2luLXRvcDowO1xyXG50ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuXHJcblxyXG4ubmV3cm93IGlvbi1mYWItYnV0dG9uXHJcbntcclxubWFyZ2luOjAgYXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubmV3c2hhcmUgcHtcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbmNvbG9yOiMyMjBFMEU7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5saW5lLWhlaWdodDoyMnB4O1xyXG5tYXJnaW4tdG9wOjA7XHJcbnRleHQtYWxpZ246bGVmdDtcclxufVxyXG5cclxuLm5ld3Jvd3NlY1xyXG57XHJcbndpZHRoOjgwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW46MjVweCBhdXRvIDA7XHJcbn1cclxuXHJcbi5uZXdyb3dzZWMgaDJcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmNvbG9yOiMyOTIwMjA7XHJcbnBhZGRpbmctdG9wOjA7XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG5mb250LXdlaWdodDo1MDA7XHJcbmZvbnQtc2l6ZToxOHB4O1x0XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO31cclxuXHJcbi5uZXdyb3dzZWMgaW9uLWZhYi1idXR0b25cclxue1xyXG5tYXJnaW46MCBhdXRvO1xyXG4tLWJhY2tncm91bmQ6I0Y1RDkzNztcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubmV3cm93c2VjIHB7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5jb2xvcjojOTg5MTkxO1xyXG5mb250LXNpemU6MTRweDtcclxubGluZS1oZWlnaHQ6MThweDtcclxubWFyZ2luLXRvcDo1cHg7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubmV3YnRuZ3JvdXBcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxubWFyZ2luLXRvcDowcHg7XHJcbm1hcmdpbi1ib3R0b206NTBweDtcclxucGFkZGluZzowIDI1cHg7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAwO1xyXG59XHJcblxyXG4ubmV3cmVwb3J0XHJcbntcclxuY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjEycHg7XHJcbmhlaWdodDo0M3B4O1xyXG4taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICM1OTJEOEQpICFpbXBvcnRhbnQ7XHJcbiBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6MTAwJTtcclxuIGZvbnQtd2VpZ2h0OjUwMDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxudGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG50ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG4tLWJveC1zaGFkb3c6bm9uZTtcclxuXHJcbn1cclxuXHJcbi5ub3RkYXRhaW5zaWRlXHJcbntcclxuXHJcbmJhY2tncm91bmQ6cmdiYSgyNDQsIDI0MCwgMjQ4LCAxKTtcclxuY29sb3I6cmdiYSg0MSwgMzIsIDMyLCAxKTtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDotMzElO1xyXG5sZWZ0OjUlO1xyXG5yaWdodDo1JTtcclxufVxyXG4ubm90ZGF0YWluc2lkZSBwe1xyXG5cclxuICAgIHBhZGRpbmc6MTFweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcblx0bWFyZ2luLXRvcDowO1xyXG4gICAgfVxyXG5cdFxyXG5cdC5zYy1pb24tYnV0dG9ucy1pb3MtaCBpbWd7XHJcblx0bWFyZ2luLWxlZnQ6NHB4O1xyXG5cdH1cclxuXHRcclxuXHQubm90ZGF0YWluc2lkZSBhe1xyXG5mb250LXNpemU6MTZweDtcclxuY29sb3I6IzU5MkQ4RDtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5cclxuLm5vdGRhdGFpblxyXG57XHJcblxyXG5iYWNrZ3JvdW5kOnJnYmEoMjQ0LCAyNDAsIDI0OCwgMSk7XHJcbmNvbG9yOnJnYmEoNDEsIDMyLCAzMiwgMSk7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MjAlO1xyXG5sZWZ0OjEwJTtcclxucmlnaHQ6MTAlO1xyXG59XHJcbi5ub3RkYXRhaW4gcHtcclxuXHJcbiAgICBwYWRkaW5nOjE0cHggMThweDtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgfVxyXG4ubmV3b3ZlcmxhcFxyXG57XHJcbndpZHRoOjEwMCU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5iYWNrZ3JvdW5kOiNmZmY7XHJcbmJvcmRlci1yYWRpdXM6MjRweCAyNHB4IDAgMDtcclxuYm90dG9tOjA7XHJcbnBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLm5ld292ZXJsYXAgLnRvcGFycm93XHJcbntcclxud2lkdGg6MTAwJTtcclxuaGVpZ2h0OmF1dG87XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW46MHB4IGF1dG8gMDtcclxuY29sb3I6I0M1QzVDNTtcclxuZm9udC1zaXplOjI4cHg7XHJcbnotaW5kZXg6OTk5O1xyXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5wYWRkaW5nOjBweCAwIDAgMDtcclxufVxyXG5cclxuLm5ld292ZXJsYXAgLnRvcGFycm93IGlvbi1pY29uXHJcbntcclxubWFyZ2luLXRvcDo1cHg7XHJcbn1cclxuXHJcbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkXHJcbntcclxuLS1pbmRpY2F0b3ItY29sb3I6ICM1OTJEOEQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiBiYWNrZ3JvdW5kOiM1OTJEOEQ7ICBcclxuXHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvblxyXG57XHJcbmJhY2tncm91bmQ6I0VCRTJGNTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0LS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Zm9udC13ZWlnaHQ6NDAwO1xyXG5cdG1hcmdpbi10b3A6MDtcclxuXHRtYXJnaW4tYm90dG9tOjA7XHJcbn1cclxuXHJcbi5uZXdzYWZlXHJcbntcclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE2cHg7XHJcbmhlaWdodDo0MHB4O1xyXG4tLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6OTIlO1xyXG4gZm9udC13ZWlnaHQ6NDAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbm1hcmdpbjowIGF1dG87XHJcbi0tYm94LXNoYWRvdzowO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxuYm90dG9tOjIzJTtcclxuei1pbmRleDo5OTk7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3c2FmZWluXHJcbntcclxuY29sb3I6IzAwMCAhaW1wb3J0YW50O1xyXG4tLWJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1zaXplOjE0cHg7XHJcbmhlaWdodDo0MHB4O1xyXG4tLWJhY2tncm91bmQ6ICNGNURFNUI7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI0Y1REU1QjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxud2lkdGg6OTIlO1xyXG4gZm9udC13ZWlnaHQ6NDAwO1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxubWFyZ2luOjAgYXV0bztcclxuLS1ib3gtc2hhZG93OjA7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuei1pbmRleDo5OTk7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206MjMlO1xyXG59XHJcblxyXG4ubmV3Y2FyZHNpZGVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuYmFja2dyb3VuZDojRjhGNEZEO1xyXG4tLWJvcmRlci1yYWRpdXM6NHB4O1xyXG5ib3gtc2hhZG93Om5vbmU7XHJcbm1hcmdpbi10b3A6MDtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxuXHRtYXJnaW4tYm90dG9tOjNweDtcclxufVxyXG5cclxuLm5ld2NhcmRzaWRlIHB7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTRweDtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5jb2xvcjojMjIwRTBFO1xyXG5saW5lLWhlaWdodDoxOHB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZHNpZGUgaDV7XHJcbndpZHRoOjEwMCU7XHJcbmhlaWdodDphdXRvO1xyXG5mb250LXNpemU6MTRweDtcclxuZm9udC13ZWlnaHQ6NTAwO1xyXG5jb2xvcjojNTkyRDhEICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi10b3A6MTBweDtcclxubGluZS1oZWlnaHQ6MThweDtcclxufVxyXG5cclxuLm5ld2l0ZW1vbmVcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLm5ld2l0ZW1vbmUgaDJcclxue1xyXG53aWR0aDoxMDAlO1xyXG5oZWlnaHQ6YXV0bztcclxuY29sb3I6IzJGMTE1MztcclxuZm9udC1zaXplOjIwcHg7XHJcbmZvbnQtd2VpZ2h0OjUwMDtcclxubWFyZ2luLWJvdHRvbToyNXB4O1xyXG59XHJcbiIsIi5oZWFkZXItbWQgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IDA7XG59XG5cbi5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4jYXV0b2NvbXBsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogOTklO1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm1haW5hcmVhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMDtcbn1cblxuLm5ld3NpZGV0ZXh0IHAge1xuICBjb2xvcjogI0Q5MEQwRDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uc2VnbWVudG9uZWluIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk7XG4gIHBhZGRpbmc6IDhweCAwIDIwcHggMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5uZXdzaWRldGV4dCB7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG5pb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDk2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uZXdtZW51IHtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0Ojc1cHg7XG59XG5cbi5tYWluYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMTlweDtcbn1cblxuLm5ld3NoYXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6MjNweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5uZXdzaGFyZSBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5jaWRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5jaWRlbnQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uZXd2aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlCRTIzO1xuICBwYWRkaW5nOiAxOHB4IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaW5jaWRlbnQgaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICNGNURFNUI7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjRjVERTVCO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNGNURFNUI7XG4gIC0tY29sb3ItaG92ZXI6ICNGNURFNUI7XG59XG5cbi5pbmNpZGVudCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLS1jb2xvcjogI0Y1REU1QjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGNURFNUI7XG4gIC0tY29sb3ItZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1jb2xvci1ob3ZlcjogI0Y1REU1Qjtcbn1cblxuLm5ld3NhZnR5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5uZXdzYWZ0eSBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uZXdzYWZ0eSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uZXdyb3cgaW9uLWZhYi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3c2hhcmUgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMjIwRTBFO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmV3cm93c2VjIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XG59XG5cbi5uZXdyb3dzZWMgaDIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjkyMDIwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5ld3Jvd3NlYyBpb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJhY2tncm91bmQ6I0Y1RDkzNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3cm93c2VjIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzk4OTE5MTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdidG5ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDA7XG59XG5cbi5uZXdyZXBvcnQge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIC1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzU5MkQ4RCkgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLm5vdGRhdGFpbnNpZGUge1xuICBiYWNrZ3JvdW5kOiAjZjRmMGY4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zMSU7XG4gIGxlZnQ6IDUlO1xuICByaWdodDogNSU7XG59XG5cbi5ub3RkYXRhaW5zaWRlIHAge1xuICBwYWRkaW5nOiAxMXB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnNjLWlvbi1idXR0b25zLWlvcy1oIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5ub3RkYXRhaW5zaWRlIGEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTkyRDhEO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ub3RkYXRhaW4ge1xuICBiYWNrZ3JvdW5kOiAjZjRmMGY4O1xuICBjb2xvcjogIzI5MjAyMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMTAlO1xufVxuXG4ubm90ZGF0YWluIHAge1xuICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5ld292ZXJsYXAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMCAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm5ld292ZXJsYXAgLnRvcGFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvIDA7XG4gIGNvbG9yOiAjQzVDNUM1O1xuICBmb250LXNpemU6IDI4cHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweCAwIDAgMDtcbn1cblxuLm5ld292ZXJsYXAgLnRvcGFycm93IGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiAjNTkyRDhEO1xuICBjb2xvcjogI2ZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICM1OTJEOEQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNFQkUyRjU7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uZXdzYWZlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA5MiU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJveC1zaGFkb3c6MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IDIzJTtcbiAgei1pbmRleDogOTk5O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5ld3NhZmVpbiB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogOTIlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYm94LXNoYWRvdzowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAyMyU7XG59XG5cbi5uZXdjYXJkc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNGOEY0RkQ7XG4gIC0tYm9yZGVyLXJhZGl1czo0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5uZXdjYXJkc2lkZSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzIyMEUwRTtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdjYXJkc2lkZSBoNSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdpdGVtb25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uZXdpdGVtb25lIGgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyRjExNTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @googlemaps/markerclustererplus */ "./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);





// import { ViewController } from '@ionic-angular';








let HomePage = class HomePage {
    constructor(zone, route, toastctrl, shareddata, routerOutlet, formBuilder, httpClient, navController, router, platform, keyboard, translate, modalController) {
        // angularComponent = { GoDetail: this.GoDetail, zone: zone }
        // this.platform.backButton.subscribeWithPriority(-1, () => {
        //   if (!this.routerOutlet.canGoBack()) {
        //     App.exitApp();
        //   }
        // });
        this.zone = zone;
        this.route = route;
        this.toastctrl = toastctrl;
        this.shareddata = shareddata;
        this.routerOutlet = routerOutlet;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.platform = platform;
        this.keyboard = keyboard;
        this.translate = translate;
        this.modalController = modalController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/safecity_report/';
        this.apiUrl1 = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.segmentModel = "one";
        this.infoWindows = [];
        this.autoaddress = [];
        this.autoadd1 = [];
        this.radius = 3000;
        this.pagename = 'Incit_safety_fr_Home';
        this.incident_remove_marker = [];
        this.safety_remove_marker = [];
        this.hide = false;
        this.show = true;
        this.incidentMarker = 'assets/images/icons/Incident_Icon.svg';
        this.safetyMarker = 'assets/images/icons/Safety_Tip_Icon.svg';
        this.incident = 'incident';
        this.safety = 'safety';
        this.markerClustererList = [];
        this.default_reported_incident_data = [];
        this.latLongData = [];
        this.icident_markersList = [];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.isFilterempty = false;
        this.clearfilter = false;
        this.all_array = [];
        this.address = localStorage.getItem('City_name');
        this.langId = localStorage.getItem('Lang_id');
        this.clientId = localStorage.getItem('Client_id');
        this.searchForm = formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])]
        });
        var bttn = document.getElementById("Show");
        // bttn.onclick = function(){
        // greetings({firstName: myUser1[0], lastName: myUser1[1]});
        // }
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                navigator['app'].exitApp();
            }
            else {
                var btn_msg = '';
                this.translate.get('press_back_again_to_exit').subscribe((res) => {
                    btn_msg = res;
                });
                // var msg = "Press back again to exit."
                this.presentToast(btn_msg);
                this.lastTimeBackPress = new Date().getTime();
            }
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastctrl.create({
                message: msg,
                cssClass: 'tostclass',
                duration: 2000
            });
            toast.present();
        });
    }
    // public viewCtrl: ViewController
    ngOnInit() {
        // this.initAutocomplete()
        // this.presentModal()
    }
    segmentChanged(event) {
        if (this.segmentModel == 'one') {
            for (let marker of this.safety_remove_marker) {
                marker.setMap(null);
            }
            this.showMap();
            // this.getReportedIncident()
        }
        else {
            for (let marker of this.incident_remove_marker) {
                marker.setMap(null);
            }
            this.showMap();
        }
    }
    ionViewWillEnter() {
        console.log("Enter called ");
        this.route.queryParams.subscribe(params => {
            this.pagename1 = params['pagename'];
            this.safetyFrom = params['safetyFrom'];
            console.log("pagename1******", this.pagename1);
        });
        this.initAutocomplete();
        this.address = localStorage.getItem('City_name');
        var country_name = localStorage.getItem('countryName');
        var value = this.address + ' ' + country_name;
        this.getlatlong(value);
        // this.showMap()
        /// keyboard events try
        this.keyboard.onKeyboardWillShow().subscribe((res) => {
            this.showFullMap();
        });
        this.keyboard.onKeyboardHide().subscribe((res) => {
            this.hide1();
        });
    }
    //*****************Filter incident Report by search***************
    getReportedIncident(mapData) {
        var mapbound = mapData.map_bound;
        var map_zoom = mapData.map_zoom;
        mapbound = JSON.stringify(mapbound);
        // mapbound = mapbound.map(user => );
        if (this.pagename1 == 'modelpage') {
            console.log("pagename from home", this.pagename1);
            var filter_data = this.shareddata.getCatArray();
            console.log("filter len", filter_data);
            if (filter_data.length > 0) {
                this.address = localStorage.getItem('City_name');
                let data = new FormData();
                data.append('lang_id', this.langId);
                data.append('client_id', this.clientId);
                //  data.append('city', this.address);
                data.append('map_bound', mapbound);
                data.append('map_zoom', map_zoom);
                this.all_array = this.shareddata.getCatArray();
                if (this.all_array.length > 0) {
                    for (let i = 0; i < this.all_array.length; i++) {
                        var timeOfArray = this.all_array[0];
                        var incidentFrom = this.all_array[1];
                        var catIdFrom = this.all_array[3];
                    }
                    if (this.catId == undefined) {
                        this.catId = '';
                    }
                    this.incidentFrom = incidentFrom;
                    console.log("****", this.all_array.length);
                    var all_array_status = this.all_array.length;
                    if (all_array_status > 0) {
                        this.catId = catIdFrom.join(',');
                        this.timeOfString = timeOfArray.join(',');
                    }
                    data.append('reported_on', this.incidentFrom);
                    data.append('categories_ids', this.catId);
                    data.append('reported_time', this.timeOfString);
                }
                // this.shareddata.presentLoadingDefault()
                this.shareddata.sharedPostRequest('reported-incidents/map-coordinates', data).subscribe((rdata) => {
                    //this.shareddata.setData(rdata)
                    this.incidentList = rdata.data;
                    this.latLongData = [];
                    for (let i = 0; i < this.incidentList.length; i++) {
                        //this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                        this.latLongData.push({ "id": this.incidentList[i].id, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude) });
                    }
                    const path = 'assets/images/icons/incidents_mobile_cluster_icon';
                    this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident);
                }, error => {
                    // this.shareddata.loaderDismiss()
                }, () => {
                    // this.shareddata.loaderDismiss()
                });
                // this.incidentData = this.shareddata.getData()
                // if (this.incidentData) {
                // this.incidentList = this.incidentData
                // this.latLongData = []
                // for (let i = 0; i < this.incidentList.length; i++) {
                //   this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                //   // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                // }
                // const path = 'assets/images/icons/incidents_mobile_cluster_icon'
                // this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident)
                // }
            }
            else {
                this.address = localStorage.getItem('City_name');
                let data = new FormData();
                data.append('lang_id', this.langId);
                data.append('client_id', this.clientId);
                //  data.append('city', this.address);
                data.append('map_bound', mapbound);
                data.append('map_zoom', map_zoom);
                this.all_array = this.shareddata.getCatArray();
                if (this.all_array.length > 0) {
                    for (let i = 0; i < this.all_array.length; i++) {
                        var timeOfArray = this.all_array[0];
                        var incidentFrom = this.all_array[1];
                        var catIdFrom = this.all_array[3];
                    }
                    if (this.catId == undefined) {
                        this.catId = '';
                    }
                    this.incidentFrom = incidentFrom;
                    console.log("****", this.all_array.length);
                    var all_array_status = this.all_array.length;
                    if (all_array_status > 0) {
                        this.catId = catIdFrom.join(',');
                        this.timeOfString = timeOfArray.join(',');
                    }
                    data.append('reported_on', this.incidentFrom);
                    data.append('categories_ids', this.catId);
                    data.append('reported_time', this.timeOfString);
                }
                // this.shareddata.presentLoadingDefault()
                this.shareddata.sharedPostRequest('reported-incidents/map-coordinates', data).subscribe((rdata) => {
                    //this.shareddata.setData(rdata)
                    this.incidentList = rdata.data;
                    this.latLongData = [];
                    for (let i = 0; i < this.incidentList.length; i++) {
                        //this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                        this.latLongData.push({ "id": this.incidentList[i].id, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude) });
                    }
                    const path = 'assets/images/icons/incidents_mobile_cluster_icon';
                    this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident);
                }, error => {
                    // this.shareddata.loaderDismiss()
                }, () => {
                    // this.shareddata.loaderDismiss()
                });
            }
        }
        else {
            this.address = localStorage.getItem('City_name');
            let data = new FormData();
            data.append('lang_id', this.langId);
            data.append('client_id', this.clientId);
            //  data.append('city', this.address);
            data.append('map_bound', mapbound);
            data.append('map_zoom', map_zoom);
            this.all_array = this.shareddata.getCatArray();
            if (this.all_array.length > 0) {
                for (let i = 0; i < this.all_array.length; i++) {
                    var timeOfArray = this.all_array[0];
                    var incidentFrom = this.all_array[1];
                    var catIdFrom = this.all_array[3];
                }
                if (this.catId == undefined) {
                    this.catId = '';
                }
                this.incidentFrom = incidentFrom;
                console.log("****", this.all_array.length);
                var all_array_status = this.all_array.length;
                if (all_array_status > 0) {
                    this.catId = catIdFrom.join(',');
                    this.timeOfString = timeOfArray.join(',');
                }
                data.append('reported_on', this.incidentFrom);
                data.append('categories_ids', this.catId);
                data.append('reported_time', this.timeOfString);
            }
            // this.shareddata.presentLoadingDefault()
            this.shareddata.sharedPostRequest('reported-incidents/map-coordinates', data).subscribe((rdata) => {
                //  this.shareddata.setData(rdata)
                this.incidentList = rdata.data;
                this.latLongData = [];
                for (let i = 0; i < this.incidentList.length; i++) {
                    //this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                    this.latLongData.push({ "id": this.incidentList[i].id, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude) });
                }
                const path = 'assets/images/icons/incidents_mobile_cluster_icon';
                this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident);
            }, error => {
                // this.shareddata.loaderDismiss()
            }, () => {
                // this.shareddata.loaderDismiss()
            });
            // this.httpClient.post(this.apiUrl1 + 'reported-incidents', data)
            //   .subscribe((rdata: any) => {
            //     console.log("incidents", rdata);
            //     this.shareddata.setData(rdata)
            //     this.incidentList = rdata.data
            //     this.latLongData = []
            //     for (let i = 0; i < this.incidentList.length; i++) {
            //       this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
            //       // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
            //     }
            //     console.log("formed array", this.latLongData)
            //     const path = 'assets/images/icons/incidents_mobile_cluster_icon'
            //     this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident)
            //   }, error => {
            //   });
        }
    }
    //*****************get saftey tips***************
    getSafetyTipsList(mapData) {
        var mapbound = mapData.map_bound;
        mapbound = JSON.stringify(mapbound);
        var map_zoom = mapData.map_zoom;
        console.log(mapData);
        if (this.pagename1 == 'modelpage') {
            console.log("safetyFrom", this.safetyFrom);
            this.safetyFrom = this.shareddata.getsafetyfiltersdata();
            console.log(this.safetyFrom);
            if (this.safetyFrom != undefined) {
                this.safetyTipData = this.shareddata.getSafetyTipData();
                console.log(" safety list from shared", this.safetyTipData);
                this.address = localStorage.getItem('City_name');
                console.log("clientid", this.clientId);
                console.log("langId", this.langId);
                let data = new FormData();
                data.append('lang_id', this.langId);
                data.append('client_id', this.clientId);
                // data.append('city', this.address);
                data.append('map_bound', mapbound);
                data.append('map_zoom', map_zoom);
                if (this.shareddata.getsafetyfiltersdata()) {
                    data.append('reported_on', this.shareddata.getsafetyfiltersdata());
                }
                //this.shareddata.presentLoadingDefault()
                this.shareddata.sharedPostRequest('safety-tip/map-coordinates', data).subscribe((rdata) => {
                    this.saftyTipsList = rdata;
                    console.log('safetyTips', this.saftyTipsList);
                    this.safetyTipList = rdata;
                    this.shareddata.setSafetyTipData(this.safetyTipList);
                    this.SafetyMarkers = rdata.data;
                    console.log(this.SafetyMarkers);
                    this.latLongData = [];
                    for (let i = 0; i < this.SafetyMarkers.length; i++) {
                        //var time = this.SafetyMarkers[i].added_date.substr(11, 19)
                        //console.log("time*****", time)
                        // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                        //this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
                        this.latLongData.push({ "id": this.SafetyMarkers[i].id, "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude) });
                    }
                    const path = 'assets/images/icons/safety_tip_mobile_cluster_icon';
                    this.addClusterIncidentMarkersToMap(this.latLongData, this.safetyMarker, path, this.safety);
                }, error => {
                    // this.shareddata.loaderDismiss()
                }, () => {
                    // this.shareddata.loaderDismiss()
                });
            }
            else {
                this.address = localStorage.getItem('City_name');
                console.log("clientid", this.clientId);
                console.log("langId", this.langId);
                let data = new FormData();
                data.append('lang_id', this.langId);
                data.append('client_id', this.clientId);
                // data.append('city', this.address);
                data.append('map_bound', mapbound);
                data.append('map_zoom', map_zoom);
                if (this.shareddata.getsafetyfiltersdata()) {
                    data.append('reported_on', this.shareddata.getsafetyfiltersdata());
                }
                //this.shareddata.presentLoadingDefault()
                this.shareddata.sharedPostRequest('safety-tip/map-coordinates', data).subscribe((rdata) => {
                    this.saftyTipsList = rdata;
                    console.log('safetyTips', this.saftyTipsList);
                    this.safetyTipList = rdata;
                    this.shareddata.setSafetyTipData(this.safetyTipList);
                    this.SafetyMarkers = rdata.data;
                    console.log(this.SafetyMarkers);
                    this.latLongData = [];
                    for (let i = 0; i < this.SafetyMarkers.length; i++) {
                        //var time = this.SafetyMarkers[i].added_date.substr(11, 19)
                        //console.log("time*****", time)
                        // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                        //this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
                        this.latLongData.push({ "id": this.SafetyMarkers[i].id, "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude) });
                    }
                    const path = 'assets/images/icons/safety_tip_mobile_cluster_icon';
                    this.addClusterIncidentMarkersToMap(this.latLongData, this.safetyMarker, path, this.safety);
                }, error => {
                    // this.shareddata.loaderDismiss()
                }, () => {
                    // this.shareddata.loaderDismiss()
                });
            }
        }
        else {
            this.address = localStorage.getItem('City_name');
            console.log("clientid", this.clientId);
            console.log("langId", this.langId);
            let data = new FormData();
            data.append('lang_id', this.langId);
            data.append('client_id', this.clientId);
            // data.append('city', this.address);
            data.append('map_bound', mapbound);
            data.append('map_zoom', map_zoom);
            if (this.shareddata.getsafetyfiltersdata()) {
                data.append('reported_on', this.shareddata.getsafetyfiltersdata());
            }
            // this.shareddata.presentLoadingDefault()
            this.shareddata.sharedPostRequest('safety-tip/map-coordinates', data).subscribe((rdata) => {
                this.saftyTipsList = rdata;
                console.log('safetyTips', this.saftyTipsList);
                this.safetyTipList = rdata;
                this.shareddata.setSafetyTipData(this.safetyTipList);
                this.SafetyMarkers = rdata.data;
                console.log(this.SafetyMarkers);
                this.latLongData = [];
                for (let i = 0; i < this.SafetyMarkers.length; i++) {
                    //var time = this.SafetyMarkers[i].added_date.substr(11, 19)
                    //console.log("time*****", time)
                    // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                    //this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
                    this.latLongData.push({ "id": this.SafetyMarkers[i].id, "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude) });
                }
                const path = 'assets/images/icons/safety_tip_mobile_cluster_icon';
                this.addClusterIncidentMarkersToMap(this.latLongData, this.safetyMarker, path, this.safety);
            }, error => {
                // this.shareddata.loaderDismiss()
            }, () => {
                // this.shareddata.loaderDismiss()
            });
            // this.httpClient.post(this.apiUrl1 + 'get-safety-tips', data)
            //   .subscribe((rdata: any) => {
            //     this.saftyTipsList = rdata
            //     console.log('safetyTips', this.saftyTipsList)
            //     this.safetyTipList = rdata
            //     this.shareddata.setSafetyTipData(this.safetyTipList)
            //     this.SafetyMarkers = rdata.data
            //     console.log(this.SafetyMarkers)
            //     this.latLongData = []
            //     for (let i = 0; i < this.SafetyMarkers.length; i++) {
            //       var time = this.SafetyMarkers[i].added_date.substr(11, 19)
            //       console.log("time*****", time)
            //       // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
            //       this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
            //     }
            //     const path = 'assets/images/icons/safety_tip_mobile_cluster_icon'
            //     this.addClusterIncidentMarkersToMap(this.latLongData, this.safetyMarker, path, this.safety)
            //   }, error => {
            //   });
        }
    }
    //***************************Show map*******************
    showMap() {
        console.log('hi');
        this.lat = localStorage.getItem('latitude');
        this.longi = localStorage.getItem('longitude');
        console.log(this.lat);
        console.log(this.longi);
        const location = new google.maps.LatLng(this.lat, this.longi);
        const options = {
            disableDefaultUI: true,
            //mapTypeControl: true,
            //scaleControl: true,
            zoomControl: true,
            center: location,
            zoom: 13,
            animation: google.maps.Animation.DROP,
            draggable: true,
            streetViewControl: false,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false
        };
        console.log(options);
        // this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        var map = new google.maps.Map(document.getElementById("map"), options);
        this.map = map;
        console.log("map", map);
        this.map.addListener('idle', () => {
            let zoomLevel = map.getZoom();
            let edgebounds = map.getBounds();
            let ne = edgebounds.getNorthEast(); // Coords of the northeast corner
            let sw = edgebounds.getSouthWest(); // Coords of the southwest corner
            let nw = new google.maps.LatLng(ne.lat(), sw.lng()); // Coords of the NW corner
            let se = new google.maps.LatLng(sw.lat(), ne.lng()); // Coords of the SE corner
            map.setOptions({ minZoom: 3, maxZoom: 45 });
            //creating array to pass in API
            let mapedges = {
                'ne': { lat: ne.lat(), lng: ne.lng() },
                'sw': { lat: sw.lat(), lng: sw.lng() },
                'nw': { lat: nw.lat(), lng: nw.lng() },
                'se': { lat: se.lat(), lng: se.lng() }
            };
            var default_reported_incident_data = {
                'map_zoom': zoomLevel,
                'map_bound': mapedges
            };
            localStorage.setItem('map_zoom', zoomLevel);
            localStorage.setItem('mapBound', JSON.stringify(mapedges));
            // this.show = false
            // this.hide = true
            if (this.segmentModel == "two") {
                this.getSafetyTipsList(default_reported_incident_data);
            }
            else {
                this.getReportedIncident(default_reported_incident_data);
            }
        });
    }
    //*****************Add marker founded by List***************
    addMarkersToMap(markers, icon, romove_flag) {
        console.log("Markers in Add markers", markers);
        for (let marker of markers) {
            console.log(marker);
            var incident_added_date = marker.created_on != null ? marker.created_on : "";
            var dayBetween = this.days_between(incident_added_date);
            this.getDaysAgo = (dayBetween > 7 ? this.ChangeDateFormat(incident_added_date, 1) : (dayBetween == 0) ? 'Today' : (dayBetween == 1) ? dayBetween + " day ago" : dayBetween + " days ago");
            console.log(this.getDaysAgo);
            marker.show_date = this.getDaysAgo;
            var id = marker.id;
            // time convert
            // let time = this.timeConvert(marker.time_from)
            // console.log("Time",time)
            // marker.show_time = time
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                area: marker.area,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                type: marker.categories,
                date: marker.show_date,
                time: marker.show_time,
                id: marker.id,
                // draggable: true,
                icon: icon
            });
            mapMarker.setMap(this.map);
            if (romove_flag == 'incident') {
                this.incident_remove_marker.push(mapMarker);
            }
            else if (romove_flag == 'safety') {
                this.safety_remove_marker.push(mapMarker);
            }
            google.maps.event.addListener(mapMarker, 'dragend', function () {
                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong" + markerlatlong);
                console.log("lat" + mapMarker.getPosition().lat());
                console.log("long" + mapMarker.getPosition().lng());
                //this.placeMarkerAndPanTo(e.latLng, this.map);
                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng());
                // localStorage.setItem('lat', lat)
                // localStorage.setItem('longi', longi)
                //code for getting formatted address from the selected latitude and longitude 
                var geocoder = new google.maps.Geocoder();
                const latlng = {
                    lat: parseFloat(lat),
                    lng: parseFloat(longi)
                };
                geocoder.geocode({ location: latlng }, (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            this.title = results[0].formatted_address;
                            localStorage.setItem('address', this.title);
                            console.log(this.title);
                            //this.markers = [];
                            var title = localStorage.getItem('address');
                            var lat1 = localStorage.getItem('lati');
                            var longi1 = localStorage.getItem('longit');
                            console.log(title);
                            let position = new google.maps.LatLng(lat1, longi1);
                            mapMarker.position = position,
                                mapMarker.title = title,
                                mapMarker.latitude = lat1,
                                mapMarker.longitude = longi1,
                                mapMarker.animation = 'DROP',
                                mapMarker.draggable = true,
                                mapMarker.setMap(this.map);
                            //var self = this;
                            this.addInfoWindowToMarker(mapMarker);
                            var data = { 'latitude': lat1, 'longitude': longi1, 'title': title };
                            this.markers = data;
                            console.log('3', this.markers);
                        }
                        else {
                            window.alert("No results found");
                        }
                    }
                    else {
                        window.alert("Geocoder failed due to: " + status);
                    }
                });
            }.bind(this));
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    // ******************Get lat & long by Search******************
    getlatlong(value) {
        var geocoder = new google.maps.Geocoder();
        var city, hascity, address = value;
        geocoder.geocode({ 'address': address }, results => {
            if (results[0].formatted_address) {
                console.log(results);
                this.address = JSON.stringify(results[0].formatted_address);
                this.lat = JSON.stringify(results[0].geometry.location.lat());
                this.longi = JSON.stringify(results[0].geometry.location.lng());
                console.log(this.lat);
                console.log(this.longi);
                if (this.lat != undefined && this.longi != undefined) {
                    localStorage.setItem('latitude', this.lat);
                    localStorage.setItem('longitude', this.longi);
                    this.showMap();
                }
            }
        });
    }
    getOriginal(e) {
        console.log(e.target.value);
        if (e.target.value.length == 0) {
            this.pagename1 = '';
            var cityname = localStorage.getItem('City_name');
            this.getlatlong(e.target.value);
        }
    }
    initAutocomplete() {
        // Create the autocomplete object, restricting the search predictions to
        // geographical location types.
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete').getElementsByTagName('input')[0], {
            types: ["geocode"]
        });
        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components.
        this.autocomplete.setFields(["address_component"]);
        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        this.autocomplete.addListener("place_changed", fillInAddress => {
            this.autoaddress = [];
            this.autocomplete.getPlace();
            console.log("autocomplete", this.autocomplete.getPlace());
            var autoadd = this.autocomplete.getPlace();
            this.autoadd1 = autoadd.address_components;
            // console.log(this.autoadd1[0].long_name)
            for (var i = 0; i < this.autoadd1.length; i++) {
                this.autoaddress.push(this.autoadd1[i].long_name);
            }
            // this.autoaddress = autoadd.long_name.join(',')
            console.log(this.autoaddress);
            var final_result = this.autoaddress.join(',');
            console.log(final_result);
            console.log(this.autoaddress);
            this.searchForm.value.location = '';
            //this.searchForm.controls['location'].setValue(final_result)
            this.address = this.autoadd1[0].long_name;
            console.log("autocomplt", this.address);
            this.clearfilter = true;
            console.log(this.clearfilter);
            this.getlatlong(final_result);
            this.shareddata.safetyfiltersdata = '';
            this.pagename1 = '';
            // localStorage.setItem('City_name', this.address)
        });
        // this.autocomplete.clearInstanceListeners('autocomplete');
    }
    clearInput(e) {
        jquery__WEBPACK_IMPORTED_MODULE_10__('.pac-container').hide();
    }
    setinfo(id, infowindow, marker) {
        if (this.segmentModel == 'one') {
            let data = new FormData();
            data.append('incident_id', id);
            // this.shareddata.presentLoadingDefault()
            this.shareddata.sharedPostRequest('reported-incident/details', data).subscribe((rdata) => {
                console.log(rdata);
                var infoWindowContent = '<div id="incident1">' +
                    //'<h5 id="firstHeading" class"firstHeading;display:none">' + marker.id + '</h5>' +
                    '<p>Type: <span style="font-weight:500; color:#292020;">' + rdata.data.categories + '</span></p>' +
                    '<p>Location: <span style="font-weight:500; color:#292020;">' + rdata.data.city + '</span></p>' +
                    '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' + this.ChangeDateFormat(rdata.data.incident_date, 1) + " | " + this.timeConvert(rdata.data.time_from) + '</span></p>' +
                    '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>'
                    + '</div>';
                // return infoWindowContent
                infowindow.setContent(infoWindowContent);
                this.infoWindows.push(infowindow);
                this.closeAllInfoWindows();
                infowindow.open(this.map, marker);
                google.maps.event.addListener(infowindow, 'domready', () => {
                    document.getElementById('incident1').addEventListener("click", () => {
                        this.zone.run(() => {
                            console.log("hiiiiiii");
                            this.getIncidentDetails(rdata);
                        });
                    });
                });
            }, error => {
                // this.shareddata.loaderDismiss()
            }, () => {
                // this.shareddata.loaderDismiss()
            });
        }
        else {
            let data = new FormData();
            data.append('safety_tip_id', id);
            // this.shareddata.presentLoadingDefault()
            this.shareddata.sharedPostRequest('safety-tip/details', data).subscribe((rdata) => {
                console.log(rdata);
                var time = rdata.data.added_date.substr(11, 19);
                let infoWindowContent = '<div id="safetyTip">' +
                    '<p>Title: <span style="font-weight:500; color:#292020;">' + rdata.data.safety_tip_title + '</span></p>' +
                    '<p>Location: <span style="font-weight:500; color:#292020;">' + rdata.data.city + '</span></p>' +
                    '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' +
                    this.ChangeDateFormat(rdata.data.added_date, 1) + " | " + this.timeConvert(time) + '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>'
                    + '</div>';
                // return infoWindowContent
                infowindow.setContent(infoWindowContent);
                this.infoWindows.push(infowindow);
                this.closeAllInfoWindows();
                infowindow.open(this.map, marker);
                google.maps.event.addListener(infowindow, 'domready', () => {
                    document.getElementById('safetyTip').addEventListener("click", () => {
                        this.zone.run(() => {
                            console.log("hiiiiiii");
                            this.getSafetyDetails(rdata);
                        });
                    });
                });
            }, error => {
                // this.shareddata.loaderDismiss()
            }, () => {
                // this.shareddata.loaderDismiss()
            });
        }
    }
    addInfoWindowToMarker(marker) {
        this.zone.run(() => {
            console.log("marker", marker);
            console.log("marker", marker.id);
            // if (this.segmentModel == 'one') {
            console.log("segment", this.segmentModel);
            let infoWindow = new google.maps.InfoWindow({});
            this.setinfo(marker.id, infoWindow, marker);
            console.log("windowOpen");
            // var infoWindowContent = '<div id="incident1">' +
            //    '<h5 id="firstHeading" class"firstHeading;display:none">' + marker.id + '</h5>' +
            //   '<p>Type: <span style="font-weight:500; color:#292020;">' + marker.category + '</span></p>' +
            //   '<p>Location: <span style="font-weight:500; color:#292020;">' + marker.city + '</span></p>' +
            //   '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' + marker.dateTime + '</span></p>' +
            //   '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>'
            //   + '</div>';
            // marker.set(marker.id)
            //         marker.addListener('click', (cm) => {
            // console.log(this.id)
            //           console.log("*****", cm)
            //           this.closeAllInfoWindows();
            //           infoWindow.open(this.map, marker);
            //           console.log("windowOpen")
            //         });
            // this.infoWindows.push(infoWindow);
            // google.maps.event.addListener(infoWindow, 'domready', () => {
            //   document.getElementById('incident1').addEventListener("click", () => {
            //     this.zone.run(() => {
            //       this.getIncidentDetails(marker);
            //     })
            //   })
            // })
            // }
            // else {
            //     console.log("segment", this.segmentModel)
            //     let infoWindowContent = '<div id="safetyTip">' +
            //       '<p>Title: <span style="font-weight:500; color:#292020;">' + marker.title + '</span></p>' +
            //       '<p>Location: <span style="font-weight:500; color:#292020;">' + marker.city + '</span></p>' +
            //       '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' +
            //       marker.dateTime + '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>'
            //       + '</div>';
            //     let infoWindow = new google.maps.InfoWindow({
            //       content: infoWindowContent,
            //     });
            //     marker.addListener('click', () => {
            //       this.closeAllInfoWindows();
            //       infoWindow.open(this.map, marker);
            //       console.log("windowOpen")
            //     });
            //     google.maps.event.addListener(infoWindow, 'domready', () => {
            //       document.getElementById('safetyTip').addEventListener("click", () => {
            //         this.zone.run(() => {
            //           console.log("marker**", marker)
            //           this.getSafetyDetails(marker);
            //         })
            //       })
            //     })
            // }
        });
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            // this.navController.navigateForward("/detailpopup")
            window.close();
        }
    }
    newmodalin() {
        var default_reported_incident_data = {
            'map_zoom': localStorage.getItem('map_zoom'),
            'map_bound': localStorage.getItem('mapBound'),
        };
        // this.getReportedIncident(default_reported_incident_data)
        // this.getSafetyTipsList(default_reported_incident_data)
        console.log('++++++++++++++', this.clearfilter);
        let navigationExtras = {
            queryParams: {
                segmentModel: this.segmentModel,
                clear_filter: this.clearfilter,
                // incidentList: this.incidentList,
                // safetyTipList: this.safetyTipList,
                pagename: this.pagename
            }
        };
        this.navController.navigateForward([`modelreport`], navigationExtras);
    }
    share() {
        this.navController.navigateForward(`/preframingtwo`);
    }
    legal() {
        this.navController.navigateForward(`/domesticviolence`);
    }
    help() {
        // this.modalController.dismiss('cancel');
        this.navController.navigateForward(`help`);
    }
    menu() {
        // this.modalController.dismiss('cancel');
        // this.navController.navigateForward(`/safetyfilter`)
        this.navController.navigateForward(`/menu`);
    }
    safetytip() {
        this.navController.navigateForward(`/safteytipone`);
    }
    viewsafety() {
        this.navController.navigateForward(`/viewsafety`);
    }
    preframing() {
        this.navController.navigateForward(`/preframingtwo`);
    }
    days_between(date) {
        // The number of milliseconds in one day
        var date1;
        date1 = new Date(date.replace(/ /g, "T"));
        var todays_date;
        todays_date = new Date();
        const ONE_DAY = 1000 * 60 * 60 * 24;
        const differenceMs = Math.abs(todays_date - date1);
        var daydiff = Math.round(differenceMs / ONE_DAY);
        return daydiff;
    }
    ChangeDateFormat(date, val) {
        var dayDate = new Date(date.replace(/ /g, "T"));
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[dayDate.getMonth()];
        var monthVal = (val == 1 ? monthName.substr(0, 3) : monthName);
        var getDate = dayDate.getDate();
        var getYear = dayDate.getFullYear();
        var format_date = getDate + " " + monthVal + " " + getYear;
        return format_date;
    }
    timeConvert(time) {
        // console.log("Time in convert ", time)
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
            var time_array = [];
            time_array.push(time[0]);
            time_array.push(time[1]);
            time_array.push(time[2]);
            time_array.push(time[5]);
        }
        return time_array.join('');
        // return adjusted time or original string
    }
    showFullMap() {
        this.hide = true;
        this.show = false;
        // console.log("e",map)
    }
    hide1() {
        this.hide = false;
        this.show = true;
    }
    openModel() {
        console.log("openModel");
    }
    incidentViewmore(e) {
        console.log(e);
    }
    addClusterIncidentMarkersToMap(locations, icon, path, type) {
        console.log(icon);
        console.log(locations);
        this.locations1 = locations;
        var bounds = new google.maps.LatLngBounds();
        var infoWin = new google.maps.InfoWindow();
        let maxZoomService;
        var markersList = [];
        let markers = [];
        // Add some markers to the map.
        markers = locations.map((location, i) => {
            var marker = new google.maps.Marker({
                position: location,
                animation: google.maps.Animation.DROP,
                // html: "<span class='map-grey'>Type:</span><span class='map-grey map-dark'>#"+locations[i].incident_id+' '+locations[i].categories+'</span><br>'+"<span class='map-grey'>Location : </span><span class='map-grey map-dark'>"+locations[i].area+', '+locations[i].city+'</span><br>'+"<span class='map-grey'>Date & Time : </span><span class='map-grey map-dark'>"+locations[i].dateTime+'</span>'+'<br><span class="map-grey"><a href="#" data-toggle="modal" data-target="#incident-viewmore'+locations[i].incident_viewmore_id+'">View more details</a></span>',
                icon: icon,
            });
            marker.set('id', locations[i].id);
            google.maps.event.addListener(marker, 'click', () => {
                this.addInfoWindowToMarker(marker);
            });
            this.icident_markersList.push(marker);
            //   //extend the bounds to include each marker's position
            bounds.extend(marker.position);
            return marker;
        });
        // const path = 'assets/images/icons/incidents_mobile_cluster_icon'
        // Options to pass along to the marker clusterer
        const clusterOptions = {
            imagePath: path,
            maxZoom: 20,
        };
        console.log("map", this.map);
        console.log("marker", markers);
        console.log("options", clusterOptions);
        // Add a marker clusterer to manage the markers.
        var markerClusterer = new _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_8__["default"](this.map, markers, clusterOptions);
        // console.log("***",markerClusterer)
        this.markerClustererList.push(markerClusterer);
        // Change styles after cluster is created
        const styles = markerClusterer.getStyles();
        for (let i = 0; i < styles.length; i++) {
            if (type == 'incident') {
                styles[i].textColor = "white";
            }
            else {
                styles[i].textColor = "black";
            }
        }
        console.log("bounds list", bounds);
        // this.map.fitBounds(bounds);       // auto-zoom
        // this.map.panToBounds(bounds);     // auto-center
    }
    removeMarkers() {
        for (let j = 0; j < this.markerClustererList.length; j++) {
            this.markerClustererList[j].setMap(null);
        }
        for (let i = 0; i < this.icident_markersList.length; i++) {
            this.icident_markersList[i].setMap(null);
        }
    }
    getIncidentDetails(marker) {
        console.log("marker", marker.data);
        var detail_string = JSON.stringify(marker.data);
        let navigationExtras = {
            queryParams: {
                type: 'incident',
                marker: detail_string
            }
        };
        this.navController.navigateForward([`/detailpopup`], navigationExtras);
    }
    getSafetyDetails(marker) {
        console.log("marker", marker);
        var detail_string = JSON.stringify(marker.data);
        let navigationExtras = {
            queryParams: {
                type: 'safetyTip',
                marker: detail_string
            }
        };
        this.navController.navigateForward([`/detailpopup`], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], HomePage.prototype, "mapRef", void 0);
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map