var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const hasKey = this.cache.has(key);

  if (hasKey) {
    clearTimeout(this.cache.get(key).timeoutId);
  }

  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, timeoutId });

  return hasKey;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
