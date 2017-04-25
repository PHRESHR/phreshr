module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "5a2f24b7ee59e464aef9"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest().then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return Promise.resolve(outdatedModules);
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(20)(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(21);
exports.default = AsyncComponent_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const variables_1 = __webpack_require__(7);
const { breakpoints, color, font, headings, transition } = variables_1.variables;
exports.media = Object.keys(breakpoints).reduce((accumulator, label) => {
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => styled_components_1.css `
    @media only screen and (min-width: ${emSize}rem) {
      ${styled_components_1.css(...args)}
    }
  `;
    return accumulator;
}, {});
function aspectRatio(width, height) {
    function ratio() {
        return (height / width);
    }
    return `
    width: 100%;
    position: relative;
    padding-bottom: calc(${ratio()} * 100%);

    > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
  `;
}
exports.aspectRatio = aspectRatio;
exports.Collapsable = styled_components_1.default.section `
  opacity: 1;
  display: flex;
  flex-direction: column;
  ${props => props.animate && `
    transition: 
      transform 300ms linear,
      opacity 300ms ease-in,
      width 200ms ease-in,
      max-height 200ms ease-in 200ms;
    max-height: 9999px;
    transform: scale(1);
    transform-origin: 100% 100%;

    ${props.collapsed && `
      transform: scale(0);
      transition: 
        transform 300ms ease-out,
        opacity 300ms ease-out,
        width 300ms ease-out 600ms;
    `}
  `}

  ${props => props.collapsed && `
    opacity: 0;
    max-height: 0;
  `}
`;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = {
    color: {
        primary: '#47C51D',
        secondary: '#53C1DE',
        phreshrYellow: '#FDE74C',
        phreshrBlue: '#2980B9',
        phreshrBlueAlt: '#009AFF;',
        white: '#FFF',
        black: '#111',
        base: 'rgba(0,0,0,0.4)',
        link: '#FDE74C',
        transLight: 'rgba(0, 0, 0, .1)',
        transMid: 'rgba(0, 0, 0, .55)',
        transDark: 'rgba(0, 0, 0, .85)',
        transNone: 'rgba(0, 0, 0, 0)',
    },
    font: {
        family: `Lato, Helvetica Neue, Helvetica, Arial, sans-serif`,
        base: '1rem',
    },
    headings: {
        family: 'Lato',
    },
    transition: '300ms ease-in-out',
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    },
};
exports.default = exports.variables;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
exports.default = styled_components_1.injectGlobal `
  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  * {
    min-height: 0;
    min-width: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    color: #fefefe;
    background-color: #222;
    font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
  ::selection {
    background: rgba(200,200,255,.1);
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 0.875rem 0;
  }
  p { 
    line-height: 1.6;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  li {
    list-style: none
  }
  /* Helper Classes */
  .hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
  }
`;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const devMiddleware = __webpack_require__(64);
const hotMiddleware = __webpack_require__(65);
const webpack = __webpack_require__(8);
const webpack_client_1 = __webpack_require__(52);
const compiler = webpack(webpack_client_1.default);
exports.webpackDevMiddleware = devMiddleware(compiler, {
    noInfo: true,
    hot: true,
    stats: 'minimal',
});
exports.webpackHotMiddleware = hotMiddleware(compiler, {
    log: console.log,
    reload: true,
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(58);
const React = __webpack_require__(0);
const server_1 = __webpack_require__(59);
const react_router_dom_1 = __webpack_require__(2);
const react_apollo_1 = __webpack_require__(10);
const styled_components_1 = __webpack_require__(1);
const App_1 = __webpack_require__(36);
const Html_1 = __webpack_require__(39);
const configureApolloClient_1 = __webpack_require__(50);
__webpack_require__(12);
exports.default = (req, res, context) => __awaiter(this, void 0, void 0, function* () {
    const client = configureApolloClient_1.default({ ssrMode: true });
    let app = (React.createElement(react_apollo_1.ApolloProvider, { client: client },
        React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
            React.createElement(App_1.default, null))));
    if (process.env.DEV) {
        const { AppContainer } = __webpack_require__(61);
        app = React.createElement(AppContainer, null, app);
    }
    if (context.url) {
        res.redirect(302, context.url);
    }
    const content = yield react_apollo_1.renderToStringWithData(app);
    const styles = yield styled_components_1.styleSheet.getCSS();
    const initialState = yield client.getInitialState();
    const state = { apollo: initialState };
    const html = React.createElement(Html_1.default, { html: content, state: state, styles: styles });
    return `<!doctype html>${server_1.renderToString(html)}`;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  flex-wrap: wrap;
  width: 100%;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  padding: ${props => props.padding ? props.padding : '.375rem'};

  ${utils_1.media.sm `
    padding: ${props => props.padding ? props.padding : '.5rem'};
  `}

  ${utils_1.media.md `
    flex-direction: ${props => props.column ? 'column' : 'row'};
    flex-wrap: ${props => props.wrap && 'wrap'};
    padding: ${props => props.padding ? props.padding : '2.5rem'};
  `}

  ${utils_1.media.lg `
    flex-direction: ${props => props.column ? 'column' : 'row'};
    padding: ${props => props.padding ? props.padding : '2.5rem 5rem'};
  `}

  .header {
    flex: 0 0 100%;
  }

  .item {
    margin-right: ${props => props.itemMargin};
    &:last-child {
      margin-right: 0;
    }
  }
`;
exports.default = Container;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(5);
const express = __webpack_require__(17);
const bodyParser = __webpack_require__(15);
const compression = __webpack_require__(16);
const morgan = __webpack_require__(18);
const dotenv = __webpack_require__(9);
const render_1 = __webpack_require__(14);
dotenv.config({ silent: true });
const { ENV = "development" || 'development', HOST = '0.0.0.0', PORT = 8080, } = process.env;
const isPROD = "development" === 'production';
const app = express();
if (isPROD) {
    app.use(compression());
}
else {
    const { webpackDevMiddleware, webpackHotMiddleware, } = __webpack_require__(13);
    app.use(webpackDevMiddleware);
    app.use(webpackHotMiddleware);
}
app
    .set('env', ENV)
    .set('port', PORT)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(morgan(isPROD ? 'combined' : 'dev'))
    .use(express.static(path.join(__dirname, '/static/assets'), { maxAge: 86400000 }))
    .get('*', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const context = {};
    let html;
    try {
        html = yield render_1.default(req, res, context);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
    if (context.url) {
        return res.redirect(context.status || 301, context.url);
    }
    res.status(context.status || 200).send(html);
}));
app.listen(PORT, () => console.log(`App Server is now running on http://${HOST}:${PORT}`));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const AsyncComponent = (getComponent) => { return _a = class Async extends React.Component {
        constructor() {
            super(...arguments);
            this.state = { Component: Async.Component };
        }
        componentDidMount() {
            if (this.state.Component) {
                return;
            }
            getComponent().then(Component => {
                Async.Component = Component;
                this.setState({ Component });
            });
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return React.createElement(Component, Object.assign({}, this.props));
            }
            return null;
        }
    },
    _a.Component = null,
    _a; var _a; };
exports.default = AsyncComponent;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Logo_1 = __webpack_require__(26);
const Nav_1 = __webpack_require__(29);
const styles_1 = __webpack_require__(24);
function Header() {
    return (React.createElement(styles_1.default, null,
        React.createElement(Logo_1.default, null),
        React.createElement(Nav_1.default, null)));
}
exports.default = Header;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __webpack_require__(22);
exports.default = Header_1.default;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
const variables_1 = __webpack_require__(7);
const { color, } = variables_1.variables;
const Toolbar = styled_components_1.default.header `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom,${color.transDark} 1%,${color.transLight});
  width: 100%;
  height: 3.75rem;
  padding: 0.3125rem;
  z-index: 999;
  ${utils_1.media.md `
    height: 5rem;
  `}
`;
exports.default = Toolbar;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(2);
const styles_1 = __webpack_require__(27);
const logo = __webpack_require__(53);
function Logo() {
    return (React.createElement(styles_1.default, { className: "branding" },
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement("img", { src: `${logo}`, alt: "React logo" }))));
}
exports.default = Logo;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logo_1 = __webpack_require__(25);
exports.default = Logo_1.default;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
const Branding = styled_components_1.default.div `
  width: 250px;
  ${utils_1.media.md `
    width: 300px;
  `}
`;
exports.default = Branding;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(2);
const styles_1 = __webpack_require__(30);
function Nav() {
    return (React.createElement(styles_1.default, null,
        React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/", activeClassName: "active" }, "Home"),
        React.createElement(react_router_dom_1.NavLink, { to: "/shows", activeClassName: "active" }, "Shows")));
}
exports.default = Nav;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __webpack_require__(28);
exports.default = Nav_1.default;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
const variables_1 = __webpack_require__(7);
const { color, } = variables_1.variables;
const Navigation = styled_components_1.default.nav `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 5px;
  ${utils_1.media.md `padding: 0 10px;`}
  ${utils_1.media.xl `padding: 0 20px;`}

  a {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    padding: .625rem;

    &.active {
      background-color: ${color.phreshrYellow};
      color: #111;
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;
exports.default = Navigation;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(2);
const Home_1 = __webpack_require__(43);
const About_1 = __webpack_require__(42);
const Shows_1 = __webpack_require__(47);
const Show_1 = __webpack_require__(46);
const Watch_1 = __webpack_require__(48);
const NotFound_1 = __webpack_require__(45);
function Routes(props) {
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/about", component: About_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/shows", component: Shows_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/watch/:id/:uid", component: Watch_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/show/:id/:uid", component: Show_1.default }),
        React.createElement(react_router_dom_1.Route, { component: NotFound_1.default })));
}
exports.default = Routes;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Routes_1 = __webpack_require__(31);
exports.default = Routes_1.default;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(2);
function Status(props) {
    const { code, children } = props;
    const status = ({ staticContext }) => {
        if (staticContext) {
            staticContext.status = code;
        }
        return children || null;
    };
    return (React.createElement(react_router_dom_1.Route, { render: status }));
}
exports.default = Status;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = __webpack_require__(33);
exports.default = Status_1.default;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const recompose_1 = __webpack_require__(6);
const withHead_1 = __webpack_require__(41);
const withAnalytics_1 = __webpack_require__(40);
const styles_1 = __webpack_require__(37);
const Header_1 = __webpack_require__(23);
const Routes_1 = __webpack_require__(32);
function App() {
    return (React.createElement(styles_1.default, null,
        React.createElement(Header_1.default, null),
        React.createElement(Routes_1.default, null)));
}
exports.default = recompose_1.compose(withHead_1.default, withAnalytics_1.default)(App);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __webpack_require__(35);
exports.default = App_1.default;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const Container_1 = __webpack_require__(19);
const Canvas = styled_components_1.default(Container_1.default) `
  flex-direction: column;
  height: 100%;
  padding: 5rem 0;
`;
exports.default = Canvas;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_helmet_1 = __webpack_require__(11);
const serialize = __webpack_require__(62);
const isPROD = "development" === 'production';
__webpack_require__(12);
function Html(props) {
    const { html, state, styles } = props;
    const helmet = react_helmet_1.Helmet.renderStatic();
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            helmet.title.toComponent(),
            helmet.meta.toComponent(),
            helmet.link.toComponent(),
            helmet.script.toComponent(),
            React.createElement("style", { type: "text/css" }, styles)),
        React.createElement("body", null,
            React.createElement("svg", { className: "hidden" },
                React.createElement("symbol", { id: "icon-menu", viewBox: "0 0 24 24" },
                    React.createElement("title", null, "menu"),
                    React.createElement("path", { d: "M24,5.8H0v-2h24V5.8z M19.8,11H4.2v2h15.6V11z M24,18.2H0v2h24V18.2z" })),
                React.createElement("symbol", { id: "icon-cross", viewBox: "0 0 24 24" },
                    React.createElement("title", null, "cross"),
                    React.createElement("path", { d: "M13.4,12l7.8,7.8l-1.4,1.4l-7.8-7.8l-7.8,7.8l-1.4-1.4l7.8-7.8L2.7,4.2l1.4-1.4l7.8,7.8l7.8-7.8l1.4,1.4L13.4,12z" }))),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: html }, id: "root" }),
            isPROD && (React.createElement("script", { dangerouslySetInnerHTML: { __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/assets/service-worker.js');
            }
          ` } })),
            React.createElement("script", { dangerouslySetInnerHTML: { __html: `window.__APOLLO_STATE__ = ${serialize(state)}` } }),
            React.createElement("script", { src: `${"/assets/vendor.js"}` }),
            React.createElement("script", { src: `${"/assets/client.js"}` }))));
}
exports.default = Html;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Html_1 = __webpack_require__(38);
exports.default = Html_1.default;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const recompose_1 = __webpack_require__(6);
const configureAnalytics_1 = __webpack_require__(49);
configureAnalytics_1.configureAnalytics();
const enhance = recompose_1.compose(recompose_1.lifecycle({
    componentDidMount() {
        configureAnalytics_1.pageView();
    },
}));
exports.default = Comp => enhance(props => {
    return React.createElement(Comp, Object.assign({}, props));
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const recompose_1 = __webpack_require__(6);
const react_helmet_1 = __webpack_require__(11);
const enhance = recompose_1.compose(recompose_1.lifecycle({
    componentDidMount() {
    },
}));
exports.default = Comp => enhance(props => {
    return (React.createElement("div", null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("meta", { name: "description", content: "React starter for building universal apps with Typescript, Webpack 2, Apollo" }),
            React.createElement("meta", { property: "og:title", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "og:description", content: "React starter fo building universal apps with Typescript, Webpack 2, Apollo" }),
            React.createElement("meta", { property: "og:url", content: "https://example.com" }),
            React.createElement("meta", { property: "og:type", content: "website" }),
            React.createElement("meta", { property: "og:site_name", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "og:image", content: "" }),
            React.createElement("meta", { property: "og:image:type", content: "image/jpeg" }),
            React.createElement("meta", { property: "og:image:width", content: "1280" }),
            React.createElement("meta", { property: "og:image:height", content: "720" }),
            React.createElement("meta", { property: "og:locale", content: "en_US" }),
            React.createElement("meta", { property: "twitter:title", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "twitter:description", content: "React starter for building universal apps with Typescript, Webpack 2, Apollo" }),
            React.createElement("meta", { property: "twitter:url", content: "https://example.com" }),
            React.createElement("meta", { property: "twitter:card", content: "summary" }),
            React.createElement("meta", { property: "twitter:site", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "twitter:image", content: "" }),
            React.createElement("meta", { property: "twitter:creator", content: "@ReactStarterTypescript" }),
            React.createElement("meta", { name: "apple-mobile-web-app-title", content: "React Starter Typescript" }),
            React.createElement("meta", { name: "application-name", content: "React Starter Typescript" }),
            React.createElement("meta", { name: "theme-color", content: "#2980b9" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-touch-icon-60x60.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-touch-icon-72x72.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180.png" }),
            React.createElement("link", { rel: "icon", sizes: "32x32", type: "image/png", href: "/favicon-icon-32x32.png" }),
            React.createElement("link", { rel: "icon", sizes: "16x16", type: "image/png", href: "/favicon-icon-16x16.png" }),
            React.createElement("link", { rel: "manifest", href: "/manifest.json" }),
            React.createElement("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg" })),
        React.createElement(Comp, Object.assign({}, props))));
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(3);
const About = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 68)).then(module => module.default));
exports.default = About;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(3);
const Home = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 69)).then(module => module.default));
exports.default = Home;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Status_1 = __webpack_require__(34);
function NotFound() {
    return (React.createElement(Status_1.default, { code: 404 },
        React.createElement("div", null,
            React.createElement("h1", null, "Sorry, can\u2019t find that."))));
}
exports.default = NotFound;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NotFound_1 = __webpack_require__(44);
exports.default = NotFound_1.default;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(3);
const Show = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 70)).then(module => module.default));
exports.default = Show;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(3);
const Shows = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 71)).then(module => module.default));
exports.default = Shows;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(3);
const Watch = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 72)).then(module => module.default));
exports.default = Watch;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const IS_BROWSER = typeof window !== 'undefined';
let ReactGA;
if (IS_BROWSER) {
    ReactGA = __webpack_require__(60);
}
function configureAnalytics() {
    if (IS_BROWSER) {
        ReactGA.initialize("UA-40660556-1");
    }
}
exports.configureAnalytics = configureAnalytics;
function pageView() {
    if (IS_BROWSER) {
        const page = window.location.pathname;
        ReactGA.set({ page });
        ReactGA.pageview(page);
    }
}
exports.pageView = pageView;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_apollo_1 = __webpack_require__(10);
const networkInterface = react_apollo_1.createNetworkInterface({
    uri: "https://api.graph.cool/simple/v1/cixm67lmh1yjd0177j5cwt47t",
});
networkInterface.use([{
        applyMiddleware(req, next) {
            if (!req.options.headers) {
                req.options.headers = {};
            }
            next();
        },
    }]);
function configureApolloClient(options) {
    return new react_apollo_1.ApolloClient(Object.assign({}, {
        networkInterface,
        dataIdFromObject: ({ id }) => id || null,
    }, options));
}
exports.default = configureApolloClient;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(5);
const webpack = __webpack_require__(8);
const dotenv = __webpack_require__(9);
dotenv.config({ silent: true });
const isPROD = "development" === 'production';
exports.default = {
    output: {
        path: path.resolve(__dirname, '../build/static/assets'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
                exclude: /(node_modules)/,
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: 'source-map-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                use: 'graphql-tag/loader',
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg|webp)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: `[path][name]${isPROD ? '.[hash:8]' : ''}.[ext]`,
                        },
                    },
                ],
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },
        ],
    },
    plugins: [
        new webpack['EnvironmentPlugin']({
            NODE_ENV: JSON.stringify("development") || 'development',
            GRAPHQL_ENDPOINT: JSON.stringify("https://api.graph.cool/simple/v1/cixm67lmh1yjd0177j5cwt47t"),
            GA_TRACKING_ID: JSON.stringify("UA-40660556-1"),
            AUTH0_CLIENT_ID: JSON.stringify("j3pmDdwu0lm0llytEVxiX0pCiwQpNTzu"),
            AUTH0_AUDIENCE: JSON.stringify("https://phreshr.auth0.com/api/v2/"),
            AUTH0_DOMAIN: JSON.stringify("phreshr.auth0.com"),
        }),
    ],
    resolve: {
        alias: {
            client: path.resolve(__dirname, '../client'),
            ui: path.resolve(__dirname, '../ui'),
            server: path.resolve(__dirname, '../server'),
        },
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    bail: isPROD,
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path = __webpack_require__(5);
const SWPrecacheWebpackPlugin = __webpack_require__(63);
const AssetsPlugin = __webpack_require__(54);
const CompressionPlugin = __webpack_require__(56);
const CopyWebpackPlugin = __webpack_require__(57);
const WebpackMd5Hash = __webpack_require__(66);
const BabiliPlugin = __webpack_require__(55);
const merge = __webpack_require__(67);
const webpack = __webpack_require__(8);
const common_1 = __webpack_require__(51);
const isPROD = "development" === 'production';
exports.default = merge({}, common_1.default, {
    name: 'client',
    entry: {
        client: isPROD ? [
            './client',
        ] : [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true',
            './client',
        ],
    },
    output: {
        filename: `[name]${isPROD ? '.[chunkhash:8]' : ''}.js`,
    },
    plugins: [
        ...(isPROD
            ? [
                new BabiliPlugin({ removeConsole: true }),
                new CompressionPlugin({
                    asset: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: /\.js$|\.html$/,
                    threshold: 10240,
                    minRatio: 0.8,
                }),
                new SWPrecacheWebpackPlugin({
                    cacheId: 'a02bac8c-a7af-4098-a53e-146fa8797dc9',
                    filename: 'service-worker.js',
                    staticFileGlobsIgnorePatterns: [/build\/.*\.map/],
                    staticFileGlobs: [
                        'build/static/**/*',
                    ],
                    stripPrefix: 'build/static',
                    forceDelete: true,
                    runtimeCaching: [
                        {
                            handler: 'fastest',
                            urlPattern: /[.](png|jpg|css)/,
                        },
                        {
                            handler: 'networkFirst',
                            urlPattern: /.*/,
                        },
                    ],
                }),
            ]
            : [
                new webpack.HotModuleReplacementPlugin()
            ]),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.resolve(__dirname, '../build'),
            prettyPrint: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => /node_modules/.test(module.resource),
        }),
        new CopyWebpackPlugin([{
                from: 'ui/static',
                to: '../',
            }]),
        new WebpackMd5Hash(),
    ],
    devtool: isPROD ? 'source-map' : 'inline-source-map',
    externals: {
        videojs: ' videojs',
    },
});


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNzQuNiIgdmlld0JveD0iNDUgNS44IDQxMCA3NC42Ij4KICA8c3R5bGU+CiAgICAuc3Qwe2ZpbGw6I2ZmZn0KICA8L3N0eWxlPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03OC4zOCA1NS4zM0g1Ny43MTV2MjAuMDJINzguMzhWNTUuMzN6bTE0LjU3Mi00NC41NjNINTcuNzE0djE5LjY5OGgzNS4yMzhjLjY0NiAwIDEuMjEgMS4xMyAxLjIxIDEuNzc2IDAgLjY5LS41MjMgMS43OC0xLjIxIDEuNzhINDkuOTY0VjUyLjFoNDIuOTg4YzExLjc0NiAwIDIxLjM1My04LjkyIDIxLjM1My0yMC42NjZzLTkuNTY2LTIwLjY2Ny0yMS4zNTMtMjAuNjY3TTE5NC42MyA1NS4zM2gtMjAuNjY2djIwLjAyaDIwLjY2NlY1NS4zM3oiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEwLjAxIDc1LjM1aDIwLjE0bC0xMS40Mi0yNS40M2M2LjkwMi0zLjM1IDExLjY2NS0xMC4yMSAxMS42NjUtMTguNDg2IDAtMTEuNzg2LTkuNTY2LTIwLjY2Ny0yMS4zNTItMjAuNjY3aC0zNS4wNzZ2MTkuNjk4aDM1LjA3N2MuNjg3IDAgMS4yMSAxLjA5IDEuMjEgMS43NzYgMCAuNjUtLjUyMyAxLjc4LTEuMjEgMS43OGgtMzcuNjZWMTAuNzdoLTE5LjY5N3YyMy4yNUgxMzcuOFYxMC43N2gtMjAuNjd2MjMuMjVoLTIuNTgzVjUyLjFoMi41ODR2MjMuMjVoMjAuNjdWNTIuMWgxMy44ODd2MjMuMjVoMTkuNjk4VjUyLjFoMjguMTc1bDEwLjQ1MyAyMy4yNXptMjMuMzcgMGg0OC40MzhWNTUuMzNIMjMzLjM4djIwLjAyem0wLTIzLjI1aDQ4LjQzOFYzNC4wMThIMjMzLjM4VjUyLjF6bTAtMjEuNjM1aDQ4LjQzOFYxMC43NjdIMjMzLjM4djE5LjY5OHptMTAwLjY3IDI0LjIyYzAtMTEuNzQ3LTkuNTI3LTIwLjYyNy0yMS4yMzItMjAuNjY4aC02LjE3NmMtLjY0NiAwLTEuMjEtMS4wOS0xLjIxLTEuNzc2cy41NjQtMS43NzIgMS4yMS0xLjc3MmgyNy42MWwtLjA0LTE5LjY5OGgtMjcuNTdjLTExLjc0NiAwLTIxLjM1MyA4Ljg4LTIxLjM1MyAyMC42NjZzOS41NjIgMjAuNjY3IDIxLjM1IDIwLjY2N2g2LjA1M2MuNjg3IDAgMS4yMS45MyAxLjIxIDEuNjE1IDAgLjY4Ni0uNTIzIDEuNjE1LTEuMjEgMS42MTVIMjg0LjR2MjAuMDJoMjguMjk2YzExLjc4NyAwIDIxLjM1My04Ljg4IDIxLjM1My0yMC42NjYiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcxLjI2NSA1Mi4xdjIzLjI1aDE5LjY5OFY1Mi4xaDI3LjQwOGwxMC40NTggMjMuMjVoMjAuOTFMNDM4LjMxIDQ5LjkyYzYuOTAzLTMuMzUgMTEuNjY2LTEwLjIxIDExLjY2Ni0xOC40ODYgMC0xMS43ODYtOS41NjYtMjAuNjY3LTIxLjM1My0yMC42NjdoLTM1LjA3N3YxOS42OThoMzQuMzFjLjY4NiAwIDEuMjEgMS4wOSAxLjIxIDEuNzc2IDAgLjY1LS41MjQgMS43OC0xLjIxIDEuNzhoLTM2Ljg5M1YxMC43N2gtMTkuN3YyMy4yNUgzNTcuMzhWMTAuNzdoLTIwLjY2OHYyMy4yNWgtMi41ODJWNTIuMWgyLjU4M3YyMy4yNWgyMC42NjdWNTIuMWgxMy44ODV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxNC4yMTMgNTUuMzNoLTIwLjY2N3YyMC4wMmgyMC42NjdWNTUuMzN6Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("assets-webpack-plugin");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("babili-webpack-plugin");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("copy-webpack-plugin");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("sw-precache-webpack-plugin");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("webpack-md5-hash");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ })
/******/ ]);