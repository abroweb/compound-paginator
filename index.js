(function() {

  exports.init = function(compound) {
    var _this = this;
    if (void 0 === compound.helpers.HelperSet) {
      return console.log('Sorry, my Lord, i can`t create a helper. Maybe, this object isn`t Compound?');
    } else {
      console.log('Paginator ready to die for my Lord!');
      return compound.helpers.HelperSet.prototype.paginator = function(totalCount, selfPage, CountOnPage) {
        _this.setData(totalCount, selfPage, CountOnPage);
        return _this.setHTML();
      };
    }
  };

  exports.options = {
    "totalCount": null,
    "CountOnPage": 5,
    "selfPage": 1,
    "totalPage": null,
    "HTML": ''
  };

  exports.setData = function(totalCount, selfPage, CountOnPage) {
    if (!totalCount) {
      return console.log('My Lord, you forgot to give the "totalCount" in "paginator.setData()" method!');
    } else if (0 === totalCount) {
      return console.log('My lord, count of elements is 0, i can`t display on the page...');
    } else {
      this.options.totalCount = parseInt(totalCount);
      this.options.selfPage = parseInt(selfPage != null ? selfPage : this.options.selfPage);
      this.options.CountOnPage = parseInt(CountOnPage != null ? CountOnPage : this.options.CountOnPage);
      this.options.totalPage = Math.ceil(this.options.totalCount / this.options.CountOnPage);
      this.options.prevPage = this.options.selfPage - 1;
      if (this.options.prevPage <= 0) this.options.prevPage = 1;
      this.options.nextPage = this.options.selfPage + 1;
      if (this.options.nextPage > this.options.totalPage) {
        return this.options.nextPage = this.options.totalPage;
      }
    }
  };

  exports.setHTML = function() {
    var i, _ref;
    this.HTML = '<div class="pagination">';
    this.HTML += '<ul>';
    this.HTML += '<li><a href="?page=' + this.options.prevPage + '">«</a></li>';
    for (i = 1, _ref = this.options.totalPage; 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
      this.HTML += '<li><a href="?page=' + i + '">' + i + '</a></li>';
    }
    this.HTML += '<li><a href="?page=' + this.options.nextPage + '">»</a></li>';
    this.HTML += '</ul>';
    this.HTML += '</div>';
    return this.HTML;
  };

}).call(this);
