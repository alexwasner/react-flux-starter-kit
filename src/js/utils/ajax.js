let $ = require('jquery');
let merge = require('mout/object/merge');
function _genHash(s){
  if (!s) {
    return '';
  }
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a;},0);
}
module.exports =  function _ajax(secure, url, params, type, data){
  url = 'API URL GOES HERE'+url;
  if (secure) {
    url = 'https://'+url;
  }
  else {
    url = 'http://'+url;
  }
  var dataHash;
  params = params || {};
  var options = merge({},{
    url: url,
    dataType: params.dataType || 'json',
    type: type,
    data: JSON.stringify(data),
    contentType: params.contentType || 'application/json',
    processData: type === 'GET',
    dataFilter: function(data, type) {
      if (data === '' && type === 'json') {
        return 'null';
      }
      dataHash = _genHash(data);
      return data;
    },
    success: function(response, status) {
      if (status === 'success' || status === 'noncontent') {
        return Promise.resolve(response, dataHash);
      } else {
        return Promise.reject(response);
      }
    },
    error: function(err, timeout) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (timeout === "timeout") {
        return Promise.reject(timeout);
      }
      return Promise.reject(args);
    }.bind(this),
    timeout: 20000
  });
  return $.ajax(options);
};