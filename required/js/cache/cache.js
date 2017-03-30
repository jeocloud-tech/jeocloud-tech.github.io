/**
 * 自定义缓存类
 * 
 */
function JcCache() {
    this._key = {}
}
JcCache.prototype.set = function(key, value) {
    this._key[key] = value;
}
JcCache.prototype.get = function(key) {
    return this._key[key];
}
JcCache.prototype.isExist = function(key) {
    if(!key) {
        return false;
    } else {
        if(!this._key[key]) {
            return false;
        }
        return true;
    }
}